PanlinCap.module('Contact', function(Contact, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Shared = PanlinCap.module('Layout.Sidebar');

  var slogan = [
    { text : '招贤纳士', link : '/contacts/hire' }, 
    { text : '公司地址', link : '/contacts/address' }, 
    { text : '商业计划书', link : '/contacts/plan' }
  ];

  var AddressView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/contact/address.hbs'],
    className : 'main-container address'
  });

  var HireView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/contact/hire.hbs'],
    className : 'main-container'
  });

  var BizPlanView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/contact/plan.hbs'],
    className : 'main-container'
  });
  
  var ContactController = Shared.MainRegionController.extend({
    background: 'contact',
    showContacts : function() {
      var layout = this.initializeLayout();
      layout.getRegion('main').empty();
      layout.showChildView('sidebar', new Shared.SidebarView({ 
        collection : new Backbone.Collection(slogan) 
      }));
      layout.showChildView('breadcrumb', new Shared.BreadcrumbView({ 
        collection : new Backbone.Collection([
          { text : '联系我们', link : '/contacts' 
        }]) 
      }));
    },
    showHire : function() {
      var layout = this.initializeLayout();
      layout.showChildView('sidebar', new Shared.SidebarView({ collection : new Backbone.Collection(slogan) }));
      layout.showChildView('breadcrumb', new Shared.BreadcrumbView({
        collection : new Backbone.Collection([
          { text : '联系我们', link : '/contacts' }, 
          { text : '招贤纳士', link : '/contacts/hire'}
        ])
      }));
      layout.showChildView('main', new HireView());
    },
    showAddress : function() {
      var layout = this.initializeLayout();
      layout.showChildView('sidebar', new Shared.SidebarView({ collection : new Backbone.Collection(slogan) }));
      layout.showChildView('breadcrumb', new Shared.BreadcrumbView({
        collection : new Backbone.Collection([
          { text : '联系我们', link : '/contacts' }, 
          { text : '公司地址', link : '/contacts/address'}
        ])
      }));
      layout.showChildView('main', new AddressView());
    },
    showPlan : function() {
      var layout = this.initializeLayout();
      layout.showChildView('sidebar', new Shared.SidebarView({ collection : new Backbone.Collection(slogan) }));
      layout.showChildView('breadcrumb', new Shared.BreadcrumbView({
        collection : new Backbone.Collection([
          { text : '联系我们', link : '/contacts' }, 
          { text : '商业计划书', link : '/contacts/plan'}
        ])
      }));
      layout.showChildView('main', new BizPlanView());
    }
  });

  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'contacts(/)': 'showContacts',
        'contacts/hire(/)' : 'showHire',
        'contacts/address(/)' : 'showAddress',
        'contacts/plan(/)' : 'showPlan'
      },
      controller: new ContactController()
    });

  });
});
