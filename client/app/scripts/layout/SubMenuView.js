PanlinCap.module('PanlinCap.Layout', function(Layout, PanlinCap, Backbone, Marionette) {
  'use strict';

  Layout.SubMenuView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '{{#each items}}' +
      '<li><a href="#{{link}}">{{title}}</a></li>' +
      '{{/each}}'
    ),
    tagName : 'ul',
    className : 'brief'
  });

  PanlinCap.addInitializer(function() {
    Backbone.history.on('route', function(ctx, name, args) {
      var fragment = this.getFragment() || '';
      var submenuPromise = PanlinCap.reqres.request('submenus:fetch', fragment);
      submenuPromise.then(function(submenu) {
        if (submenu && submenu.length > 0) {
          PanlinCap.subRegion.show(new Layout.SubMenuView({
            collection : new Backbone.Collection(submenu)
          }));
        } else {
          PanlinCap.subRegion.empty();
        }
      }).fail(function() {
        PanlinCap.subRegion.empty();
      });
    });
  });
});