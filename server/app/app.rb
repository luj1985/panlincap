module Panlincap
  class App < Padrino::Application
    register SassInitializer
    use ActiveRecord::ConnectionAdapters::ConnectionManagement
    register Padrino::Mailer
    register Padrino::Helpers

    enable :sessions

    get '/api/home', :provides => :json do
      reverse_categories = {
        168 => "company",
        163 => "invested"
      }

      lang = request.cookies["lang"] || 'zh'
      about = Declaration.where(:name => '_about').first.to_localized(lang)
      principle = Declaration.where(:name => '_principle').first.to_localized(lang)
      cases = Declaration.where(:name => '_cases').first.to_localized(lang)

      news_preview = '<div class="news-preview">'

      Article.where("category_id = 168 or category_id = 163").limit(3).order('created_at desc').each do |article|
        title = article.title
        date = article.created_at.strftime('%Y/%m/%d') 
        body = article.body
        content = strip_tags(body).gsub(/&nbsp;/, ' ')
        id = article.id.to_s
        category = reverse_categories[article.category_id];

        news_preview += '<h4><a href="#/news/' + category +'/' + id + '">' + date + '  [ ' + title + ' ]</a></h4>'
        news_preview += '<p>' + content[0..100] + '</p>'
      end
      news_preview += '</div>'

      data = [{ :link => '/about', :description => about[:body] },
              { :link => '/investment', :description => principle[:body] },
              { :link => '/investees', :description => cases[:body] },
              { :link => '/news', :description => news_preview }]

      data.map do |m|
        link = m[:link]
        l = Menu.where(:link => link).first.to_localized(lang);
        m[:title] = l[:title]
      end
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
        articles = Article.where("(body LIKE '%#{keyword}%' or title LIKE '%#{keyword}%') and (category_id = 168 or category_id = 163)").page(params[:page]).order(attop: :desc, created_at: :desc)
      else
        articles = Article.where(:category_id => category).page(params[:page]).order(attop: :desc, created_at: :desc)
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
      lang = request.cookies["lang"] || 'zh'
      name = params['name']
      declearation = Declaration.where(:name => name).first;
      declearation.to_localized(lang).to_json if declearation
    end

    get '/api/investees', :provides => :json do
      lang = request.cookies["lang"] || 'zh'
      investees = Investee.includes(:invest_area).order(order: :asc)
      investees = investees.group_by { |i| i.invest_area }
      investees = investees.map do |k, v| 
        name = k.name_en
        name = k.name if lang == 'zh'
        brands = v.map {|b| b.to_localized(lang) }
        {:area => name, :order => k.order, :brands => brands}
      end
      investees = investees.sort_by {|v| v[:order] }
      investees.to_json
    end

    get '/api/menus', :provides => :json do
      lang = request.cookies["lang"] || 'zh'
      Menu.all.map {|m| m.to_localized(lang) }.to_json
    end

    get '/api/founds', :provides => :json do
      lang = request.cookies["lang"] || 'zh'
      Found.all.map {|f| f.to_localized(lang)}.to_json
    end

    get '/api/members', :provides => :json do
      lang = request.cookies["lang"] || 'zh'
      Member.order(:priority)
            .map {|m| m.to_localized(lang)}
            .to_json
    end

    get '/api/article', :with => :id, :provides => :json do
      reverse_categories = {
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
        :category => reverse_categories[article.category_id]
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
