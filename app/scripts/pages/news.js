PanlinCap.module('News', function(News, PanlinCap, Backbone, Marionette) {
  'use strict';

  var slogan = [{ text : '被投公司资讯' }, { text : '公司新闻' }];

  var breadcrumb = { text : '新闻中心', link : '/news' };

  var Shared = PanlinCap.module('Layout.Sidebar');
  
  var NewsView = Shared.SidebarLayoutView.extend({
    
    onBeforeShow : function() {
      // this.showChildView('main', new Shared.RevealView({
      //   model : new Backbone.Model(reveal)
      // }));
      this.showChildView('sidebar', new Shared.SidebarView({
        collection : new Backbone.Collection(slogan)
      }));
      this.showChildView('breadcrumb', new Shared.BreadcrumbView({
        model : new Backbone.Model(breadcrumb)
      }));
    }
  });

  var aboutController = {
    showNews: function() {
      PanlinCap.bodyRegion.show(new NewsView());
      PanlinCap.execute('showBackground', 'news');
    }
  };

  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'news(/)': 'showNews'
      },
      controller: aboutController
    });

  });
});
