PanlinCap.module('Case', function(Case, PanlinCap, Backbone, Marionette) {
  'use strict';


  var CasesView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/case/cases.hbs'],
    className: 'description'
  });

  var StaticController = Marionette.Controller.extend({
    showCases: function() {
      PanlinCap.mainRegion.show(new CasesView());
    }
  });

  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'cases(/)' : 'showCases'
      },
      controller: new StaticController()
    });

  });
});