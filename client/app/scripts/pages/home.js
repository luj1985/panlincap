PanlinCap.module('PanlinCap.Home', function(Home, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home.hbs'],
    className: 'topics'
  });

  var homeController = {
    showHome: function() {
      PanlinCap.reqres.request('topics:fetch').then(function(data) {
        var topics = new Backbone.Collection(data);
        PanlinCap.bodyRegion.show(new HomeView({ collection : topics }));
      });
      PanlinCap.subRegion.empty();
      PanlinCap.execute('showBackground', 'home');
    }
  };

  Home.Controller = homeController;
});