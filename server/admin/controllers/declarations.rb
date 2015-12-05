Panlincap::Admin.controllers :declarations do
  get :index do
    @title = "Declarations"

    @lang = params[:lang]
    if @lang then
      @declarations = Declaration.where(:lang => @lang).order("lang DESC, name ASC")
    else
      @declarations = Declaration.all.order("lang DESC, name ASC")
    end
    render 'declarations/index'
  end

  get :new do
    @title = pat(:new_title, :model => 'declaration')
    @declaration = Declaration.new
    render 'declarations/new'
  end

  post :create do
    @declaration = Declaration.new(params[:declaration])
    if @declaration.save
      @title = pat(:create_title, :model => "declaration #{@declaration.id}")
      flash[:success] = pat(:create_success, :model => 'Declaration')
      params[:save_and_continue] ? redirect(url(:declarations, :index)) : redirect(url(:declarations, :edit, :id => @declaration.id))
    else
      @title = pat(:create_title, :model => 'declaration')
      flash.now[:error] = pat(:create_error, :model => 'declaration')
      render 'declarations/new'
    end
  end

  get :edit, :with => :id do
    @title = pat(:edit_title, :model => "declaration #{params[:id]}")
    @declaration = Declaration.find(params[:id])
    if @declaration
      render 'declarations/edit'
    else
      flash[:warning] = pat(:create_error, :model => 'declaration', :id => "#{params[:id]}")
      halt 404
    end
  end

  put :update, :with => :id do
    @title = pat(:update_title, :model => "declaration #{params[:id]}")
    @declaration = Declaration.find(params[:id])
    if @declaration
      if @declaration.update_attributes(params[:declaration])
        flash[:success] = pat(:update_success, :model => 'Declaration', :id =>  "#{params[:id]}")
        params[:save_and_continue] ?
          redirect(url(:declarations, :index)) :
          redirect(url(:declarations, :edit, :id => @declaration.id))
      else
        flash.now[:error] = pat(:update_error, :model => 'declaration')
        render 'declarations/edit'
      end
    else
      flash[:warning] = pat(:update_warning, :model => 'declaration', :id => "#{params[:id]}")
      halt 404
    end
  end

  delete :destroy, :with => :id do
    @title = "Declarations"
    declaration = Declaration.find(params[:id])
    if declaration
      if declaration.destroy
        flash[:success] = pat(:delete_success, :model => 'Declaration', :id => "#{params[:id]}")
      else
        flash[:error] = pat(:delete_error, :model => 'declaration')
      end
      redirect url(:declarations, :index)
    else
      flash[:warning] = pat(:delete_warning, :model => 'declaration', :id => "#{params[:id]}")
      halt 404
    end
  end

  delete :destroy_many do
    @title = "Declarations"
    unless params[:declaration_ids]
      flash[:error] = pat(:destroy_many_error, :model => 'declaration')
      redirect(url(:declarations, :index))
    end
    ids = params[:declaration_ids].split(',').map(&:strip)
    declarations = Declaration.find(ids)
    
    if Declaration.destroy declarations
    
      flash[:success] = pat(:destroy_many_success, :model => 'Declarations', :ids => "#{ids.to_sentence}")
    end
    redirect url(:declarations, :index)
  end
end
