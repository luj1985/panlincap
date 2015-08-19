PanlinCap.module('Navigation', function(Navigation, PanlinCap, Backbone, Marionette) {
  'use strict';

  var MenuView = Marionette.ItemView.extend({
    template: Handlebars.compile(
      '{{#each items}}' + 
      '<a href="{{link}}">{{title}}</a>' +
      '{{/each}}'
    ),
    className: 'navigation'
  });

  PanlinCap.addInitializer(function() {
    var promise = PanlinCap.reqres.request('menus:fetch');
    promise.then(function(raw) {
      var menus = new Backbone.Model(raw);
      PanlinCap.navRegion.show(new MenuView({ collection : menus }));
    });
  });
});