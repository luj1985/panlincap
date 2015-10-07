PanlinCap.module('PanlinCap.Reveal', function(Reveal, PanlinCap, Backbone) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  var RevealController = {
    showRevealPage : function(subpage, module, fragment) {
      PanlinCap.execute('showBackground', module);
      if (!subpage) {
        PanlinCap.bodyRegion.empty();
        PanlinCap.vent.trigger('reveal:hide');
        return;
      }

      PanlinCap.reqres.request('declaration:fetch', subpage).then(function(raw) {
        raw.back = fragment;
        PanlinCap.bodyRegion.show(new Layout.RevealView({ model : new Backbone.Model(raw) }));
        PanlinCap.vent.trigger('reveal:active');
      });
    }
  };

  Reveal.Controller = RevealController;
});