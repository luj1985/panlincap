PanlinCap.module('Team', function(Team, PanlinCap, Backbone, Marionette) {
  'use strict';

  var TeamView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team.hbs'],
    className: 'description'
  });


  var StaticController = Marionette.Controller.extend({
    showTeam: function() {
      PanlinCap.mainRegion.show(new TeamView());
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
