PanlinCap.module('PanlinCap.About', function(About, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  function renderDeclaration(layout, name) {
    var promise = PanlinCap.reqres.request('declaration:fetch', name);
    promise.then(function(raw) {
      raw.back = '#/about';
      layout.main.show(new Layout.RevealView({ model : new Backbone.Model(raw) }));

      PanlinCap.vent.trigger('reveal:active');
    });
  }

  var AboutController = Layout.MainRegionController.extend({
    background : 'about',
    showAbout : function(sub) {
      var layout = this.initializeLayout();
      layout.getRegion('main').empty();

      layout.breadcrumb.show(new Layout.BreadcrumbView({
        collection : new Backbone.Collection([{ text : '关于我们', link : '#/about' }]) 
      }));

      PanlinCap.subRegion.loadMenu(2);

      if (!sub) {
        PanlinCap.vent.trigger('reveal:hide');
        return;
      }

      renderDeclaration(layout, sub);
      
      if (sub === 'panlin') {
        layout.breadcrumb.show(new Layout.BreadcrumbView({
          collection : new Backbone.Collection([
            { text : '关于我们', link : '#/about' }, 
            { text : '关于磐霖', link : '#/about/panlin'}
          ])
        }));
      } else if (sub === 'advantage') {
        layout.breadcrumb.show(new Layout.BreadcrumbView({ 
          collection : new Backbone.Collection([
            { text : '关于我们', link : '#/about' }, 
            { text : '我们的优势', link : '#/about/advantage'}
          ]) 
        }));
      }
    }
  });

  About.Controller = new AboutController();
});