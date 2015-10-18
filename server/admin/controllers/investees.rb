Panlincap::Admin.controllers :investees do
  get :index do
    @title = "Investees"
    @investees = Investee.all
    render 'investees/index'
  end

  get :new do
    @title = pat(:new_title, :model => 'investee')
    @investee = Investee.new
    render 'investees/new'
  end

  post :create do
    @investee = Investee.new(params[:investee])
    if @investee.save
      @title = pat(:create_title, :model => "investee #{@investee.id}")
      flash[:success] = pat(:create_success, :model => 'Investee')
      params[:save_and_continue] ? redirect(url(:investees, :index)) : redirect(url(:investees, :edit, :id => @investee.id))
    else
      @title = pat(:create_title, :model => 'investee')
      flash.now[:error] = pat(:create_error, :model => 'investee')
      render 'investees/new'
    end
  end

  get :edit, :with => :id do
    @title = pat(:edit_title, :model => "investee #{params[:id]}")
    @investee = Investee.find(params[:id])
    if @investee
      render 'investees/edit'
    else
      flash[:warning] = pat(:create_error, :model => 'investee', :id => "#{params[:id]}")
      halt 404
    end
  end

  put :update, :with => :id do
    @title = pat(:update_title, :model => "investee #{params[:id]}")
    @investee = Investee.find(params[:id])
    if @investee
      if @investee.update_attributes(params[:investee])
        flash[:success] = pat(:update_success, :model => 'Investee', :id =>  "#{params[:id]}")
        params[:save_and_continue] ?
          redirect(url(:investees, :index)) :
          redirect(url(:investees, :edit, :id => @investee.id))
      else
        flash.now[:error] = pat(:update_error, :model => 'investee')
        render 'investees/edit'
      end
    else
      flash[:warning] = pat(:update_warning, :model => 'investee', :id => "#{params[:id]}")
      halt 404
    end
  end

  delete :destroy, :with => :id do
    @title = "Investees"
    investee = Investee.find(params[:id])
    if investee
      if investee.destroy
        flash[:success] = pat(:delete_success, :model => 'Investee', :id => "#{params[:id]}")
      else
        flash[:error] = pat(:delete_error, :model => 'investee')
      end
      redirect url(:investees, :index)
    else
      flash[:warning] = pat(:delete_warning, :model => 'investee', :id => "#{params[:id]}")
      halt 404
    end
  end

  delete :destroy_many do
    @title = "Investees"
    unless params[:investee_ids]
      flash[:error] = pat(:destroy_many_error, :model => 'investee')
      redirect(url(:investees, :index))
    end
    ids = params[:investee_ids].split(',').map(&:strip)
    investees = Investee.find(ids)
    
    if Investee.destroy investees
    
      flash[:success] = pat(:destroy_many_success, :model => 'Investees', :ids => "#{ids.to_sentence}")
    end
    redirect url(:investees, :index)
  end
end