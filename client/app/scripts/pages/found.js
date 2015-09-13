PanlinCap.module('PanlinCap.Found', function(Found, PanlinCap, Backbone, Marionette) {
  'use strict';

  var FoundView = Marionette.ItemView.extend({
    template: Handlebars.compile(
      '<div class="inner">' +
      '<h3>{{issue}}</h3>' +
      '<h4>{{name}}</h4>' + 
      '</div>'
    ),
    className: 'found',
    onRender : function() {
      var model = this.model;
      this.$el.on('click', function() {
        var dialog = new FoundDialogView({model : model});
        PanlinCap.dialogRegion.show(dialog);
      });
    }
  });

  var FoundCollectionView = Marionette.CollectionView.extend({
    childView : FoundView,
    className : 'founds'
  });

  var FoundDialogView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/found/dialog.hbs'],
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

  var foundController = {
    showFounds: function() {
      PanlinCap.subRegion.empty();
      
      var promise = PanlinCap.reqres.request('founds:fetch');
      var colors = [ 'rgb(180,6,12)', 'rgb(199,99,103)', 'rgb(178,53,55)', 'rgb(208,145,148)' ];
      promise.then(function(raw) {
        var data = _.map(raw, function(found) {
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
        PanlinCap.bodyRegion.show(new FoundCollectionView({ collection : founds }));
      });
      PanlinCap.execute('showBackground', 'found');
    }
  };

  Found.Controller = foundController;
});