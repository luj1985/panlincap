PanlinCap.module('Team', function(Team, PanlinCap, Backbone, Marionette) {
  'use strict';

  var TeamView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team/team.hbs'],
    tagName : 'table',
    className: 'teams'
  });

  var TeamBgView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/team/teambg.hbs'],
    className: 'slides home'
  });


  var StaticController = Marionette.Controller.extend({
    showTeam: function() {
      PanlinCap.mainRegion.show(new TeamView());
      PanlinCap.bgRegion.show(new TeamBgView());
    }
  });

  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'team(/)' : 'showTeam'
      },
      controller: new StaticController()
    });

  });
});
