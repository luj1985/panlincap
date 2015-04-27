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

  var TeamView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team.hbs'],
    className: 'description'
  });

  var CasesView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/cases.hbs'],
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
    },
    showCases: function() {
      PanlinCap.mainRegion.show(new CasesView());
    },
    showTeam: function() {
      PanlinCap.mainRegion.show(new TeamView());
    }
  });


  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'investment(/)': 'showInvestMent',
        'about(/)': 'showAbout',
        'team(/)' : 'showTeam',
        'cases(/)' : 'showCases',
        '(/)' : 'showHome'
      },
      controller: new StaticController()
    });


  });
});