PanlinCap.module('PanlinCap.Invest', function(Invest, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

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
    showInvestment : function(sub) {
      var layout = this.initializeLayout();
      layout.getRegion('main').empty();
      layout.breadcrumb.show(new Layout.BreadcrumbView({ 
        collection : new Backbone.Collection([{ text : '投资理念', link : '#/investment' }]) 
      }));

      PanlinCap.subRegion.loadMenu(3);

      if (!sub) {
        PanlinCap.vent.trigger('reveal:hide');
        return;
      }

      renderDeclaration(layout, sub);

      if (sub === 'principle') {
        layout.breadcrumb.show(new Layout.BreadcrumbView({
          collection : new Backbone.Collection([
            { text : '投资理念', link : '#/investment' }, 
            { text : '投资核心原则', link : '#/investment/principle'}
          ])
        }));
      } else if (sub === 'strategy') {
        layout.breadcrumb.show(new Layout.BreadcrumbView({ 
          collection : new Backbone.Collection([
            { text : '投资理念', link : '#/investment' }, 
            { text : '投资策略', link : '#/investment/strategy'}
          ]) 
        }));
      } else if (sub === 'price') {
        layout.breadcrumb.show(new Layout.BreadcrumbView({ 
          collection : new Backbone.Collection([
            { text : '投资理念', link : '#/investment' }, 
            { text : '价值提升机制', link : '#/investment/price'}
          ]) 
        }));
      } 
    }

  });


  
  Invest.Controller = new InvestmentController();  
});
