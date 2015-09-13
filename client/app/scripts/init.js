(function(PanlinCap) {
  'use strict';

  PanlinCap.addRegions({
    navRegion: '#navigation',
    bodyRegion: '#body',
    dialogRegion: '#dialog',
    subRegion: '#submenu',
    breadcrumbRegion: '#breadcrumb',
    bgRegion: '#background'
  });
  
  PanlinCap.on('start', function() {
    Backbone.history.start({ pushState: false });
    Backbone.Intercept.start();
  });

})(PanlinCap);