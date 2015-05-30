PanlinCap.module('Case', function(Case, PanlinCap, Backbone, Marionette) {
  'use strict';

  var slogan = [{ text : '投资案例' }, { text : '重点案例' }];

  var breadcrumb = { text : '投资案例', link : '/cases' };

  var Shared = PanlinCap.module('Layout.Sidebar');
  
  var CasesView = Shared.SidebarLayoutView.extend({
    
    onBeforeShow : function() {
      this.showChildView('sidebar', new Shared.SideMenuView({
        collection : new Backbone.Collection(slogan)
      }));
      this.showChildView('breadcrumb', new Shared.BreadcrumbView({
        model : new Backbone.Model(breadcrumb)
      }));
    }
  });

  var casesController = {
    showCases: function() {
      var cases = PanlinCap.reqres.request('cases:fetch');
      PanlinCap.bodyRegion.show(new CasesView({
        collection: cases
      }));
      PanlinCap.execute('showBackground', 'cases');
    }
  };

  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'cases(/)' : 'showCases'
      },
      controller: casesController
    });

  });
});