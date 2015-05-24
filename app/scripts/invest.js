PanlinCap.module('Invest', function(Invest, PanlinCap, Backbone, Marionette) {
  'use strict';
  
  var StaticController = Marionette.Controller.extend({
    showInvestMent: function() {
      var view = new PanlinCap.Share.SplitView({
        template: PanlinCapTpl['templates/invest/investment.hbs'],
        className: 'description investment'
      });
      var bgView = new PanlinCap.Share.SplitBgView({
        template: PanlinCapTpl['templates/invest/investmentbg.hbs'],
        className: 'slides investment'
      });

      bgView.listenTo(view, 'expand', function() {
        bgView.toggleSplit();
        view.toggleReveal();
      })
      
      PanlinCap.mainRegion.show(view);
      PanlinCap.bgRegion.show(bgView);
    }
  });


  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'investment(/)': 'showInvestMent'
      },
      controller: new StaticController()
    });

  });
});
