PanlinCap.module('Share', function(Share, PanlinCap, Backbone, Marionette) {
  'use strict';

  var CONTENT_WIDTH = 960;

  Share.SplitView = Marionette.ItemView.extend({
    toggleReveal : function() {
      this.$('.reveal').toggleClass('active');
    },
    triggers : {
      'click .topic.detail' : 'expand',
      'click .close' : 'expand'
    }
  });


  Share.SplitBgView = Marionette.ItemView.extend({
    updateSeparation : function() {
      var width = $(window).width(),
          height = $(window).height();
      var left = this.$('.left'),
          right = this.$('.right');

      var marginLeft = (width - CONTENT_WIDTH) / 2;
      var offset = marginLeft + 160;

      left.css('clip', 'rect(0px,' + offset + 'px,' + height + 'px,0px)');
      right.css('clip', 'rect(0px,' + width + 'px,' + height + 'px,' + offset + 'px)');
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