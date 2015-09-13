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
});