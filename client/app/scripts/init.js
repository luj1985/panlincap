(function(PanlinCap) {
  'use strict';

  PanlinCap.addRegions({
    navRegion: '.fixed-header nav',
    bodyRegion: '#body',
    dialogRegion: '#dialog',
    bgRegion: '#background'
  });

  PanlinCap.on('start', function() {
    Backbone.history.start({ pushState: false });
    Backbone.Intercept.start();
  });

})(PanlinCap);