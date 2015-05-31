PanlinCap.module('Case', function(Case, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Shared = PanlinCap.module('Layout.Sidebar');

  var slogan = [{ text : '投资案例', link : '/cases' }, { text : '重点案例', link : '/cases' }];

  var breadcrumb = { text : '投资案例', link : '/cases' };

  var CasesView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/case/case.hbs'],
    className : 'case-group',
    tagName : 'section'
  });

  var CasesCollectionView = Marionette.CollectionView.extend({
    childView : CasesView,
    className : 'cases'
  });
  
  var CaseLayoutView = Shared.SidebarLayoutView.extend({
    
    onBeforeShow : function() {
      var cases = PanlinCap.reqres.request('cases:fetch');
      this.showChildView('main', new CasesCollectionView({
        collection : cases
      }));
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
      PanlinCap.bodyRegion.show(new CaseLayoutView({
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