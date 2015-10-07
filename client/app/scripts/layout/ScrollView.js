PanlinCap.module('PanlinCap.Layout', function(Layout, PanlinCap, Backbone, Marionette) {
  'use strict';

  Layout.ScrollView = Marionette.CompositeView.extend({
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
});