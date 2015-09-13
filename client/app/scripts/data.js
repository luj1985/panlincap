(function(PanlinCap, Marionette, Backbone) {
  'use strict';

  var menuCollection = new Backbone.Collection();
  var menuPromise = menuCollection.fetch({
    url : '/api/menus'
  });

  PanlinCap.reqres.setHandler('news:fetch', function() {
    return $.get('/api/article?type=invested');
  });

  PanlinCap.reqres.setHandler('company-news:fetch', function() {
    return $.get('/api/article?type=company');
  });

  PanlinCap.reqres.setHandler('news:detail', function(id) {
    return $.get('/api/article/' + id + '.json');
  });

  PanlinCap.reqres.setHandler('cases:fetch', function() {
    return $.get('/api/cases');
  });

  PanlinCap.reqres.setHandler('menus:fetch', function(parentid) {
    var deferred = $.Deferred();
    menuPromise.then(function(raw) {
      var menu = _.filter(raw, function(d) {
        return d.parent == parentid;
      });
      deferred.resolve(menu);
    });
    return deferred;
  });

  PanlinCap.reqres.setHandler('breadcrumb:fetch', function(fragment) {
    var deferred = $.Deferred();
    var breadcrumbs = [], i, length;
    menuPromise.then(function() {
      var parts = fragment.split('/');
      for (i = 0, length = parts.length; i < length; i++) {
        var path = parts.slice(0, i + 1);
        path.unshift('');
        var entry = menuCollection.findWhere({ link : path.join('/') });
        if (entry && entry.get('link') !== '/') {
          breadcrumbs.push(entry); 
        }
      }
      deferred.resolve(breadcrumbs);
    });
    return deferred;
  });

  PanlinCap.reqres.setHandler('submenu:fetch', function(id) {
    return $.get('/api/submenus/' + id);
  });

  PanlinCap.reqres.setHandler('declaration:fetch', function(name) {
    return $.get('/api/declaration/' + name);
  });

  PanlinCap.reqres.setHandler('founds:fetch', function() {
    return $.get('/api/founds');
  });

  PanlinCap.reqres.setHandler('topics:fetch', function() {
    return $.get('/api/home.json');
  });

  PanlinCap.reqres.setHandler('members:fetch', function() {
    return $.get('/api/members');
  });

})(PanlinCap, Marionette, Backbone);
