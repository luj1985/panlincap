PanlinCap.module('PanlinCap.Breadcrumb', function(Breadcrumb, PanlinCap, Backbone, Marionette, $, _) {
  'use strict';

  var breadcurmbModel = new Backbone.Model({
    fragment : ''
  });

  var BreadcrumbView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '{{#if visible}}' +
      '<a class="section" href="/#">{{home}}</a>' +
      '{{#each items}}' +
      ' <i class="fa fa-chevron-right"></i> ' +
      '<a class="section" href="#{{link}}">{{title}}</a>' +
      '{{/each}}' + 
      '{{/if}}'
    ),
    className : 'breadcrumb',
    initialize : function() {
      this.listenTo(this.collection, 'sync', this.render);
      this.listenTo(this.model, 'change', this.render);
    },
    serializeData : function() {
      var fragment = this.model.get('fragment') || '';
      var collection = this.collection;
      var parts = fragment.split('/');
      var breadcrumbs = [], i, length;

      for (i = 0, length = parts.length; i < length; i++) {
        var path = parts.slice(0, i + 1);
        path.unshift('');

        var entry = collection.findWhere({ link : path.join('/') });
        // “首页”以及”基金管理“页面不需要出现面包屑导航
        if (entry && _.indexOf(['/', '/founds'], entry.get('link')) < 0) {
          breadcrumbs.push(entry.toJSON()); 
        }
      }
      var data = {
        items : breadcrumbs, 
        visible : (breadcrumbs.length > 0)
      };

      var home = collection.findWhere({ link : '/'});
      if (home) {
        data.home = home.get('title');
      }
      return data;
    }
  });

  PanlinCap.addInitializer(function() {
    var menus = PanlinCap.reqres.request('menus:fetch', null);
    PanlinCap.breadcrumbRegion.show(new BreadcrumbView({model : breadcurmbModel, collection : menus }));
  });
  
  Backbone.history.on('route', function() {
    var fragment = this.getFragment() || '';
    breadcurmbModel.set('fragment', fragment);
  });
});