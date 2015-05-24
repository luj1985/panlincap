PanlinCap.module('About', function(About, PanlinCap, Backbone, Marionette) {
  'use strict';

  var StaticController = Marionette.Controller.extend({
    showAbout: function() {
      var view = new PanlinCap.Share.SplitView({
        template: PanlinCapTpl['templates/about/about.hbs'],
        className: 'description about'
      });
      var bgView = new PanlinCap.Share.SplitBgView({
        template : PanlinCapTpl['templates/about/aboutbg.hbs'],
        className: 'slides about'
      });

      bgView.listenTo(view, 'expand', function() {
        bgView.toggleSplit();
        view.toggleReveal();
      })
      
      PanlinCap.mainRegion.show(view);
      PanlinCap.bgRegion.show(bgView);
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