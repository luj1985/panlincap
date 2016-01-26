Panlincap::Admin.controllers :invest_areas do
  get :index do
    @title = "投资领域"
    @invest_areas = InvestArea.all.order(order: :asc)
    render 'invest_areas/index'
  end

  get :new do
    @title = pat(:new_title, :model => 'invest_area')
    @invest_area = InvestArea.new
    render 'invest_areas/new'
  end

  post :create do
    @invest_area = InvestArea.new(params[:invest_area])
    if @invest_area.save
      @title = pat(:create_title, :model => "invest_area #{@invest_area.id}")
      flash[:success] = pat(:create_success, :model => 'InvestArea')
      params[:save_and_continue] ? redirect(url(:invest_areas, :index)) : redirect(url(:invest_areas, :edit, :id => @invest_area.id))
    else
      @title = pat(:create_title, :model => 'invest_area')
      flash.now[:error] = pat(:create_error, :model => 'invest_area')
      render 'invest_areas/new'
    end
  end


  post :reorder do
    from = params[:fromPosition]
    to = params[:toPosition]
    direction = params[:direction]
    if direction == "forward"
      InvestArea.where("\"order\" > ? and \"order\" <= ?", from, to).update_all("\"order\" = \"order\" - 1")
    else
      InvestArea.where("\"order\" >= ? and \"order\" < ?", to, from).update_all("\"order\" = \"order\" + 1")
    end
    area = InvestArea.find(params[:id])
    area.order = to
    area.save
  end

  get :edit, :with => :id do
    @title = pat(:edit_title, :model => "invest_area #{params[:id]}")
    @invest_area = InvestArea.find(params[:id])
    if @invest_area
      render 'invest_areas/edit'
    else
      flash[:warning] = pat(:create_error, :model => 'invest_area', :id => "#{params[:id]}")
      halt 404
    end
  end

  put :update, :with => :id do
    @title = pat(:update_title, :model => "invest_area #{params[:id]}")
    @invest_area = InvestArea.find(params[:id])
    if @invest_area
      if @invest_area.update_attributes(params[:invest_area])
        flash[:success] = pat(:update_success, :model => 'Invest_area', :id =>  "#{params[:id]}")
        params[:save_and_continue] ?
          redirect(url(:invest_areas, :index)) :
          redirect(url(:invest_areas, :edit, :id => @invest_area.id))
      else
        flash.now[:error] = pat(:update_error, :model => 'invest_area')
        render 'invest_areas/edit'
      end
    else
      flash[:warning] = pat(:update_warning, :model => 'invest_area', :id => "#{params[:id]}")
      halt 404
    end
  end

  delete :destroy, :with => :id do
    @title = "Invest_areas"
    invest_area = InvestArea.find(params[:id])
    if invest_area
      if invest_area.destroy
        flash[:success] = pat(:delete_success, :model => 'Invest_area', :id => "#{params[:id]}")
      else
        flash[:error] = pat(:delete_error, :model => 'invest_area')
      end
      redirect url(:invest_areas, :index)
    else
      flash[:warning] = pat(:delete_warning, :model => 'invest_area', :id => "#{params[:id]}")
      halt 404
    end
  end

  delete :destroy_many do
    @title = "Invest_areas"
    unless params[:invest_area_ids]
      flash[:error] = pat(:destroy_many_error, :model => 'invest_area')
      redirect(url(:invest_areas, :index))
    end
    ids = params[:invest_area_ids].split(',').map(&:strip)
    invest_areas = InvestArea.find(ids)
    
    if InvestArea.destroy invest_areas
    
      flash[:success] = pat(:destroy_many_success, :model => 'Invest_areas', :ids => "#{ids.to_sentence}")
    end
    redirect url(:invest_areas, :index)
  end
end
