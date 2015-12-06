PanlinCap.module('Navigation', function(Navigation, PanlinCap, Backbone, Marionette, $, _) {
  'use strict';

  var MenuModel = Backbone.Model.extend({});

  var MenuCollection = Backbone.Collection.extend({
    model : MenuModel,
    url : '/api/menus'
  });

  var fragmentModel = new Backbone.Model({});

  var menuCollection = new MenuCollection();

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

  var MenuView = Marionette.ItemView.extend({
    template: Handlebars.compile('{{#each items}}<a href="#{{link}}">{{title}}</a>{{/each}}'),
    className: 'menus',
    initialize : function() {
      this.listenTo(this.collection, 'sync', this.render);
    },
    serializeData : function() {
      // pick top level menu item.
      var menus = this.collection.filter(function(d) {
        return !d.get('parent');
      });
      var models = _.map(menus, function(m) { return m.toJSON(); });
      return {items : models};
    }
  });

  var BreadcrumbView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '{{#if visible}}' +
      '<a class="section" href="/#">{{home}}</a>' +
      '{{#each items}}' +
      ' <i class="fa fa-chevron-right"></i> ' +
      '<a class="section" href="#{{link}}">{{title}}</a>' +
      '{{/each}}' + 
      '{{/if}}'
    ),
    className : 'breadcrumb',
    initialize : function() {
      this.listenTo(this.collection, 'sync', this.render);
      this.listenTo(this.model, 'change', this.render);
    },
    serializeData : function() {
      var fragment = this.model.get('fragment') || '';
      var collection = this.collection;
      var parts = fragment.split('/');
      var breadcrumbs = [], i, length;

      for (i = 0, length = parts.length; i < length; i++) {
        var path = parts.slice(0, i + 1);
        path.unshift('');

        var entry = collection.findWhere({ link : path.join('/') });
        // “首页”以及”基金管理“页面不需要出现面包屑导航
        if (entry && _.indexOf(['/', '/founds'], entry.get('link')) < 0) {
          breadcrumbs.push(entry.toJSON()); 
        }
      }
      var data = {
        items : breadcrumbs, 
        visible : (breadcrumbs.length > 0)
      };

      var home = collection.findWhere({ link : '/'});
      if (home) {
        data.home = home.get('title');
      }
      return data;
    }
  });

  function fetchMenuItem(collection, link) {
    var entry = collection.findWhere({ link : link });
    if (entry) {
      while (entry.get('parent')) {
        entry = collection.get(entry.get('parent'));
      }
      return entry;
    } else {
      var pos = _.lastIndexOf(link, '/');
      if (pos > 0) {
        link = link.slice(0, pos);
        return fetchMenuItem(collection, link);
      }
    }
    return null;
  }

  var SubMenuView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '{{#each items}}' +
      '{{#if this.param}}' +
        '<li class="search"><input type="search" placeholder="{{title}}"></li>' +
      '{{else}}' +
        '<li><a href="#{{link}}">{{title}}</a></li>' +
      '{{/if}}' +
      '{{/each}}'
    ),
    tagName : 'ul',
    initialize : function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.collection, 'sync', this.render);
    },
    serializeData : function() {
      var fragment = this.model.get('fragment') || '';
      var link = fragment[0] === '/' ? fragment : '/' + fragment;
      var entry = fetchMenuItem(this.collection, link);
      if (entry) {
        var target = this.collection.where({parent : entry.id });
        var items = _.map(target, function(d) { return d.toJSON(); });
        return {items : items };
      } else {
        return {items : []};
      }
    }
  });

  Backbone.history.on('route', function() {
    var fragment = this.getFragment() || '';
    fragmentModel.set('fragment', fragment);
    // the subregion may be destroyed during page switching. 
    // e.g. home page doens't have subRegion defined.
    // So update the region everytime route changed.
    PanlinCap.subRegion.show(new SubMenuView({model : fragmentModel, collection : menuCollection }));
  });

  
  function syncLanguage() {
    var lang = $.cookie('lang') || 'zh';
    $('html').attr('lang', lang);
  }

  PanlinCap.addInitializer(function() {
    PanlinCap.headerRegion.show(new HeaderView());
    PanlinCap.navRegion.show(new MenuView({ collection : menuCollection }));
    PanlinCap.breadcrumbRegion.show(new BreadcrumbView({model : fragmentModel, collection : menuCollection }));

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

    syncLanguage();
  });


  PanlinCap.on('language', function() {
    // reload menu with other language.
    menuCollection.fetch();
    syncLanguage();
  });

  menuCollection.fetch();
});