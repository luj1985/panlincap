PanlinCap.module('PanlinCap.Invest', function(Invest, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  var InvestmentController = Layout.MainRegionController.extend({
    background : 'invest',
    showInvestment : function(sub) {
      var layout = this.initializeLayout();

      if (!sub) {
        PanlinCap.vent.trigger('reveal:hide');
        return;
      }

      layout.getRegion('main').empty();
      PanlinCap.reqres.request('declaration:fetch', sub).then(function(raw) {
        raw.back = '#/investment';
        layout.main.show(new Layout.RevealView({ model : new Backbone.Model(raw) }));
        PanlinCap.vent.trigger('reveal:active');
      });
    }

  });
  
  Invest.Controller = new InvestmentController();  
});
