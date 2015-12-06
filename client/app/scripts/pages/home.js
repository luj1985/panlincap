PanlinCap.module('PanlinCap.Home', function(Home, PanlinCap, Backbone, Marionette) {
  'use strict';
  
  PanlinCap.reqres.setHandler('topics:fetch', function() {
    return $.get('/api/home.json');
  });

  var HomeView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home.hbs'],
    className: 'topics hide'
  });

  var visited = false;

  var homeController = {
    showHome: function() {
      PanlinCap.subRegion.empty();
      var promise = PanlinCap.request('showBackground', 'home');

      PanlinCap.reqres.request('topics:fetch').then(function(data) {
        var homeView = new HomeView({ collection : new Backbone.Collection(data) });

        PanlinCap.bodyRegion.show(homeView);

        if (visited) {
          homeView.$el.removeClass('hide');  
        } else {
          promise.then(function() {
            setTimeout(function() {
              homeView.$el.removeClass('hide');  
            }, 1000);
          });
          visited = true;
        }
      });
    }
  };

  Home.Controller = homeController;
});