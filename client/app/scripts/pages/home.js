PanlinCap.module('Home', function(Home, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home/home.hbs'],
    className: 'topics'
  });

  var homeController = {
    showHome: function() {
      var promise = PanlinCap.reqres.request('topics:fetch');
      promise.then(function(data) {
        var topics = new Backbone.Collection(data);
        PanlinCap.bodyRegion.show(new HomeView({ collection : topics }));
      });
      PanlinCap.execute('showBackground', 'home');
    }
  };

  PanlinCap.addInitializer(function() {
    new Marionette.AppRouter({
      appRoutes : {
        '(/)' : 'showHome'
      },
      controller: homeController
    });
  });
});