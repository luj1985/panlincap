(function(PanlinCap, Marionette, Backbone) {
  'use strict';

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

  PanlinCap.reqres.setHandler('menus:fetch', function() {
    return $.get('/api/menus');
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
