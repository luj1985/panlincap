PanlinCap.module('Layout.Sidebar', function(Sidebar, PanlinCap, Backbone, Marionette) {
  'use strict';


  Sidebar.SidebarLayoutView = Marionette.LayoutView.extend({
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

  Sidebar.MainRegionController = Marionette.Controller.extend({
    initializeLayout : function(options) {
      var background = this.getOption('background');
      if (!background) {
        throw new Error('must assign background');
      }
      if (!this.layout || (this.layout && this.layout.isDestroyed)) {
        this.layout = new Sidebar.SidebarLayoutView(options); 
        PanlinCap.bodyRegion.show(this.layout);
        PanlinCap.execute('showBackground', background);
      }
      return this.layout;
    }
  });
});