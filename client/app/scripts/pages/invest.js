PanlinCap.module('PanlinCap.Invest', function(Invest, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  function renderDeclaration(layout, name) {
    layout.getRegion('main').empty();
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
      PanlinCap.subRegion.loadMenu(3);

      if (!sub) {
        PanlinCap.vent.trigger('reveal:hide');
        return;
      }

      renderDeclaration(layout, sub);
    }

  });
  
  Invest.Controller = new InvestmentController();  
});
