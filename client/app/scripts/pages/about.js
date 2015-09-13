PanlinCap.module('About', function(About, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  function renderSubmenu(menuid) {
    var promise = PanlinCap.reqres.request('submenu:fetch', menuid);
    promise.then(function(raw) {
      PanlinCap.subRegion.show(new Layout.SubMenuView({
        collection : new Backbone.Collection(raw)
      }));
    });
  }

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
    showAbout : function() {
      var layout = this.initializeLayout();
      layout.getRegion('main').empty();

      layout.breadcrumb.show(new Layout.BreadcrumbView({
        collection : new Backbone.Collection([{ text : '关于我们', link : '#/about' }]) 
      }));

      renderSubmenu(2);
      PanlinCap.vent.trigger('reveal:hide');
    },
    showAboutPanlin : function() {
      var layout = this.initializeLayout();

      layout.breadcrumb.show(new Layout.BreadcrumbView({
        collection : new Backbone.Collection([
          { text : '关于我们', link : '#/about' }, 
          { text : '关于磐霖', link : '#/about/panlin'}
        ])
      }));

      renderSubmenu(2);
      renderDeclaration(layout, 'introduction');
    },
    showAdvantage : function() {
      var layout = this.initializeLayout();
      layout.breadcrumb.show(new Layout.BreadcrumbView({ 
        collection : new Backbone.Collection([
          { text : '关于我们', link : '#/about' }, 
          { text : '我们的优势', link : '#/about/advantage'}
        ]) 
      }));

      renderSubmenu(2);
      renderDeclaration(layout, 'advantage');
    }
  });

  PanlinCap.addInitializer(function() {

    var router = new Marionette.AppRouter({
      appRoutes : {
        'about(/)': 'showAbout',
        'about/panlin(/)' : 'showAboutPanlin',
        'about/advantage(/)' : 'showAdvantage'
      },
      controller: new AboutController()
    });

    router.on('route', function(route, params) {
      $('.page').scrollTop(0);
    });

  });
});