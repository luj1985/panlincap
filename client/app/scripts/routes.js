PanlinCap.module('PanlinCap.Route', function(Route, PanlinCap, Backbone, Marionette) {
  'use strict';

  PanlinCap.addInitializer(function() {
    var RevealController = PanlinCap.module('PanlinCap.Reveal').Controller,
        TeamController = PanlinCap.module('PanlinCap.Team').Controller,
        FoundController = PanlinCap.module('PanlinCap.Found').Controller,
        CaseController = PanlinCap.module('PanlinCap.Case').Controller,
        NewsController = PanlinCap.module('PanlinCap.News').Controller,
        ContactController = PanlinCap.module('PanlinCap.Contact').Controller;

    var controller = {
      showAbout : function(subpage) {
        return RevealController.showRevealPage(subpage, 'about', '#/about');
      },
      showInvestment : function(subpage) {
        return RevealController.showRevealPage(subpage, 'invest', '#/investment');
      },
      showTeam : function(subpage) {
        return TeamController.showTeam(subpage);
      },
      showFounds : function() {
        return FoundController.showFounds();
      },
      showCases : function() {
        return CaseController.showCases();
      },
      showNews : function(subpage, id) {
        return NewsController.showNews(subpage, id);
      },
      showContacts : function(subpage, id) {
        return ContactController.showContacts(subpage, id);
      }
    }

    var router = new Marionette.AppRouter({
      appRoutes : {
        'about(/:subpage)': 'showAbout',
        'investment(/:subpage)': 'showInvestment',
        'team(/:subpage)' : 'showTeam',
        'founds(/)' : 'showFounds',
        'cases(/)' : 'showCases',
        'news(/:subpage)(/:id)': 'showNews',
        'contacts(/:subpage)(/:id)' : 'showContacts'
      },
      controller: controller
    });


    router.on('route', function(route, params) {
      $('.page').scrollTop(0);
    });
  });
});