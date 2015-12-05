PanlinCap.module('PanlinCap.Reveal', function(Reveal, PanlinCap, Backbone) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  var RevealModel = Backbone.Model.extend({
    load : function(name, back) {
      this.name = name;
      this.back = back;
      return this.reload();
    },
    reload : function() {
      var name = this.name;
      return this.fetch({ url : '/api/declaration/' + name });
    },
    toJSON : function() {
      var data = Backbone.Model.prototype.toJSON.apply(this, arguments);
      data.back = this.back;
      return data;
    }
  });

  var model = new RevealModel();

  var RevealController = {
    showRevealPage : function(subpage, module, fragment) {
      PanlinCap.execute('showBackground', module);
      if (!subpage) {
        PanlinCap.bodyRegion.empty();
        PanlinCap.vent.trigger('reveal:hide');
        return;
      }

      PanlinCap.bodyRegion.show(new Layout.RevealView({ model : model }));
      model.load(subpage, fragment).then(function() {
        PanlinCap.vent.trigger('reveal:active');
      });
    }
  };

  Reveal.Controller = RevealController;
});