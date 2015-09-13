PanlinCap.module('PanlinCap.About', function(About, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');


  var AboutController = Layout.MainRegionController.extend({
    background : 'about',
    showAbout : function(sub) {
      var layout = this.initializeLayout();
      layout.getRegion('main').empty();

      if (!sub) {
        PanlinCap.vent.trigger('reveal:hide');
        return;
      }
      var promise = PanlinCap.reqres.request('declaration:fetch', sub);
      promise.then(function(raw) {
        raw.back = '#/about';
        layout.main.show(new Layout.RevealView({ model : new Backbone.Model(raw) }));
        PanlinCap.vent.trigger('reveal:active');
      });
    }
  });

  About.Controller = new AboutController();
});