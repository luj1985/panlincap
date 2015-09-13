PanlinCap.module('PanlinCap.Layout', function(Layout, PanlinCap, Backbone, Marionette) {
  'use strict';

  Layout.SidebarLayoutView = Marionette.LayoutView.extend({
    template : Handlebars.compile('<main id="main"></main>'),
    className : 'sidebar-layout',
    regions : {
      main : '#main'
    }
  });

  Layout.MainRegionController = Marionette.Controller.extend({
    initializeLayout : function(options) {
      var background = this.getOption('background');
      
      if (!this.layout || (this.layout && this.layout.isDestroyed)) {
        this.layout = new Layout.SidebarLayoutView(options); 
        PanlinCap.bodyRegion.show(this.layout);

        if (background) {
          PanlinCap.execute('showBackground', background);
        }
      }
      return this.layout;
    }
  });
});