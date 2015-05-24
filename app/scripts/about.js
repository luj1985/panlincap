PanlinCap.module('About', function(About, PanlinCap, Backbone, Marionette) {
  'use strict';

  var AboutView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/about/about.hbs'],
    className: 'description about'
  });

  var AboutBgView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/about/aboutbg.hbs'],
    className: 'slides home'
  });

  var StaticController = Marionette.Controller.extend({
    showAbout: function() {
      PanlinCap.mainRegion.show(new AboutView());
      PanlinCap.bgRegion.show(new AboutBgView());
    }
  });

  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'about(/)': 'showAbout'
      },
      controller: new StaticController()
    });

  });
});