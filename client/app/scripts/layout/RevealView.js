PanlinCap.module('PanlinCap.Layout', function(Layout, PanlinCap, Backbone, Marionette) {
  'use strict';

  Layout.RevealView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '{{{body}}}' + 
      '<a href="{{back}}" class="close">' + 
      '  <i class="fa fa-angle-double-left"></i> 收起' +
      '</a>'
    ),
    className : 'reveal',
    initialize : function() {
      this.listenTo(PanlinCap.vent, 'reveal:active', this.revealView, this);
      this.listenTo(PanlinCap.vent, 'reveal:hide', this.hideView, this);
    },
    hideView : function() {
      this.$el.removeClass('active');
    },
    revealView : function () {
      this.$el.addClass('active');
    }
  });
});