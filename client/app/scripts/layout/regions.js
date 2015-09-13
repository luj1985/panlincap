PanlinCap.module('Region', function(Region, PanlinCap, Backbone, Marionette) {
  'use strict';

  PanlinCap.addRegions({
    navRegion: '#navigation',
    bodyRegion: '#body',
    dialogRegion: '#dialog',
    subRegion: '#submenu',
    breadcrumbRegion: '#breadcrumb'
  });

  var Layout = PanlinCap.module('PanlinCap.Layout');

  var BackgroundRegion = Marionette.Region.extend({
    el: '#background'
  });

  PanlinCap.addInitializer(function() {
    PanlinCap.addRegions({ 
      bgRegion: BackgroundRegion
    });

    var About = PanlinCap.module('PanlinCap.About').Controller;
    var Invest = PanlinCap.module('PanlinCap.Invest').Controller;

    var controller = {
      showAbout : About.showAbout.bind(About),
      showInvestment : Invest.showInvestment.bind(Invest)
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