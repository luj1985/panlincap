(function(PanlinCap) {
  'use strict';

  PanlinCap.addRegions({
    navRegion: '.fixed-header nav',
    bodyRegion: '#body',
    dialogRegion: '#dialog',
    bgRegion: '#background'
  });

  PanlinCap.on('start', function() {
    Backbone.history.start({ pushState: true });
    Backbone.Intercept.start();
  });


  var router = new Marionette.AppRouter({});
  router.on('route', function(route, params) {
    // console.log(arguments);
  });
})(PanlinCap);