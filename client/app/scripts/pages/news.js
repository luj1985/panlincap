PanlinCap.module('News', function(News, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Shared = PanlinCap.module('Layout.Sidebar');

  var slogan = [{ text : '被投公司资讯', link : '/news/invested' }, { text : '公司新闻', link : '/news/company' }];

  var NewsView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/news/news.hbs'],
    tagName : 'li'
  });

  var NewsCollectionView = Shared.ScrollView.extend({
    template : PanlinCapTpl['templates/news/pages.hbs'],
    childView : NewsView,
    className : 'main-container news',
    childViewContainer : 'ul.news'
  });


  var NewsSidebarView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/news/searchnews.hbs']
  });
  
  var NewsLayoutView = Shared.SidebarLayoutView.extend({
    onBeforeShow : function() {
      this.showChildView('sidebar', new NewsSidebarView({
        collection : new Backbone.Collection(slogan)
      }));
    }
  });

  var newsController = {
    initLayout : function() {
      if (!this.layout || (this.layout && this.layout.isDestroyed)) {
        this.layout = new NewsLayoutView();
        PanlinCap.bodyRegion.show(this.layout);
        PanlinCap.execute('showBackground', 'news');
      }
      return this.layout;
    },
    showNews: function() {
      var layout = this.initLayout();
      layout.getRegion('main').empty();

      layout.showChildView('breadcrumb', new Shared.BreadcrumbView({
        collection : new Backbone.Collection({ text : '新闻中心', link : '/news' })
      }));
    },
    showInvestedCompanyNews : function() {

      var layout = this.initLayout();
      var news = PanlinCap.reqres.request('news:fetch');

      layout.showChildView('breadcrumb', new Shared.BreadcrumbView({
        collection : new Backbone.Collection([{ text : '新闻中心', link : '/news' }, { text : '被投公司新闻', link : '/news/invested '}])
      }));
      layout.showChildView('main', new NewsCollectionView({
        collection : news
      }));
    },
    showCompanyNews : function() {
      var layout = this.initLayout();

      var news = PanlinCap.reqres.request('company-news:fetch');

      layout.showChildView('breadcrumb', new Shared.BreadcrumbView({
        collection : new Backbone.Collection([{ text : '新闻中心', link : '/news' }, { text : '公司新闻', link : '/news/company '}])
      }));
      layout.showChildView('main', new NewsCollectionView({
        collection : news
      }));
    }
  };

  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'news(/)': 'showNews',
        'news/invested(/)' : 'showInvestedCompanyNews',
        'news/company(/)' : 'showCompanyNews'
      },
      controller: newsController
    });

  });
});
