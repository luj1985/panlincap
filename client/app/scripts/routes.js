PanlinCap.module('PanlinCap.Route', function(Route, PanlinCap, Backbone, Marionette) {
  'use strict';

  PanlinCap.addInitializer(function() {
    var HomeController = PanlinCap.module('PanlinCap.Home').Controller,
        RevealController = PanlinCap.module('PanlinCap.Reveal').Controller,
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
      showTeam : TeamController.showTeam.bind(TeamController),
      showFounds : FoundController.showFounds.bind(FoundController),
      showCases : CaseController.showCases.bind(CaseController),
      showNews : NewsController.showNews.bind(NewsController),
      showContacts : ContactController.showContacts.bind(ContactController),
      showHome : HomeController.showHome.bind(HomeController)
    };

    var router = new Marionette.AppRouter({
      appRoutes : {
        '(/)' : 'showHome',
        'about(/:subpage)': 'showAbout',
        'investment(/:subpage)': 'showInvestment',
        'team(/:subpage)(/:id)' : 'showTeam',
        'founds(/)' : 'showFounds',
        'cases(/)' : 'showCases',
        'news(/:subpage)(/:id)': 'showNews',
        'contacts(/:subpage)(/:id)' : 'showContacts'
      },
      controller: controller
    });

    router.on('route', function() {
      $('.viewport').scrollTop(0);
    });
  });
});