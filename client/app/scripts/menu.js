PanlinCap.module('PanlinCap.Menu', function(Menu, PanlinCap, Backbone, Marionette, $, _) {
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

  PanlinCap.reqres.setHandler('menus:fetch', function(parentid) {
    return collection;
  });
});