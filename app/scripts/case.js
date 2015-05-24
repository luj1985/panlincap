PanlinCap.module('Case', function(Case, PanlinCap, Backbone, Marionette) {
  'use strict';


  var CasesView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/case/cases.hbs'],
    className : 'showcase',
    onShow : function() {
      this.$('.cases').coverflow({
        index : 4,
        easing: 'easeInOutQuad',
        innerAngle: -20,
        outerAngle: 0,
        innerScale: 0.8,
        outerScale: 0.5,
        innerOffset: 100 / 3
      });
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