PanlinCap.module('Found', function(Found, PanlinCap, Backbone, Marionette) {
  'use strict';

  var FoundView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/found/found.hbs'],
    className: 'found'
  });

  var FoundCollectionView = Marionette.CollectionView.extend({
    childView : FoundView,
    className : 'founds'
  });

  var homeController = {
    showFound: function() {
      var founds = PanlinCap.reqres.request('founds:fetch');
      PanlinCap.bodyRegion.show(new FoundCollectionView({ collection : founds }));
      PanlinCap.execute('showBackground', 'found');
    }
  }

  PanlinCap.addInitializer(function() {
    new Marionette.AppRouter({
      appRoutes : {
        'founds(/)' : 'showFound'
      },
      controller: homeController
    });
  });
});