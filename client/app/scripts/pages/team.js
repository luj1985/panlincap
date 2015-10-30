PanlinCap.module('PanlinCap.Team', function(Team, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  var MemberDialogView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team/memberdialog.hbs'],
    className : 'panlin dialog',
    onShow : function() {
      this.$el.bPopup({ 
        closeClass : 'close',
        opacity: 0.3,
        amsl : 0
      });
    }
  });

  var MemberView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team/member.hbs'],
    className : 'panlin member'
  });

  var TeamView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team/team.hbs'],
    className : 'person',
    onRender : function() {
      var model = this.model;
      if (!PanlinCap.isMobile()) {
        this.$el.click(function(e) {
          e.preventDefault();
          PanlinCap.dialogRegion.show(new MemberDialogView({model : model}));
        });
      }
    }
  });

  var TeamsView = Layout.ScrollView.extend({
    childView : TeamView,
    className : 'teams main'
  });

  var teamController = (function() {
    return {
      showTeam : function(id) {
        PanlinCap.subRegion.empty();
        PanlinCap.execute('showBackground', 'team');
        
        PanlinCap.reqres.request('members:fetch').then(function(raw) {
          var members = new Backbone.Collection(raw);
          if (id) {
            var person = members.get(id);
            PanlinCap.bodyRegion.show(new MemberView({model : person}));
          } else {
            PanlinCap.bodyRegion.show(new TeamsView({collection: members}));
          }
        });
      }
    };
  })();

  Team.Controller = teamController; 
});
