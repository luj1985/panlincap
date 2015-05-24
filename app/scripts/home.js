PanlinCap.module('Home', function(Home, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home/home.hbs'],
    className: 'home'
  });

  var HomeBg = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home/homebg.hbs'],
    className: 'slides home'
  });


  var StaticController = Marionette.Controller.extend({
    showHome: function() {
      PanlinCap.mainRegion.show(new HomeView());
      PanlinCap.bgRegion.show(new HomeBg());
    }
  });

  PanlinCap.addInitializer(function() {
    new Marionette.AppRouter({
      appRoutes : {
        '(/)' : 'showHome'
      },
      controller: new StaticController()
    });
  });
});