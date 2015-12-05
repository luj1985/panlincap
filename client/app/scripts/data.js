(function(PanlinCap) {
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

  PanlinCap.reqres.setHandler('investees:fetch', function() {
    return $.get('/api/investees');
  });

  PanlinCap.reqres.setHandler('declaration:fetch', function(name) {
    return $.get('/api/declaration/' + name);
  });

  PanlinCap.reqres.setHandler('topics:fetch', function() {
    return $.get('/api/home.json');
  });

})(PanlinCap);
