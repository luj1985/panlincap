PanlinCap.module('Region', function(Region, PanlinCap, Backbone, Marionette) {
  'use strict';

  PanlinCap.addRegions({
    navRegion: '#navigation',
    bodyRegion: '#body',
    dialogRegion: '#dialog',
    subRegion: '#submenu',
    breadcrumbRegion: '#breadcrumb',
    bgRegion: '#background'
  });

  var Layout = PanlinCap.module('PanlinCap.Layout');


  PanlinCap.addInitializer(function() {
    var RevealController = PanlinCap.module('PanlinCap.Reveal').Controller;

    var controller = {
      showAbout : function(sub) {
        return RevealController.showRevealPage(sub, 'about', '#/about');
      },
      showInvestment : function(sub) {
        return RevealController.showRevealPage(sub, 'invest', '#/investment');
      }
    }

    var router = new Marionette.AppRouter({
      appRoutes : {
        'about(/:sub)': 'showAbout',
        'investment(/:sub)': 'showInvestment'
      },
      controller: controller
    });


    router.on('route', function(route, params) {
      $('.page').scrollTop(0);
    });
  });
});