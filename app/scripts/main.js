PanlinCap.module('Home', function(Home, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home.hbs'],
    className: 'home'
  });

  var HomeBg = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/homebg.hbs'],
    tagName: 'ul',
    className: 'slides home'
  });

  var AboutView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/about.hbs'],
    className: 'description'
  });

  var InvestmentView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/investment.hbs'],
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
    template: PanlinCapTpl['templates/investmentbg.hbs'],
    tagName: 'ul',
    className: 'slides investment'
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
      PanlinCap.bgRegion.show(new HomeBg());
    },
    showInvestMent: function() {
      PanlinCap.mainRegion.show(new InvestmentView());
      PanlinCap.bgRegion.show(new InvestmentBg());
    },
    showAbout: function() {
      PanlinCap.mainRegion.show(new AboutView());
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