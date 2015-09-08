PanlinCap.module('Navigation', function(Navigation, PanlinCap, Backbone, Marionette) {
  'use strict';

  var MenuView = Marionette.ItemView.extend({
    template: Handlebars.compile(
      '{{#each items}}' + 
      '<a href="#{{link}}">{{title}}</a>' +
      '{{/each}}'
    ),
    className: 'wrapper'
  });

  PanlinCap.addInitializer(function() {
    var promise = PanlinCap.reqres.request('menus:fetch');
    promise.then(function(raw) {
      var menus = new Backbone.Model(raw);
      PanlinCap.navRegion.show(new MenuView({ collection : menus }));
    });

    $('.mobile.menu.trigger').click(function() {
      $('body').toggleClass('push');
    });
    $('#navigation').on('click', 'a', function() {
      $('body').removeClass('push');
    })
  });
});