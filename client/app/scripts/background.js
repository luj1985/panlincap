PanlinCap.module('Background', function(Background, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeBg = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home/homebg.hbs'],
    className: 'slides home'
  });

  var SingleBackground = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/revealbg.hbs'],
    initialize : function() {
      this.listenTo(PanlinCap.vent, 'reveal:active', this.revealView, this);
      this.listenTo(PanlinCap.vent, 'reveal:hide', this.hideView, this);
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
      case 'team':
      case 'found':
      case 'news':
      case 'contact':
      case 'cases':
        var cls = ['slides', page].join(' ');
        PanlinCap.bgRegion.show(new SingleBackground({ className: cls })); 
        break;

    }
  });

});