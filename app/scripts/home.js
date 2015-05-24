PanlinCap.module('Home', function(Home, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home/home.hbs'],
    className: 'home'
  });

  function play() {
    var flux = window.myFlux;
    if (flux) {
      flux.next('slide');
    }
  }

  var playHandler;

  var HomeBg = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home/homebg.hbs'],
    className: 'slides home',
    onShow: function() {
      window.myFlux = new flux.slider('.slides.home', {
        autoplay: false
      });
      playHandler = window.setInterval(play, 10000);
    },
    onDestroy: function() {
      delete window.myFlux;
      clearInterval(playHandler);
    }
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