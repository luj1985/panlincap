PanlinCap.module('News', function(News, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Shared = PanlinCap.module('Layout.Sidebar');

  var slogan = [{ text : '被投公司资讯', link : '/news/invested' }, { text : '公司新闻', link : '/news/company' }];

  var breadcrumb = { text : '新闻中心', link : '/news' };

  var NewsView = Marionette.ItemView.extend({
    template : PanlinCapTpl["templates/news/news.hbs"],
    tagName : 'li'
  });

  var NewsCollectionView = Marionette.CompositeView.extend({
    template : PanlinCapTpl["templates/news/pages.hbs"],
    className : 'news-container',
    childView : NewsView,
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
      this.showChildView('breadcrumb', new Shared.BreadcrumbView({
        model : new Backbone.Model(breadcrumb)
      }));
    }
  });

  var newsController = {
    initLayout : function() {
      if (!this.layout) {
        this.layout = new NewsLayoutView();
      }
      return this.layout;
    },
    showNews: function() {
      var layout = this.initLayout();
      layout.getRegion('main').empty();
      PanlinCap.bodyRegion.show(layout);
      PanlinCap.execute('showBackground', 'news');
    },
    showInvestedCompanyNews : function() {
      this.showNews();

      var layout = this.initLayout();
      var news = PanlinCap.reqres.request('news:fetch');
      layout.showChildView('main', new NewsCollectionView({
        collection : news
      }));
    },
    showCompanyNews : function() {
      this.showNews();

      var layout = this.initLayout();
      var news = PanlinCap.reqres.request('company-news:fetch');
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
