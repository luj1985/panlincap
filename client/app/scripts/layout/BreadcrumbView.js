PanlinCap.module('PanlinCap.Breadcrumb', function(Breadcrumb, PanlinCap, Backbone, Marionette) {
  'use strict';

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

  
  Backbone.history.on('route', function() {
    var fragment = this.getFragment() || '';
    PanlinCap.reqres.request('breadcrumb:fetch', fragment).then(function(breadcrumbs) {
      if (breadcrumbs.length === 0) {
        PanlinCap.breadcrumbRegion.empty();
      } else {
        PanlinCap.breadcrumbRegion.show(new BreadcrumbView({
          collection : new Backbone.Collection(breadcrumbs)
        }));
      }
    }).fail(function() {
      PanlinCap.breadcrumbRegion.empty();
    });
  });
});