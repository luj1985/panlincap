PanlinCap.module('PanlinCap.Layout', function(Layout, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Breadcrumb = Backbone.Model.extend({
    defaults:{ text : '', link : '' } 
  });

  var BreadcrumbList = Backbone.Collection.extend({
    model : Breadcrumb
  });

  var BreadcrumbView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '<a class="section" href="/#">首页</a>' +
      '{{#each items}}' +
      ' <i class="fa fa-chevron-right"></i> ' +
      '<a class="section" href="#{{link}}">{{title}}</a>' +
      '{{/each}}'
    ),
    className : 'ui breadcrumb'
  });

  Layout.BreadcrumbView = BreadcrumbView;

  PanlinCap.addInitializer(function() {
    Backbone.history.on('route', function(ctx, name, args) {
      var fragment = this.getFragment() || '';
      var promise = PanlinCap.reqres.request('breadcrumb:fetch', fragment);
      promise.then(function(breadcrumbs) {
        if (breadcrumbs.length === 0) {
          PanlinCap.breadcrumbRegion.empty();
        } else {
          PanlinCap.breadcrumbRegion.show(new Layout.BreadcrumbView({
            collection : new Backbone.Collection(breadcrumbs)
          }));
        }
      }).fail(function() {
        PanlinCap.breadcrumbRegion.empty();
      });
    });
  });
});