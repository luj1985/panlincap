PanlinCap.module('PanlinCap.Menu', function(Menu, PanlinCap, Backbone, Marionette) {
  'use strict';

  var collection = new Backbone.Collection();
  var promise = collection.fetch({ url : '/api/menus' });

  PanlinCap.reqres.setHandler('menus:fetch', function(parentid) {
    var deferred = $.Deferred();
    promise.then(function(raw) {
      var menu = _.filter(raw, function(d) { return d.parent == parentid; });
      deferred.resolve(menu);
    });
    return deferred;
  });

  PanlinCap.reqres.setHandler('submenus:fetch', function(fragment) {
    var deferred = $.Deferred();
    promise.then(function(raw) {
      var link = fragment[0] === '/' ? fragment : '/' + fragment;
      var entry = collection.findWhere({ link : link });
      while (entry.get('parent')) {
        entry = collection.get(entry.get('parent'));
      }
      if (entry) {
        deferred.resolve(collection.where( { parent : entry.id }));
      } else {
        deferred.reject();
      }
    });
    return deferred;
  });

  PanlinCap.reqres.setHandler('breadcrumb:fetch', function(fragment) {
    var deferred = $.Deferred(), breadcrumbs = [], i, length;
    promise.then(function() {
      var parts = fragment.split('/');
      for (i = 0, length = parts.length; i < length; i++) {
        var path = parts.slice(0, i + 1);
        path.unshift('');

        var entry = collection.findWhere({ link : path.join('/') });
        // “首页”以及”基金管理“页面不需要出现面包屑导航
        if (entry && _.indexOf(['/', '/founds'], entry.get('link')) < 0) {
          breadcrumbs.push(entry); 
        }
      }
      deferred.resolve(breadcrumbs);
    });
    return deferred;
  });
});