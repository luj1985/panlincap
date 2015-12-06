PanlinCap.module('PanlinCap.Share', function(Share, PanlinCap, Backbone, Marionette) {
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


  Share.ScrollView = Marionette.CompositeView.extend({
    template : PanlinCapTpl['templates/scroll-indicator.hbs'],
    childViewContainer : '.collection',
    onRender : function() {
      var $wrapper = $('.viewport .container');
      function startScrollUp() {
        $wrapper.animate({scrollTop: '-=50'}, 'normal', 'linear', startScrollUp);
      }
      function startScrollDown() {
        $wrapper.animate({scrollTop: '+=50'}, 'normal', 'linear', startScrollDown); 
      }
      function stopScrolling() {
        $wrapper.stop();
      }
      this.$('.scroll.up').mousedown(startScrollUp).mouseup(stopScrolling);
      this.$('.scroll.down').mousedown(startScrollDown).mouseup(stopScrolling);
    },
    events : {
      'click .scroll.up' : function(e) {
        e.preventDefault();
      },
      'click .scroll.down' : function(e) {
        e.preventDefault();
      }
    }
  });


  Share.RevealView = Marionette.ItemView.extend({
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
      this.listenTo(this.model, 'sync', this.render);
      this.listenTo(PanlinCap, 'language', function() {
        this.model.reload();
      });
    },
    hideView : function() {
      this.$el.removeClass('active');
    },
    revealView : function () {
      this.$el.addClass('active');
    }
  });
});