PanlinCap.module('Invest', function(Invest, PanlinCap, Backbone, Marionette) {
  'use strict';

  var InvestmentView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/invest/investment.hbs'],
    className: 'description investment',
    events: {
      'click .brief': 'expandTopic'
    },
    expandTopic : function() {
      $('.slides.investment').toggleClass('active');
      $('.description.investment').toggleClass('active');
    }
  });

  var InvestmentBg = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/invest/investmentbg.hbs'],
    tagName: 'ul',
    className: 'slides investment'
  });

  
  var StaticController = Marionette.Controller.extend({
    showInvestMent: function() {
      PanlinCap.mainRegion.show(new InvestmentView());
      PanlinCap.bgRegion.show(new InvestmentBg());
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
