PanlinCap.module('Invest', function(Invest, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  function renderSubmenu(menuid) {
    var promise = PanlinCap.reqres.request('submenu:fetch', menuid);
    promise.then(function(raw) {
      PanlinCap.subRegion.show(new Layout.SubMenuView({
        collection : new Backbone.Collection(raw)
      }));
    });
  }

  function renderDeclaration(layout, name) {
    var promise = PanlinCap.reqres.request('declaration:fetch', name);
    promise.then(function(raw) {
      raw.back = '#/investment';
      layout.main.show(new Layout.RevealView({ model : new Backbone.Model(raw) }));

      PanlinCap.vent.trigger('reveal:active');
    });
  }

  var InvestmentController = Layout.MainRegionController.extend({
    background : 'invest',
    showInvestment : function() {
      var layout = this.initializeLayout();
      layout.getRegion('main').empty();
      layout.breadcrumb.show(new Layout.BreadcrumbView({ 
        collection : new Backbone.Collection([{ text : '投资理念', link : '#/investment' }]) 
      }));

      renderSubmenu(3);
      
      PanlinCap.vent.trigger('reveal:hide');
    },
    showPrice : function() {
      var layout = this.initializeLayout();
      layout.breadcrumb.show(new Layout.BreadcrumbView({ 
        collection : new Backbone.Collection([
          { text : '投资理念', link : '#/investment' }, 
          { text : '价值提升机制', link : '#/investment/price'}
        ]) 
      }));
      renderSubmenu(3);
      renderDeclaration(layout, 'price');
      PanlinCap.vent.trigger('reveal:active');
    },
    showPrinciple : function() {
      var layout = this.initializeLayout();
      layout.breadcrumb.show(new Layout.BreadcrumbView({ 
        collection : new Backbone.Collection([
          { text : '投资理念', link : '#/investment' }, 
          { text : '投资核心原则', link : '#/investment/principle'}
        ]) 
      }));

      renderDeclaration(layout, 'principle');
      renderSubmenu(3);
      PanlinCap.vent.trigger('reveal:active');
    },
    showStrategy : function() {
      var layout = this.initializeLayout();
      layout.breadcrumb.show(new Layout.BreadcrumbView({ 
        collection : new Backbone.Collection([
          { text : '投资理念', link : '#/investment' }, 
          { text : '投资策略', link : '#/investment/strategy'}
        ]) 
      }));

      renderSubmenu(3);
      renderDeclaration(layout, 'strategy');
      PanlinCap.vent.trigger('reveal:active');

    }
  });


  PanlinCap.addInitializer(function() {
    var router = new Marionette.AppRouter({
      appRoutes : {
        'investment(/)': 'showInvestment',
        'investment/principle(/)' : 'showPrinciple',
        'investment/strategy(/)' : 'showStrategy',
        'investment/price' : 'showPrice'
      },
      controller: new InvestmentController()
    });

    router.on('route', function(route, params) {
      $('.page').scrollTop(0);
    });

  });
});
