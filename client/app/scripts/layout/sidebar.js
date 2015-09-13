PanlinCap.module('PanlinCap.Layout', function(Layout, PanlinCap, Backbone, Marionette) {
  'use strict';

  Layout.SidebarLayoutView = Marionette.LayoutView.extend({
    template : Handlebars.compile(
      '<nav id="breadcrumb"></nav>' +
      '<main id="main"></main>'
    ),
    className : 'sidebar-layout',
    regions : {
      breadcrumb : '#breadcrumb',
      main : '#main'
    }
  });

  Layout.MainRegionController = Marionette.Controller.extend({
    initializeLayout : function(options) {
      var background = this.getOption('background');
      if (!background) {
        throw new Error('must assign background');
      }
      if (!this.layout || (this.layout && this.layout.isDestroyed)) {
        this.layout = new Layout.SidebarLayoutView(options); 
        PanlinCap.bodyRegion.show(this.layout);
        PanlinCap.execute('showBackground', background);
      }
      return this.layout;
    }
  });
});