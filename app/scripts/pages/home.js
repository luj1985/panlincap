PanlinCap.module('Home', function(Home, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home/home.hbs'],
    className: 'topics'
  });

  var homeController = {
    showHome: function() {
      var topics = PanlinCap.reqres.request('topics:fetch');
      PanlinCap.bodyRegion.show(new HomeView({ collection : topics }));
      PanlinCap.execute('showBackground', 'home');
    }
  }

  PanlinCap.addInitializer(function() {
    new Marionette.AppRouter({
      appRoutes : {
        '(/)' : 'showHome'
      },
      controller: homeController
    });
  });
});