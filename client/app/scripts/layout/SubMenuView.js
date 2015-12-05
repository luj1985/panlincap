PanlinCap.module('PanlinCap.Layout', function(Layout, PanlinCap, Backbone, Marionette, $, _) {
  'use strict';

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

  var submenuModel = new Backbone.Model({
    fragment : ''
  });

  Backbone.history.on('route', function() {
    var fragment = this.getFragment() || '',
        menus = PanlinCap.reqres.request('menus:fetch', null);

    submenuModel.set('fragment', fragment);
    PanlinCap.subRegion.show(new SubMenuView({model : submenuModel, collection : menus }));
  });
});