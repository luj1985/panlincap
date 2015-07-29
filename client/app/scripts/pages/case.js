PanlinCap.module('Case', function(Case, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Shared = PanlinCap.module('Layout.Sidebar');

  var CaseView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '<div class="brand-logo"><div class="logo"></div><p>{{title}}</p></div>'),
    className : 'brand column',
    onRender : function() {
      var model = this.model;
      this.$el.on('click', function() {
        var dialog = new CaseDialogView({model : model});
        PanlinCap.dialogRegion.show(dialog);
      });

      this.$('.logo').css('background-image', 'url(' + this.model.get('brand') + ')');
    }
  });

  var CaseDialogView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/case/case.hbs'],
    className : 'ui panlin modal',
    events : {
      'click a.dialog-close' : function(e) {
        e.preventDefault();
        this.$el.modal('hide');
      }
    },
    onShow : function() {
      this.$el.modal('show');
    }
  });

  var CasesView = Marionette.CompositeView.extend({
    template : PanlinCapTpl['templates/case/case-group.hbs'],
    childView : CaseView,
    childViewContainer : '.brands',
    className : 'case-group',
    tagName : 'section',
    initialize : function() {
      this.collection = new Backbone.Collection(this.model.get('brands'));
    }
  });

  var CasesCollectionView = Shared.ScrollView.extend({
    template : PanlinCapTpl['templates/case/container.hbs'],
    childView : CasesView,
    childViewContainer : '.main-container.cases'
  });
  
  var CaseLayoutView = Shared.SidebarLayoutView.extend({
    
    onBeforeShow : function() {
      var collection = PanlinCap.reqres.request('cases:fetch');
      this.showChildView('main', new CasesCollectionView({ collection : collection }));
      this.showChildView('sidebar', new Shared.SideMenuView({
        collection : new Backbone.Collection([{ text : '投资案例', link : '/cases' }, { text : '重点案例', link : '/cases' }])
      }));
      this.showChildView('breadcrumb', new Shared.BreadcrumbView({
        collection : new Backbone.Collection([{ text : '投资组合', link : '/cases' }])
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