PanlinCap.module('Navigation', function(Navigation, PanlinCap, Backbone, Marionette) {
  'use strict';

  var MenuView = Marionette.ItemView.extend({
    template: Handlebars.compile('{{#each items}}<a href="#{{link}}">{{title}}</a>{{/each}}'),
    className: 'menus'
  });

  PanlinCap.addInitializer(function() {
    PanlinCap.reqres.request('menus:fetch', null).then(function(menus) {
      PanlinCap.navRegion.show(new MenuView({ collection : new Backbone.Collection(menus) }));
    });

    $('.mobile.menu.trigger').click(function() {
      $('body').toggleClass('push');
    });

    $('#header').on('click', 'a.back', function(e) {
      e.preventDefault();
      window.history.back();
    });

    $('#navigation').on('click', 'a', function() {
      $('body').removeClass('push');
    });

    $('#dimmer').on('click', function() {
      $('body').removeClass('push');
    });
  });
});