PanlinCap.module('PanlinCap.Menu', function(Menu, PanlinCap, Backbone, Marionette, $, _) {
  'use strict';

  var MenuModel = Backbone.Model.extend({
    defaults : { parent : null }
  });

  var MenuCollection = Backbone.Collection.extend({
    model : MenuModel,
    url : '/api/menus'
  });

  var collection = new MenuCollection();
  var promise = collection.fetch();

  PanlinCap.reqres.setHandler('menus:fetch', function(parentid) {
    var deferred = $.Deferred();
    promise.then(function(raw) {
      var menu = _.filter(raw, function(d) { 
        return d.parent === parentid;
      });
      deferred.resolve(menu);
    });
    return deferred;
  });

  function fetchMenuItem(collection, link) {
    var entry = collection.findWhere({ link : link });
    if (entry) {
      while (entry.get('parent')) {
        entry = collection.get(entry.get('parent'));
      }
      return entry;
    } else {
      var pos = _.lastIndexOf(link, '/');
      if (pos > 0) {
        link = link.slice(0, pos);
        return fetchMenuItem(collection, link);
      }
    }
    return null;
  }

  PanlinCap.reqres.setHandler('submenus:fetch', function(fragment) {
    var deferred = $.Deferred();
    promise.then(function() {
      var link = fragment[0] === '/' ? fragment : '/' + fragment;
      var entry = fetchMenuItem(collection, link);
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