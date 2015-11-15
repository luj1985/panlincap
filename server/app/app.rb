module Panlincap
  class App < Padrino::Application
    register SassInitializer
    use ActiveRecord::ConnectionAdapters::ConnectionManagement
    register Padrino::Mailer
    register Padrino::Helpers

    enable :sessions


    get '/api/home', :provides => :json do
      data = [{
        :title => '关于磐霖',
        :description => '上海磐霖资产管理有限公司是专业的人民币私募股权投资基金（以下简称PE基金）的投资管理平台, 主要从事未上市企业的股权投资和投资后的资产管理...',
        :link => '#/about'    
      }, {
        :title => '投资理念',
        :description => '核心投资理念 –- “快乐投资”<br>差异化投资模式 –- “专业创造价值”',
        :link => '#/investment'
      }, {
        :title => '投资案例',
        :description => '我们既有已在创业板首批上市的成功投资案例，也有已经入股而预期在三年内上市的项目...',
        :link => '#/investees'
      }]


      news_preview = ''
      news_preview += '<div class="news-preview">'

      categories = {
        168 => "company",
        163 => "invested"
      }
      type = categories[params[:type]]

      Article.where(:category_id => 163).limit(3).order('created_at desc').each do |article|
        title = article.title
        date = article.created_at.strftime('%Y/%m/%d') 
        body = article.body
        content = strip_tags(body).gsub(/&nbsp;/, ' ')
        id = article.id.to_s
        category = categories[article.category_id];

        news_preview += '<h4><a href="#/news/' + category +'/' + id + '">' + date + '  [ ' + title + ' ]</a></h4>'
        news_preview += '<p>' + content[0..100] + '</p>'
      end
      news_preview += '</div>'

      news = { 
        :title => '新闻中心',
        :link => '#/news',
        :description => news_preview
      }

      data.push(news)
      data.to_json
    end

    #168 公司新闻 company
    #163 被投公司资讯 invested
    get '/api/article', :provides => :json do
      categories = {
        "company" => 168,
        "invested" => 163
      }

      reverse_categories = {
        168 => "company",
        163 => "invested"
      }
      type = params[:type]

      category = categories[type]

      keyword = params[:q]
      if type == "search" then
        articles = Article.where("(body LIKE '%#{keyword}%' or title LIKE '%#{keyword}%') and (category_id = 168 or category_id = 163)").page(params[:page]).order('created_at DESC')
      else
        articles = Article.where(:category_id => category).page(params[:page]).order('created_at DESC')
      end

      preview = articles.map do |article|
        title = article.title
        date = article.created_at.strftime('%Y/%m/%d') 
        content = strip_tags(article.body).gsub(/&nbsp;/, ' ')

        news = {}
        news[:id] = article.id
        news[:title] =  date + '  ' + article.title;
        news[:descriptions] = content[0..100] + "..."
        news[:category] = reverse_categories[article.category_id]
        news
      end

      state = {
        :page => articles.current_page,
        :per_page => articles.per_page,
        :total_pages => articles.total_pages,
        :total_entries => articles.total_entries
      }

      if type == "search" then
        state[:keyword] = keyword
      end
      
      [ state, preview ].to_json
    end

    get '/api/declaration/:name', :provides => :json do
      Declaration.find_by_name(params['name']).to_json
    end

    get '/api/investees', :provides => :json do
      Investee.all.to_json
    end

    get '/api/menus', :provides => :json do
      Menu.all.to_json
    end

    get '/api/founds', :provides => :json do
      Found.all.to_json
    end

    get '/api/members', :provides => :json do
      Member.all.order(:priority).to_json
    end

    get '/api/article', :with => :id, :provides => :json do
      categories = {
        168 => "company",
        163 => "invested"
      }

      id = params[:id].to_i
      article = Article.find id
      article.count += 1
      article.save
      data = {
        :date => article.created_at.strftime('%Y/%m/%d'),
        :count => article.count,
        :title => article.title,
        :body => article.body,
        :category => categories[article.category_id]
      }

      previousArticle = Article.where("id < ? and category_id = ?", id, article.category_id).order('id desc').first
      nextArticle = Article.where("id > ? and category_id = ?", id, article.category_id).order('id asc').first

      priorsCount = Article.where("id > ? and category_id = ?", id, article.category_id).count
      
      pageNum  = ((priorsCount + 1) / 10.0).ceil

      data[:prev] = previousArticle.id if previousArticle
      data[:next] = nextArticle.id if nextArticle
      data[:page] = pageNum

      data.to_json
    end

    get /.*[^(\.js)|(\.css)|(\.json)$]/ do
      render "../../public/index.html"
    end

    ##
    # Caching support.
    #
    # register Padrino::Cache
    # enable :caching
    #
    # You can customize caching store engines:
    #
    # set :cache, Padrino::Cache.new(:LRUHash) # Keeps cached values in memory
    # set :cache, Padrino::Cache.new(:Memcached) # Uses default server at localhost
    # set :cache, Padrino::Cache.new(:Memcached, '127.0.0.1:11211', :exception_retry_limit => 1)
    # set :cache, Padrino::Cache.new(:Memcached, :backend => memcached_or_dalli_instance)
    # set :cache, Padrino::Cache.new(:Redis) # Uses default server at localhost
    # set :cache, Padrino::Cache.new(:Redis, :host => '127.0.0.1', :port => 6379, :db => 0)
    # set :cache, Padrino::Cache.new(:Redis, :backend => redis_instance)
    # set :cache, Padrino::Cache.new(:Mongo) # Uses default server at localhost
    # set :cache, Padrino::Cache.new(:Mongo, :backend => mongo_client_instance)
    # set :cache, Padrino::Cache.new(:File, :dir => Padrino.root('tmp', app_name.to_s, 'cache')) # default choice
    #

    ##
    # Application configuration options.
    #
    # set :raise_errors, true       # Raise exceptions (will stop application) (default for test)
    # set :dump_errors, true        # Exception backtraces are written to STDERR (default for production/development)
    # set :show_exceptions, true    # Shows a stack trace in browser (default for development)
    # set :logging, true            # Logging in STDOUT for development and file for production (default only for development)
    # set :public_folder, 'foo/bar' # Location for static assets (default root/public)
    # set :reload, false            # Reload application files (default in development)
    # set :default_builder, 'foo'   # Set a custom form builder (default 'StandardFormBuilder')
    # set :locale_path, 'bar'       # Set path for I18n translations (default your_apps_root_path/locale)
    # disable :sessions             # Disabled sessions by default (enable if needed)
    # disable :flash                # Disables sinatra-flash (enabled by default if Sinatra::Flash is defined)
    # layout  :my_layout            # Layout can be in views/layouts/foo.ext or views/foo.ext (default :application)
    #

    ##
    # You can configure for a specified environment like:
    #
    #   configure :development do
    #     set :foo, :bar
    #     disable :asset_stamp # no asset timestamping for dev
    #   end
    #

    ##
    # You can manage errors like:
    #
    #   error 404 do
    #     render 'errors/404'
    #   end
    #
    #   error 505 do
    #     render 'errors/505'
    #   end
    #
  end
end
