PanlinCap.module('Background', function(Background, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeBg = Marionette.ItemView.extend({
    template:  Handlebars.compile(
      '<div class="slide homebg-1 order-1"></div>' + 
      '<div class="slide homebg-2 order-2"></div>' + 
      '<div class="slide homebg-3 order-3"></div>'
    ),
    className: 'slides home',
    onRender : function() {
      var self = this;
      this.handler = setInterval(function() {
        var current = self.$('.slide.order-3');
        var next = self.$('.slide.order-2');

        next.animate({left : '-=100%'}, {
          easing: 'swing',
          duration: 500
        });

        current.animate({ left : '-=100%' }, {
          easing: 'swing',
          duration: 500, 
          complete: function() {
            var last = self.$('.order-3').detach();
            last.insertBefore(self.$('.slide.order-1'));

            self.$('.slide').each(function(i) {
              $(this).removeClass('order-1 order-2 order-3').addClass('order-' + (i + 1)).removeAttr('style');
            });
          }
        });
      }, 5000);
    },
    onDestroy : function() {
      clearInterval(this.handler);
    }
  });

  var SingleBackground = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '<div class="slide"></div>' + 
      '<div class="revealbg {{ cls }}"></div>'
    ),
    initialize : function(cfg) {
      this.listenTo(PanlinCap.vent, 'reveal:active', this.revealView, this);
      this.listenTo(PanlinCap.vent, 'reveal:hide', this.hideView, this);
      this.cfg = cfg;
    },
    serializeData : function() {
      return this.cfg.actived ? { 'cls' : 'active' } : {};
    },
    hideView : function() {
      this.$('.revealbg').removeClass('active');
    },
    revealView : function () {
      this.$('.revealbg').addClass('active');
    }
  });

  PanlinCap.commands.setHandler('showBackground', function(page) {
    switch (page) {
      case 'home': 
        PanlinCap.bgRegion.show(new HomeBg()); 
        break;
      case 'about':
      case 'invest':
        PanlinCap.bgRegion.show(new SingleBackground({ 
          className: ['slides', page].join(' '), 
          actived : $('.revealbg').hasClass('active')
        })); 
        break;
      case 'team':
      case 'found':
      case 'news':
      case 'contact':
      case 'cases':
        PanlinCap.bgRegion.show(new SingleBackground({ 
          className: ['slides', page].join(' ')
        })); 
        break;
    }
  });

});