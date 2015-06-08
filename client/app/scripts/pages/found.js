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
    onShow : function() {
      this.$el.modal('show');
    }
  });

  var foundController = {
    showFounds: function() {
      var founds = PanlinCap.reqres.request('founds:fetch');
      PanlinCap.bodyRegion.show(new FoundCollectionView({ collection : founds }));
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