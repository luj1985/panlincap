PanlinCap.module('Contact', function(Contact, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Shared = PanlinCap.module('Layout.Sidebar');

  var AddressView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/contact/address.hbs'],
    className : 'main-container address'
  });

  var HireView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/contact/hire.hbs'],
    className : 'main-container hire'
  });

  var HireAccoutingView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/contact/accouting.hbs'],
    className : 'main-container hire'
  });

  var HireAssistantView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/contact/assistant.hbs'],
    className : 'main-container hire'
  });

  var BizPlanView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/contact/plan.hbs'],
    className : 'main-container plan'
  });

  function renderSubmenu(menuid) {
    var promise = PanlinCap.reqres.request('submenu:fetch', menuid);
    promise.then(function(raw) {
      PanlinCap.subRegion.show(new Shared.SidebarView({
        collection : new Backbone.Collection(raw)
      }));
    });
  }
  
  var ContactController = Shared.MainRegionController.extend({
    background: 'contact',
    showContacts : function() {
      var layout = this.initializeLayout({className : 'sidebar-layout content'});
      layout.getRegion('main').empty();

      renderSubmenu(8);
      layout.breadcrumb.show(new Shared.BreadcrumbView({ 
        collection : new Backbone.Collection([
          { text : '联系我们', link : '#/contacts' 
        }]) 
      }));
    },
    showHire : function() {
      var layout = this.initializeLayout({className : 'sidebar-layout content'});

      renderSubmenu(8);

      layout.breadcrumb.show(new Shared.BreadcrumbView({
        collection : new Backbone.Collection([
          { text : '联系我们', link : '#/contacts' }, 
          { text : '招贤纳士', link : '#/contacts/hire'}
        ])
      }));
      layout.main.show(new HireView());
    },
    showHireAccounting : function() {
      var layout = this.initializeLayout({className : 'sidebar-layout content'});

      renderSubmenu(8);

      layout.breadcrumb.show(new Shared.BreadcrumbView({
        collection : new Backbone.Collection([
          { text : '联系我们', link : '#/contacts' }, 
          { text : '招贤纳士', link : '#/contacts/hire'},
          { text : '会计', link : '#/contacts/hire/accouting' }
        ])
      }));
      layout.main.show(new HireAccoutingView());
    },
    showHireAssistant : function() {
      var layout = this.initializeLayout({className : 'sidebar-layout content'});

      renderSubmenu(8);

      layout.breadcrumb.show(new Shared.BreadcrumbView({
        collection : new Backbone.Collection([
          { text : '联系我们', link : '#/contacts' }, 
          { text : '招贤纳士', link : '#/contacts/hire'},
          { text : '行政助理', link : '#/contacts/hire/accouting' }
        ])
      }));
      layout.main.show(new HireAssistantView());
    },
    showAddress : function() {
      var layout = this.initializeLayout({className : 'sidebar-layout content'});
      
      renderSubmenu(8);

      layout.breadcrumb.show(new Shared.BreadcrumbView({
        collection : new Backbone.Collection([
          { text : '联系我们', link : '#/contacts' }, 
          { text : '公司地址', link : '#/contacts/address'}
        ])
      }));
      layout.main.show(new AddressView());
    },
    showPlan : function() {
      var layout = this.initializeLayout({className : 'sidebar-layout content'});
      
      renderSubmenu(8);

      layout.breadcrumb.show(new Shared.BreadcrumbView({
        collection : new Backbone.Collection([
          { text : '联系我们', link : '#/contacts' }, 
          { text : '商业计划书', link : '#/contacts/plan'}
        ])
      }));
      layout.main.show(new BizPlanView());
    }
  });

  PanlinCap.addInitializer(function() {

    var router = new Marionette.AppRouter({
      appRoutes : {
        'contacts(/)': 'showContacts',
        'contacts/hire(/)' : 'showHire',
        'contacts/hire/accouting(/)' : 'showHireAccounting',
        'contacts/hire/assistant(/)' : 'showHireAssistant',
        'contacts/address(/)' : 'showAddress',
        'contacts/plan(/)' : 'showPlan'
      },
      controller: new ContactController()
    });

    router.on('route', function(route, params) {
      $('.page').scrollTop(0);
    });

  });
});
