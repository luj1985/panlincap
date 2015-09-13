PanlinCap.module('Region', function(Region, PanlinCap, Backbone, Marionette) {
  'use strict';

  PanlinCap.addRegions({
    navRegion: '#navigation',
    bodyRegion: '#body',
    dialogRegion: '#dialog'
  });

  var Layout = PanlinCap.module('PanlinCap.Layout');

  var SubMenuRegion = Marionette.Region.extend({
    el: '#submenu',
    loadMenu : function(menuid) {
      this.empty();
      PanlinCap.reqres.request('submenu:fetch', menuid).then(function(submenu) {
        this.show(new Layout.SubMenuView({
          collection : new Backbone.Collection(submenu)
        }));
      }.bind(this));
    }
  });

  var BackgroundRegion = Marionette.Region.extend({
    el: '#background'
  });

  PanlinCap.addInitializer(function() {
    PanlinCap.addRegions({ 
      subRegion: SubMenuRegion,
      bgRegion: BackgroundRegion
    });
  });
});