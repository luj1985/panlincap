PanlinCap.module('Background', function(Background, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeBg = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home/homebg.hbs'],
    className: 'slides home'
  });

  PanlinCap.commands.setHandler('showBackground', function(page) {
    if (page === 'home') {
      PanlinCap.bgRegion.show(new HomeBg());
    }
  });

});