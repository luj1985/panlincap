PanlinCap.module('Team', function(Team, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Shared = PanlinCap.module('Layout.Sidebar');

  var slogan = [
      { text : '合伙人', link : '/team/top' }, 
      { text : '核心团队', link : '/team/bottom' }
    ];

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
    onRender : function() {
      var model = this.model;
      this.$el.click(function() {
        PanlinCap.dialogRegion.show(new MemberView({model : model}));
      });
    }
  });

  var TeamsView = Marionette.CollectionView.extend({
    className : 'teams',
    childView : TeamView,
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

  var teamController = {
    showTeam :function() {
      var members = PanlinCap.reqres.request('members:fetch');
      PanlinCap.bodyRegion.show(new TeamLayoutView({collection: members}));
      PanlinCap.execute('showBackground', 'team');
    },
    showTop :function() {
      var members = PanlinCap.reqres.request('members:fetch');
      PanlinCap.bodyRegion.show(new TeamLayoutView({collection: members}));
      PanlinCap.execute('showBackground', 'team');
    },
    showBottom :function() {
      var members = PanlinCap.reqres.request('members:fetch');
      PanlinCap.bodyRegion.show(new TeamLayoutView({collection: members}));
      PanlinCap.execute('showBackground', 'team');
      window.scrollTo(0,document.body.scrollHeight);
    }
  };

  PanlinCap.addInitializer(function() {
    new Marionette.AppRouter({
      appRoutes : {
        'team(/)' : 'showTeam',
        'team/top(/)' : 'showTop',
        'team/bottom(/)' : 'showBottom'
      },
      controller: teamController
    });

  });
});
