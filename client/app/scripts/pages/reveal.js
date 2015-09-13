PanlinCap.module('PanlinCap.Reveal', function(Reveal, PanlinCap, Backbone) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  var RevealController = Layout.MainRegionController.extend({
    showRevealPage : function(subpage, module, fragment) {
      var layout = this.initializeLayout();
      layout.getRegion('main').empty();
      PanlinCap.execute('showBackground', module);

      if (!subpage) {
        PanlinCap.vent.trigger('reveal:hide');
        return;
      }

      PanlinCap.reqres.request('declaration:fetch', subpage).then(function(raw) {
        raw.back = fragment;
        layout.main.show(new Layout.RevealView({ model : new Backbone.Model(raw) }));
        PanlinCap.vent.trigger('reveal:active');
      });
    }
  });

  Reveal.Controller = new RevealController();
});