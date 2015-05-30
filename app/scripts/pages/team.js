PanlinCap.module('Team', function(Team, PanlinCap, Backbone, Marionette) {
  'use strict';


  var MemberView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team/member.hbs'],
    className : 'ui panlin modal',
    onShow : function() {
      this.$el.modal('show');
    }
  });

  var TeamView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team/team.hbs'],
    className : 'person',
    events : {
      'click .member' : function() {
        PanlinCap.dialogRegion.show(new MemberView({model : this.model}));
      }
    }
  });

  var TeamsView = Marionette.CompositeView.extend({
    template : PanlinCapTpl['templates/team/teams.hbs'],
    className : 'team-show',
    childView : TeamView,
    childViewContainer : '.teams',
  })

  var TeamBgView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/team/teambg.hbs'],
    className: 'slides home'
  });

  var StaticController = Marionette.Controller.extend({
    showTeam: function() {
      var members = PanlinCap.reqres.request('members:fetch');
      PanlinCap.bodyRegion.show(new TeamsView({collection: members}));
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
