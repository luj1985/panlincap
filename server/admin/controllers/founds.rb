Panlincap::Admin.controllers :founds do
  get :index do
    @title = "基金管理"
    @lang = params[:lang]
    if @lang then
      @founds = Found.where :lang => @lang
    else
      @founds = Found.all
    end
    render 'founds/index'
  end

  get :new do
    @title = pat(:new_title, :model => 'found')
    @found = Found.new
    render 'founds/new'
  end

  post :create do
    @found = Found.new(params[:found])
    if @found.save
      @title = pat(:create_title, :model => "found #{@found.id}")
      flash[:success] = pat(:create_success, :model => 'Found')
      params[:save_and_continue] ? redirect(url(:founds, :index)) : redirect(url(:founds, :edit, :id => @found.id))
    else
      @title = pat(:create_title, :model => 'found')
      flash.now[:error] = pat(:create_error, :model => 'found')
      render 'founds/new'
    end
  end

  get :edit, :with => :id do
    @title = pat(:edit_title, :model => "found #{params[:id]}")
    @found = Found.find(params[:id])
    if @found
      render 'founds/edit'
    else
      flash[:warning] = pat(:create_error, :model => 'found', :id => "#{params[:id]}")
      halt 404
    end
  end

  put :update, :with => :id do
    @title = pat(:update_title, :model => "found #{params[:id]}")
    @found = Found.find(params[:id])
    if @found
      if @found.update_attributes(params[:found])
        flash[:success] = pat(:update_success, :model => 'Found', :id =>  "#{params[:id]}")
        params[:save_and_continue] ?
          redirect(url(:founds, :index)) :
          redirect(url(:founds, :edit, :id => @found.id))
      else
        flash.now[:error] = pat(:update_error, :model => 'found')
        render 'founds/edit'
      end
    else
      flash[:warning] = pat(:update_warning, :model => 'found', :id => "#{params[:id]}")
      halt 404
    end
  end

  delete :destroy, :with => :id do
    @title = "Founds"
    found = Found.find(params[:id])
    if found
      if found.destroy
        flash[:success] = pat(:delete_success, :model => 'Found', :id => "#{params[:id]}")
      else
        flash[:error] = pat(:delete_error, :model => 'found')
      end
      redirect url(:founds, :index)
    else
      flash[:warning] = pat(:delete_warning, :model => 'found', :id => "#{params[:id]}")
      halt 404
    end
  end

  delete :destroy_many do
    @title = "Founds"
    unless params[:found_ids]
      flash[:error] = pat(:destroy_many_error, :model => 'found')
      redirect(url(:founds, :index))
    end
    ids = params[:found_ids].split(',').map(&:strip)
    founds = Found.find(ids)
    
    if Found.destroy founds
    
      flash[:success] = pat(:destroy_many_success, :model => 'Founds', :ids => "#{ids.to_sentence}")
    end
    redirect url(:founds, :index)
  end
end
