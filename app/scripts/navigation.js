PanlinCap.module('Navigation', function(Navigation, PanlinCap, Backbone, Marionette) {
  'use strict';

  var NavView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/nav.hbs'],
    className: 'ui menu',
    onRender : function() {
      this.$el.find('.ui.dropdown').dropdown();
    }
  });

  PanlinCap.addInitializer(function() {
    PanlinCap.navRegion.show(new NavView());
  });
});