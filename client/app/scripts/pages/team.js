PanlinCap.module('PanlinCap.Team', function(Team, PanlinCap, Backbone, Marionette) {
  'use strict';

  var MemberCollection = Backbone.Collection.extend({
    model : Backbone.Model,
    url : '/api/members'
  });

  var collection = new MemberCollection();

  var Share = PanlinCap.module('PanlinCap.Share'),
      Lang = PanlinCap.module ('PanlinCap.Lang');

  var promise;

  function buildFullName(json) {
    var lang = Lang.getLanguage();
    var data = json || {};
    if (lang === 'zh') {
      data.fullname = data.name + '  ' + Lang.getLabel(data.suffix);
    } else {
      data.fullname = Lang.getLabel(data.suffix) + '  ' + data.name;
    }
    return data;
  }

  var MemberDialogView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team/memberdialog.hbs'],
    className : 'panlin dialog',
    serializeData : function() {
      var data = Marionette.ItemView.prototype.serializeData.apply(this, arguments);
      return buildFullName(data);
    },
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
    className : 'panlin member',
    initialize : function(args) {
      this.selected = args.selected;
      this.listenTo(PanlinCap, 'language', function() {
        promise = collection.fetch();
      });
      this.listenTo(this.collection, 'sync', this.render);
    },
    serializeData : function() {
      var id = this.selected;
      var person = collection.get(id);
      var data = person ? person.toJSON()  : {};

      return buildFullName(data);
    }
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
      this.listenTo(this.collection, 'sync', this.render);
      this.listenTo(PanlinCap, 'language', function() {
        promise = collection.fetch();
      });
    }
  });

  var teamController = (function() {
    return {
      showTeam : function(id) {
        PanlinCap.subRegion.empty();
        PanlinCap.execute('showBackground', 'team');

        if (!promise) {
          promise = collection.fetch();
        }

        if (id) {
          PanlinCap.bodyRegion.show(new MemberView({selected : id, collection : collection}));
        } else {
          PanlinCap.bodyRegion.show(new TeamsView({collection: collection}));
        }
      }
    };
  })();

  Team.Controller = teamController; 
});
