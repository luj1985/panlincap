PanlinCap.module('Home', function(Home, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home.hbs']
  });

  var AboutView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/about.hbs'],
    className: 'description'
  });

  var InvestmentView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/investment.hbs'],
    className: 'description'
  });

  var StaticController = Marionette.Controller.extend({
    showHome: function() {
      PanlinCap.mainRegion.show(new HomeView());
    },
    showAbout: function() {
      PanlinCap.mainRegion.show(new AboutView());
    },
    showInvestMent: function() {
      PanlinCap.mainRegion.show(new InvestmentView());
    }
  });


  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'investment(/)': 'showInvestMent',
        'about(/)': 'showAbout',
        '(/)' : 'showHome'
      },
      controller: new StaticController()
    });


  });
});