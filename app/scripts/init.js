PanlinCap.addRegions({
  navRegion: '#nav',
  mainRegion: '#main',
  dialogRegion: '#dialog',
  bgRegion: '#background'
});

PanlinCap.on('start', function() {
  Backbone.history.start({ pushState: true });
  Backbone.Intercept.start();
});