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

  var SCROLL_ANIMATION = { duration: 300, easing: 'swing'};

  var teamController = (function() {
    return {
      showTeam : function(subpage, id) {
        PanlinCap.reqres.request('members:fetch').then(function(raw) {
          var members = new Backbone.Collection(raw);
          PanlinCap.bodyRegion.show(new TeamsView({collection: members}));
          if (id) {
            var person = members.get(id);
            PanlinCap.bodyRegion.show(new MemberView({model : person}));
          } else {
            if (subpage === 'partner') {
              $('.viewport .container').animate({scrollTop: 0}, SCROLL_ANIMATION);
            } else if (subpage === 'members') {
              var member = $('.viewport .container .pos-member:first')[0];
              var mm = $(member).offset().top - $('.viewport .container').offset().top;

              $('.viewport .container').animate({scrollTop: mm}, SCROLL_ANIMATION);
            }
          }
        });
        PanlinCap.execute('showBackground', 'team');
      }
    };
  })();

  Team.Controller = teamController; 
});
