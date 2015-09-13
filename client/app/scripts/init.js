(function(PanlinCap) {
  'use strict';

  PanlinCap.addRegions({
    navRegion: '#navigation',
    bodyRegion: '#body',
    dialogRegion: '#dialog',
    bgRegion: '#background'
  });


  PanlinCap.on('start', function() {
    Backbone.history.start({ pushState: false });
    Backbone.Intercept.start();
  });

})(PanlinCap);


PanlinCap.module('Common', function(Common, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  var SubMenuRegion = Marionette.Region.extend({
    el: '#submenu',
    loadMenu : function(menuid) {
      var promise = PanlinCap.reqres.request('submenu:fetch', menuid);
      promise.then(function(submenu) {
        PanlinCap.subRegion.show(new Layout.SubMenuView({
          collection : new Backbone.Collection(submenu)
        }));
      });
    }
  });

  PanlinCap.addInitializer(function() {
    PanlinCap.addRegions({ subRegion: SubMenuRegion });
  });
});