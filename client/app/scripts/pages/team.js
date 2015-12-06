PanlinCap.module('PanlinCap.Team', function(Team, PanlinCap, Backbone, Marionette) {
  'use strict';

  var MemberModel = Backbone.Model.extend({});
  var MemberCollection = Backbone.Collection.extend({
    model : MemberModel,
    url : '/api/members'
  });

  var collection = new MemberCollection();

  var Share = PanlinCap.module('PanlinCap.Share');

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

  var TeamsView = Share.ScrollView.extend({
    childView : TeamView,
    className : 'teams main',
    initialize : function() {
      this.listenTo(PanlinCap, 'language', function() {
        collection.fetch();
      });
    }
  });

  var teamController = (function() {
    return {
      showTeam : function(id) {
        PanlinCap.subRegion.empty();
        PanlinCap.execute('showBackground', 'team');

        if (id) {
          var person = collection.get(id);
          PanlinCap.bodyRegion.show(new MemberView({model : person}));
        } else {
          PanlinCap.bodyRegion.show(new TeamsView({collection: collection}));
          collection.fetch();
        }
      }
    };
  })();

  Team.Controller = teamController; 
});
