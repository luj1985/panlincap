PanlinCap.module('News', function(News, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Shared = PanlinCap.module('Layout.Sidebar');

  var slogan = [{ text : '被投公司资讯' }, { text : '公司新闻' }];

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
      var news = PanlinCap.reqres.request('news:fetch');
      this.showChildView('main', new NewsCollectionView({
        collection : news
      }));
      this.showChildView('sidebar', new NewsSidebarView({
        collection : new Backbone.Collection(slogan)
      }));
      this.showChildView('breadcrumb', new Shared.BreadcrumbView({
        model : new Backbone.Model(breadcrumb)
      }));
    }
  });

  var newsController = {
    showNews: function() {
      PanlinCap.bodyRegion.show(new NewsLayoutView());
      PanlinCap.execute('showBackground', 'news');
    }
  };

  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'news(/)': 'showNews'
      },
      controller: newsController
    });

  });
});
