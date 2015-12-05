PanlinCap.module('Navigation', function(Navigation, PanlinCap, Backbone, Marionette) {
  'use strict';

  var MenuModel = Backbone.Model.extend({
    defaults : { parent : null }
  });

  var MenuCollection = Backbone.Collection.extend({
    model : MenuModel,
    url : '/api/menus'
  });

  var collection = new MenuCollection();
  collection.fetch();

  PanlinCap.on('language', function() {
    // reload menu with other language.
    collection.fetch();
  });

  PanlinCap.reqres.setHandler('menus:fetch', function() {
    return collection;
  });

  var MenuView = Marionette.ItemView.extend({
    template: Handlebars.compile('{{#each items}}<a href="#{{link}}">{{title}}</a>{{/each}}'),
    className: 'menus',
    initialize : function() {
      this.listenTo(this.collection, 'sync', this.render);
    },
    serializeData : function() {
      var menus = this.collection.filter(function(d) {
        return !d.get('parent');
      });
      var models = _.map(menus, function(m) { return m.toJSON(); });
      return {items : models};
    }
  });

  var HeaderView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/header.hbs'],
    events : {
      'click .lang' : function(e) {
        e.preventDefault();
        var lang = $(e.target).data('lang');
        var current = $.cookie('lang');
        // or disable language selection button.
        if (lang !== current) {
          $.cookie('lang', lang, { expires: 365 });
          PanlinCap.trigger('language', lang);
        }
      }
    }
  });

  PanlinCap.addInitializer(function() {
    PanlinCap.headerRegion.show(new HeaderView());
    PanlinCap.navRegion.show(new MenuView({ collection : collection }));

    $('.mobile.menu.trigger').click(function() {
      $('body').toggleClass('push');
    });

    $('#header').on('click', 'a.back', function(e) {
      e.preventDefault();
      window.history.back();
    });

    $('#navigation').on('click', 'a', function() {
      $('body').removeClass('push');
    });

    $('#dimmer').on('click', function() {
      $('body').removeClass('push');
    });
  });
});