PanlinCap.module('Case', function(Case, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Shared = PanlinCap.module('Layout.Sidebar');

  var CaseView = Marionette.ItemView.extend({
    template : Handlebars.compile('<img src="{{brand}}" />'),
    className : 'brand',
    onRender : function() {
      var model = this.model;
      this.$el.on('click', function() {
        var dialog = new CaseDialogView({model : model});
        PanlinCap.dialogRegion.show(dialog);
      });
      this.$el.attr('company', this.model.get('title'));
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

  function regroupBrands(collection) {
    var reGrouped = new Backbone.Collection();
    collection.each(function(model) {
      var brands = model.get('brands'), length = brands.length;
      if (length > 4) {
        var acc = []
        for (var i = 0; i < length; i++) {
          if (i % 4 === 0) {
            acc = [];
            var data = i === 0 ? { title : model.get('title'), brands : acc } : { brands : acc } ;
            reGrouped.add(new Backbone.Model(data));
          }
          acc.push(brands[i]);
        }
      } else {
        reGrouped.add(model);
      }
    });
    return reGrouped;
  }
  
  var CaseLayoutView = Shared.SidebarLayoutView.extend({
    
    onBeforeShow : function() {
      var cases = PanlinCap.reqres.request('cases:fetch');
      var collection = regroupBrands(cases);
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