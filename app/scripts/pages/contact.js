PanlinCap.module('Contact', function(Contact, PanlinCap, Backbone, Marionette) {
  'use strict';

  var slogan = [{ text : '招贤纳士' }, { text : '公司地址' }, { text : '商业计划书' }];

  var breadcrumb = { text : '联系我们', link : '/contact' };

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
    showContacts: function() {
      PanlinCap.bodyRegion.show(new NewsView());
      PanlinCap.execute('showBackground', 'contact');
    }
  };

  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'contacts(/)': 'showContacts'
      },
      controller: aboutController
    });

  });
});
