PanlinCap.module('Layout.Sidebar', function(Sidebar, PanlinCap, Backbone, Marionette) {
  'use strict';

  Sidebar.BreadcrumbView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '<a class="section" href="/#">首页</a>' +
      '{{#each items}}' +
      ' <i class="fa fa-chevron-right"></i> ' +
      '<a class="section" href="{{link}}">{{text}}</a>' +
      '{{/each}}'
    ),
    className : 'ui breadcrumb'
  });
});