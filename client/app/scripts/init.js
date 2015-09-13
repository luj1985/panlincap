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


  // XXX: this is a hack way to detect mobile device
  // in mobile, the breadcrumb was hidden
  PanlinCap.isMobile = function() {
    return $('#breadcrumb').css('display') === 'none';
  }
  
  PanlinCap.on('start', function() {
    Backbone.history.start({ pushState: false });
    Backbone.Intercept.start();
  });

})(PanlinCap);