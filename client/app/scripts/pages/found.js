PanlinCap.module('PanlinCap.Found', function(Found, PanlinCap, Backbone, Marionette, $, _) {
  'use strict';

  var FoundDialogView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/found-detail.hbs'],
    className : 'panlin dialog',
    serializeModel : function() {
      var data = this.model.toJSON();
      data.fullname = data.fullname || data.name;
      return data;
    },
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
      
      var colors = [ 'rgb(180,6,12)', 'rgb(199,99,103)', 'rgb(178,53,55)', 'rgb(208,145,148)' ];
      PanlinCap.reqres.request('founds:fetch').then(function(raw) {
        _.each(raw, function(found) {
          var portfolio = found.portfolio;
          var status = found.status;
          if (status === 'building') {
            found.statusMsg = '正在募集成立中';
          }
          if (portfolio) {
            var items = portfolio.split(',');
            found.portfolio = _.map(items, function(item, i) {
              var parts = item.split(':');
              return {
                area : parts[0],
                percentage : parseInt(parts[1]),
                color : colors[i]
              };
            });
          }
        });
        var founds = new Backbone.Collection(raw);
        PanlinCap.bodyRegion.show(new FoundView({ collection : founds }));
      });
    }
  };

  Found.Controller = foundController;
});