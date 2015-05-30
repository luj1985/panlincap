PanlinCap.module('Navigation', function(Navigation, PanlinCap, Backbone, Marionette) {
  'use strict';

  var MenuView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/nav.hbs'],
    className: 'ui menu',
    onRender : function() {
      this.$el.find('.ui.dropdown').dropdown();
    }
  });

  PanlinCap.addInitializer(function() {
    var menus = PanlinCap.reqres.request('menus:fetch');
    PanlinCap.navRegion.show(new MenuView({ collection : menus }));
  });
});