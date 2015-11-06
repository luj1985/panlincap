PanlinCap.module('PanlinCap.Home', function(Home, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home.hbs'],
    className: 'topics hide'
  });

  var homeController = {
    showHome: function() {
      PanlinCap.subRegion.empty();
      var promise = PanlinCap.request('showBackground', 'home');

      PanlinCap.reqres.request('topics:fetch').then(function(data) {
        var topics = new Backbone.Collection(data);
        var homeView = new HomeView({ collection : topics });

        PanlinCap.bodyRegion.show(homeView);

        promise.then(function() {
          setTimeout(function() {
            homeView.$el.removeClass('hide');  
          }, 1000);
        });
      });
    }
  };

  Home.Controller = homeController;
});