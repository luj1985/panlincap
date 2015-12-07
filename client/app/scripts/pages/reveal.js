PanlinCap.module('PanlinCap.Reveal', function(Reveal, PanlinCap, Backbone) {
  'use strict';

  var Lang = PanlinCap.module('PanlinCap.Lang');

  var RevealView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '{{{body}}}' + 
      '<a href="{{back}}" class="close">' + 
      '  <i class="fa fa-angle-double-left"></i> {{collapse}}' +
      '</a>'
    ),
    className : 'reveal',
    initialize : function() {
      this.listenTo(PanlinCap.vent, 'reveal:active', this.revealView, this);
      this.listenTo(PanlinCap.vent, 'reveal:hide', this.hideView, this);
      this.listenTo(this.model, 'sync', this.render);
      this.listenTo(PanlinCap, 'language', function() {
        this.model.reload();
      });
    },
    serializeData : function() {
      var data = Marionette.ItemView.prototype.serializeData.apply(this, arguments);
      data.collapse = Lang.getLabel('collapse');
      return data;
    },
    hideView : function() {
      this.$el.removeClass('active');
    },
    revealView : function () {
      this.$el.addClass('active');
    }
  });
  var RevealModel = Backbone.Model.extend({
    load : function(name, back) {
      this.name = name;
      this.back = back;
      return this.reload();
    },
    reload : function() {
      return this.fetch({ url : '/api/declaration/' + this.name });
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

      PanlinCap.bodyRegion.show(new RevealView({ model : model }));
      model.load(subpage, fragment).then(function() {
        PanlinCap.vent.trigger('reveal:active');
      });
    }
  };

  Reveal.Controller = RevealController;
});