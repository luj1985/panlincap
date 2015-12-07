PanlinCap.module('PanlinCap.Found', function(Found, PanlinCap, Backbone, Marionette, $, _) {
  'use strict';

  var colors = [ 'rgb(180,6,12)', 'rgb(199,99,103)', 'rgb(178,53,55)', 'rgb(208,145,148)' ];

  var messages = {
    zh : {
      name : "基金名称：",
      period : "投资周期：",
      company : "投资项目：",
      distribution : "投资行业分布："
    },
    en : {
      name : "Fund Name:",
      period : "Investment Period:",
      company : "Invested Companies:",
      distribution : "Industry Distribution:"
    }
  };

  var FoundModel = Backbone.Model.extend({
    toJSON : function() {

      var data = Backbone.Model.prototype.toJSON.apply(this, arguments);
      var portfolio = data.portfolio;
      if (portfolio) {
        var items = portfolio.split(',');
        data.portfolio = _.map(items, function(item, i) {
          var parts = item.split(':');
          return {
            area : parts[0],
            percentage : parseInt(parts[1]),
            color : colors[i]
          };
        });
      }

      var lang = $.cookie('lang');
      var message = messages[lang];

      data.labels = message;
      data.fullname = data.fullname || data.name;
      return data;
    }
  });
  
  var FoundColleciton = Backbone.Collection.extend({
    model : FoundModel,
    url : '/api/founds'
  });

  var collection = new FoundColleciton();

  var FoundDialogView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/found-detail.hbs'],
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

  var FoundView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/found-collection.hbs'],
    className: 'founds',
    initialize : function() {
      this.listenTo(this.collection, 'sync', this.render);
      this.listenTo(PanlinCap, 'language', function() {
        collection.fetch();
      });
    },
    onRender : function(e) {
      var collection = e.collection;
      this.$el.on('click', '.found', function() {
        var index = $(this).data('index');
        var model = collection.get(index);
        var dialog = new FoundDialogView({model : model});
        PanlinCap.dialogRegion.show(dialog);
      });
    }
  });

  var foundController = {
    showFounds: function() {
      PanlinCap.subRegion.empty();
      PanlinCap.execute('showBackground', 'found');
      PanlinCap.bodyRegion.show(new FoundView({ collection : collection }));
      collection.fetch();
    }
  };

  Found.Controller = foundController;
});