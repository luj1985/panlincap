PanlinCap.module('News', function(News, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Shared = PanlinCap.module('Layout.Sidebar');

  var slogan = [
    { text : '被投公司资讯', link : '#/news/invested' }, 
    { text : '公司新闻', link : '#/news/company' }
  ];

  var NewsView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/news/news.hbs'],
    tagName : 'li'
  });

  var NewsCollectionView = Shared.ScrollView.extend({
    template : PanlinCapTpl['templates/news/pages.hbs'],
    childView : NewsView,
    className : 'main-container news',
    childViewContainer : 'ul.news',
    initialize : function() {
      this.listenTo(this.collection, 'reset', this.render);
    },
    templateHelpers : function() {
      var state = this.collection.state;
      return {
        hasPrev : this.collection.hasPreviousPage(),
        hasNext : this.collection.hasNextPage(),
        currentPage : state.currentPage,
        totalPage : state.totalPages,
        pageSize : state.pageSize,
        items : this.collection.toJSON()
      };
    },
    events : {
      'click a.first' : function(e) {
        e.preventDefault();
        this.collection.getFirstPage({
          success : function() { $('.page').scrollTop(0); },
          reset : true
        });
      },
      'click a.prev' : function(e) {
        e.preventDefault();
        if (this.collection.hasPreviousPage()) {
          this.collection.getPreviousPage({
            success : function() { $('.page').scrollTop(0); },
            reset : true
          });  
        }
      },
      'click a.next' : function(e) {
        e.preventDefault();
        if (this.collection.hasNextPage()) {
          this.collection.getNextPage({
            success : function() { $('.page').scrollTop(0); },
            reset : true
          });
        }
      },
      'click a.last' : function(e) {
        e.preventDefault();
        this.collection.getLastPage({
          success : function() { $('.page').scrollTop(0); },
          reset : true
        });
      }
    }
  });


  var NewsSidebarView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/news/searchnews.hbs']
  });


  var NewsDetailView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/news/detail.hbs'],
    className : 'main-container news'
  });
  
  var NewsLayoutView = Shared.SidebarLayoutView.extend({
    onBeforeShow : function() {
      this.sidebar.show(new NewsSidebarView({
        collection : new Backbone.Collection(slogan)
      }));
    }
  });

  var CompanyNewsCollection = Backbone.PageableCollection.extend({
    url : '/api/article?type=company',
    state : {
      currentPage : 1,
      pageSize : 10
    }
  });

  var InvestedCompanyNewsCollection = Backbone.PageableCollection.extend({
    url : '/api/article?type=invested'
  });

  var newsController = {
    initLayout : function() {
      if (!this.layout || (this.layout && this.layout.isDestroyed)) {
        this.layout = new NewsLayoutView({className : 'sidebar-layout content'});
        PanlinCap.bodyRegion.show(this.layout);
        PanlinCap.execute('showBackground', 'news');
      }
      return this.layout;
    },
    showNews: function() {
      var layout = this.initLayout();
      layout.getRegion('main').empty();

      layout.breadcrumb.show(new Shared.BreadcrumbView({
        collection : new Backbone.Collection({ text : '新闻中心', link : '#/news' })
      }));
    },
    showDetail : function(id) {
      var layout = this.initLayout();
      var promise = PanlinCap.reqres.request('news:detail', id);
      promise.then(function(data) {
        var model = new Backbone.Model(data);
        layout.main.show(new NewsDetailView({
          model : model
        }))
      });

      layout.breadcrumb.show(new Shared.BreadcrumbView({
        collection : new Backbone.Collection({ text : '新闻中心', link : '#/news' })
      }));

    },
    showInvestedCompanyNews : function() {
      var layout = this.initLayout();

      var news = new InvestedCompanyNewsCollection();
      layout.main.show(new NewsCollectionView({ collection : news }));

      news.fetch({ reset : true });

      layout.breadcrumb.show(new Shared.BreadcrumbView({
        collection : new Backbone.Collection([{ text : '新闻中心', link : '#/news' }, { text : '被投公司新闻', link : '#/news/invested '}])
      }));
    },
    showCompanyNews : function() {
      var layout = this.initLayout();

      var news = new CompanyNewsCollection();
      layout.main.show(new NewsCollectionView({ collection : news }));

      news.fetch({ reset : true });

      layout.breadcrumb.show(new Shared.BreadcrumbView({
        collection : new Backbone.Collection([{ text : '新闻中心', link : '#/news' }, { text : '公司新闻', link : '#/news/company '}])
      }));
    }
  };

  PanlinCap.addInitializer(function() {
    var router = new Marionette.AppRouter({
      appRoutes : {
        'news(/)': 'showNews',
        'news/invested(/)' : 'showInvestedCompanyNews',
        'news/company(/)' : 'showCompanyNews',
        'news/detail/:id(/)' : 'showDetail'
      },
      controller: newsController
    });

    router.on('route', function(route, params) {
      $('.page').scrollTop(0);
    });
  });
});
