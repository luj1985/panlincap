PanlinCap.module('PanlinCap.Team', function(Team, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  var MemberView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team/member.hbs'],
    className : 'panlin dialog',
    onShow : function() {
      this.$el.bPopup({ 
        closeClass : 'close',
        opacity: 0.3,
        positionStyle: 'fixed',
        amsl : 0
      });
    }
  });

  var TeamView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team/team.hbs'],
    className : 'person',
    onRender : function() {
      var model = this.model;
      this.$el.click(function() {
        PanlinCap.dialogRegion.show(new MemberView({model : model}));
      });
    }
  });

  var TeamsView = Layout.ScrollView.extend({
    template : PanlinCapTpl['templates/team/container.hbs'],
    childView : TeamView,
    childViewContainer : '.teams'
  });

  var teamController = (function() {
    return {
      showTeam : function(sub) {
        PanlinCap.reqres.request('members:fetch').then(function(raw) {
          var members = new Backbone.Collection(raw);
          PanlinCap.bodyRegion.show(new TeamsView({collection: members}));
        });
        PanlinCap.execute('showBackground', 'team');
        if (sub === 'partner') {
          $('.page').animate({scrollTop: 0}, { duration: 300, easing: 'swing'});
        } else if (sub === 'members') {
          $('.page').animate({scrollTop: 640}, { duration: 300, easing: 'swing'});
        }
      }
    };
  })();

  Team.Controller = teamController; 
});
