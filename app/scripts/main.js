PanlinCap.module('Home', function(Home, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home.hbs']
  });


  PanlinCap.addInitializer(function() {
    PanlinCap.mainRegion.show(new HomeView());
  });
});