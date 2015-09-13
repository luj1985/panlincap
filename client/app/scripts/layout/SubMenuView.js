PanlinCap.module('Layout.Sidebar', function(Sidebar, PanlinCap, Backbone, Marionette) {
  'use strict';

  Sidebar.SidebarView = Sidebar.SideMenuView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '{{#each items}}' +
      '<li><a href="#{{link}}">{{title}}</a></li>' +
      '{{/each}}'
    ),
    tagName : 'ul',
    className : 'brief'
  });
});