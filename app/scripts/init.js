PanlinCap.addRegions({
  navRegion: '#nav',
  bodyRegion: '#body',
  dialogRegion: '#dialog',
  bgRegion: '#background'
});

PanlinCap.on('start', function() {
  Backbone.history.start({ pushState: true });
  Backbone.Intercept.start();
});