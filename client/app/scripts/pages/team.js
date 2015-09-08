PanlinCap.module('Team', function(Team, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Shared = PanlinCap.module('Layout.Sidebar');

  var slogan = [
    { text : '合伙人', link : '#/team/partner' }, 
    { text : '核心团队', link : '#/team/members' }
  ];

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

  var TeamsView = Shared.ScrollView.extend({
    template : PanlinCapTpl['templates/team/container.hbs'],
    childView : TeamView,
    childViewContainer : '.teams'
  });

  var TeamLayoutView = Shared.SidebarLayoutView.extend({
    onBeforeShow : function() {
      var self = this;

      var promise = PanlinCap.reqres.request('members:fetch');
      promise.then(function(raw) {
        var members = new Backbone.Collection(raw);
        self.main.show(new TeamsView({collection : members}));
      });
      this.breadcrumb.show(new Shared.BreadcrumbView({
        collection : new Backbone.Collection([{ text : '核心团队', link : '#/team' }])
      }));

      PanlinCap.subRegion.show(new Shared.SidebarView({
        collection : new Backbone.Collection(slogan)
      }));
    }
  });

  var teamController = (function() {
    return {
      showTeam : function() {
        var promise = PanlinCap.reqres.request('members:fetch');
        promise.then(function(raw) {
          var members = new Backbone.Collection(raw);
          PanlinCap.bodyRegion.show(new TeamLayoutView({collection: members}));
        });
        PanlinCap.execute('showBackground', 'team');
      },
      showPartner :function() {
        this.showTeam();
        $('.page').animate({scrollTop: 0}, { duration: 300, easing: 'swing'});
      },
      showMembers :function() {
        this.showTeam();
        $('.page').animate({scrollTop: 640}, { duration: 300, easing: 'swing'});
      }
    };
  })();

  PanlinCap.addInitializer(function() {
    var router = new Marionette.AppRouter({
      appRoutes : {
        'team(/)' : 'showTeam',
        'team/partner(/)' : 'showPartner',
        'team/members(/)' : 'showMembers'
      },
      controller: teamController
    });

    router.on('route', function(route, params) {
      $('.page').scrollTop(0);
    });

  });
});
