PanlinCap.module('Team', function(Team, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Shared = PanlinCap.module('Layout.Sidebar');

  var slogan = [
      { text : '合伙人', link : '/team/partner' }, 
      { text : '核心团队', link : '/team/members' }
    ];

  var MemberView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team/member.hbs'],
    className : 'ui panlin modal',
    events : {
      'click a.dialog-close' : function(e) {
        e.preventDefault();
        this.$el.modal('hide');
      }
    },
    onShow : function() {
      this.$el.modal('show');
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

  var TeamsView = Shared.ScrollView.extend({
    template : PanlinCapTpl['templates/team/container.hbs'],
    childView : TeamView,
    childViewContainer : '.teams'
  });

  var TeamLayoutView = Shared.SidebarLayoutView.extend({
    onBeforeShow : function() {
      var members = PanlinCap.reqres.request('members:fetch');
      this.showChildView('main', new TeamsView({collection : members}));
      this.showChildView('sidebar', new Shared.SideMenuView({
        collection : new Backbone.Collection(slogan)
      }));
      this.showChildView('breadcrumb', new Shared.BreadcrumbView({
        collection : new Backbone.Collection([{ text : '核心团队', link : '/team' }])
      }));
    }
  });

  var teamController = (function() {
    return {
      showTeam : function() {
        var members = PanlinCap.reqres.request('members:fetch');
        PanlinCap.bodyRegion.show(new TeamLayoutView({collection: members}));
        PanlinCap.execute('showBackground', 'team');
      },
      showPartner :function() {
        this.showTeam();
        $('#body').animate({scrollTop: 0}, { duration: 300, easing: 'swing'});
      },
      showMembers :function() {
        this.showTeam();
        $('#body').animate({scrollTop: 640}, { duration: 300, easing: 'swing'});
      }
    };
  })();

  PanlinCap.addInitializer(function() {
    new Marionette.AppRouter({
      appRoutes : {
        'team(/)' : 'showTeam',
        'team/partner(/)' : 'showPartner',
        'team/members(/)' : 'showMembers'
      },
      controller: teamController
    });

  });
});
