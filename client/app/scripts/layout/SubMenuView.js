PanlinCap.module('PanlinCap.Layout', function(Layout, PanlinCap, Backbone, Marionette) {
  'use strict';

  Layout.SubMenuView = Layout.SideMenuView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '{{#each items}}' +
      '<li><a href="#{{link}}">{{title}}</a></li>' +
      '{{/each}}'
    ),
    tagName : 'ul',
    className : 'brief'
  });
});