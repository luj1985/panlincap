PanlinCap.module('Background', function(Background, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeBg = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home/homebg.hbs'],
    className: 'slides home'
  });

  var SingleBackground = Marionette.ItemView.extend({
    initialize : function() {
      this.listenTo(PanlinCap.vent, 'reveal', this.revealView, this);
    },
    revealView : function () {
      this.$('.revealbg').toggleClass('active');
    },
    template : PanlinCapTpl['templates/revealbg.hbs']
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
        var cls = ['slides', page].join(' ');
        PanlinCap.bgRegion.show(new SingleBackground({ className: cls })); 
        break;

    }
  });

});