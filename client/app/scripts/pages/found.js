PanlinCap.module('Found', function(Found, PanlinCap, Backbone, Marionette) {
  'use strict';

  var FoundView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/found/found.hbs'],
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
    className : 'ui panlin modal',
    events : {
      'click a.dialog-close' : function(e) {
        e.preventDefault();
        this.$el.modal('hide');
      }
    },
    onShow : function() {
      this.$el.modal('show');
    }
  });

  var foundController = {
    showFounds: function() {
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

  PanlinCap.addInitializer(function() {
    new Marionette.AppRouter({
      appRoutes : {
        'founds(/)' : 'showFounds'
      },
      controller: foundController
    });
  });
});