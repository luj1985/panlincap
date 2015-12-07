PanlinCap.module('PanlinCap.Home', function(Home, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeCollection = Backbone.Collection.extend({
    model : Backbone.Model,
    url : '/api/home.json'
  });

  var collection = new HomeCollection();
  var visited = false;

  var Lang = PanlinCap.module('PanlinCap.Lang');

  var HomeView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home.hbs'],
    className: 'topics hide',
    initialize : function(params) {
      this.background = params.background;
      this.listenTo(this.collection, 'sync', this.render);
      this.listenTo(PanlinCap, 'language', function() {
        collection.fetch();
      });
    },
    serializeData : function() {
      var data = Marionette.ItemView.prototype.serializeData.apply(this, arguments);
      data.more = Lang.getLabel('more');
      return data;
    },
    onRender : function() {
      var background = this.background,
          self = this;
      if (visited) {
        this.$el.removeClass('hide');  
      } else {
        background.then(function() {
          setTimeout(function() {
            self.$el.removeClass('hide');  
          }, 1000);
        });
        visited = true;
      }
    }
  });

  var homeController = {
    showHome: function() {
      PanlinCap.subRegion.empty();
      var background = PanlinCap.request('showBackground', 'home');

      PanlinCap.bodyRegion.show(new HomeView({ 
        background : background,
        collection : collection 
      }));
      collection.fetch();
    }
  };

  Home.Controller = homeController;
});