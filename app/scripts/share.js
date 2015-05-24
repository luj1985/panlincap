PanlinCap.module('Share', function(Share, PanlinCap, Backbone, Marionette) {
  'use strict';

  var PARTITION = .3;

  Share.SplitView = Marionette.ItemView.extend({
    onShow : function () {
      var width = $(window).width();
      var size = this.$el.width();
      var reveal = this.$('.reveal');
      var margin = (width - size) / 2;
      var left = (width * PARTITION) - margin;
      reveal.css('left', left + 'px');
    },
    toggleReveal : function() {
      this.$('.reveal').toggleClass('active');
    },
    triggers : {
      'click .topic.detail' : 'expand'
    }
  });


  Share.SplitBgView = Marionette.ItemView.extend({
    updateSeparation : function() {
      
      var width = $(window).width(),
          height = $(window).height();
      var left = this.$('.left'),
          right = this.$('.right');

      left.css('clip', 'rect(0px,' + width * PARTITION + 'px,' + height + 'px,0px)');
      right.css('clip', 'rect(0px,' + width + 'px,' + height + 'px,' + width * PARTITION+ 'px)');
    },
    toggleSplit : function() {
      this.$('.right').toggleClass('split');
    },
    initialize : function() {
      $(window).on('resize', this.updateSeparation);
    },
    onRender : function() {
      this.updateSeparation();
    },
    onDestroy : function() {
      $(window).off('reisze', this.updateSeparation);
    }
  });
});