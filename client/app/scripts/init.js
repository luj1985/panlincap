(function(PanlinCap) {
  'use strict';

  PanlinCap.addRegions({
    headerRegion: '#header',
    logoRegion: '#panlin',
    navRegion: '#navigation',
    dialogRegion: '#dialog',
    subRegion: '#submenu',
    breadcrumbRegion: '#breadcrumb',
    bgRegion: '#background',
    bodyRegion: '#body'
  });


  // XXX: this is a hack way to detect mobile device
  // in mobile, the breadcrumb was hidden
  PanlinCap.isMobile = function() {
    return $('#breadcrumb').css('display') === 'none';
  };
  
  PanlinCap.on('start', function() {
    Backbone.history.start({ pushState: false });
    Backbone.Intercept.start();
  });

})(PanlinCap);