PanlinCap.module('Navigation', function(Navigation, PanlinCap, Backbone, Marionette) {
  'use strict';

  var NavView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/nav.hbs']
  });

  PanlinCap.addInitializer(function() {
    PanlinCap.navRegion.show(new NavView());
  });
});