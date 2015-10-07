PanlinCap.module('PanlinCap.Layout', function(Layout, PanlinCap, Backbone, Marionette) {
  'use strict';

  var SubMenuView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '{{#each items}}' +
      '<li><a href="#{{link}}">{{title}}</a></li>' +
      '{{/each}}'
    ),
    tagName : 'ul'
  });

  Backbone.history.on('route', function() {
    PanlinCap.subRegion.empty();

    var fragment = this.getFragment() || '';
    PanlinCap.reqres.request('submenus:fetch', fragment).then(function(submenu) {
      if (submenu && submenu.length > 0) {
        PanlinCap.subRegion.show(new SubMenuView({
          collection : new Backbone.Collection(submenu)
        }));
      }
    });
  });
});