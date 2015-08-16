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
    var promise = PanlinCap.reqres.request('menus:fetch');
    promise.then(function(raw) {
      var menus = new Backbone.Model(raw);
      PanlinCap.navRegion.show(new MenuView({ collection : menus }));
    });
  });
});