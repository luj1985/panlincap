PanlinCap.module('Case', function(Case, PanlinCap, Backbone, Marionette) {
  'use strict';


  var CasesView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/case/cases.hbs'],
    className: 'cases',
    onShow : function() {
      this.$el.coverflow();
    }
  });

  var CasesBgView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/case/casesbg.hbs'],
    className: 'cases'
  });

  var StaticController = Marionette.Controller.extend({
    showCases: function() {
      PanlinCap.mainRegion.show(new CasesView());
      PanlinCap.bgRegion.show(new CasesBgView());
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