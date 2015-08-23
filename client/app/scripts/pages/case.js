PanlinCap.module('Case', function(Case, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Shared = PanlinCap.module('Layout.Sidebar');

  var CaseView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '<div class="brand-logo">' +
      '<div class="logo"></div>' + 
      '<p>{{name}}</p>' + 
      '</div>'
    ),
    className : 'brand column',
    onRender : function() {
      var model = this.model;
      this.$el.on('click', function() {
        var dialog = new CaseDialogView({model : model});
        PanlinCap.dialogRegion.show(dialog);
      });

      this.$('.logo').css('background-image', 'url(' + this.model.get('logo') + ')');
    }
  });

  var CaseDialogView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/case/case.hbs'],
    className : 'panlin dialog',
    onShow : function() {
      this.$el.bPopup({ 
        closeClass : 'close',
        opacity: 0.3,
        positionStyle: 'fixed',
        amsl : 0
      });
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
      var self = this;
      var promise = PanlinCap.reqres.request('cases:fetch');
      promise.then(function(raw) {
        var data = _.chain(raw).groupBy('area').map(function(brands, area) {
          return { area : area, brands : brands };
        }).value();

        var cases = new Backbone.Collection(data);
        self.main.show(new CasesCollectionView({ collection : cases }));
      });

      this.sidebar.show(new Shared.SideMenuView({
        collection : new Backbone.Collection([{ text : '投资案例', link : '#/cases' }, { text : '重点案例', link : '/cases' }])
      }));
      this.breadcrumb.show(new Shared.BreadcrumbView({
        collection : new Backbone.Collection([{ text : '投资组合', link : '#/cases' }])
      }));
    }
  });

  var casesController = {
    showCases: function() {
      PanlinCap.bodyRegion.show(new CaseLayoutView({}));
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