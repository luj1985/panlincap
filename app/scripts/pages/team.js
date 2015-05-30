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

  var TeamsView = Marionette.CollectionView.extend({
    className : 'teams',
    childView : TeamView,
  });

  var StaticController = Marionette.Controller.extend({
    showTeam: function() {
      var members = PanlinCap.reqres.request('members:fetch');
      PanlinCap.bodyRegion.show(new TeamsView({collection: members}));
      PanlinCap.execute('showBackground', 'team');
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
