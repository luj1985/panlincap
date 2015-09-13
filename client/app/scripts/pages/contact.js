PanlinCap.module('Contact', function(Contact, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

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
  
  var ContactController = Layout.MainRegionController.extend({
    background: 'contact',
    showContacts : function() {
      var layout = this.initializeLayout({className : 'sidebar-layout content'});
      layout.getRegion('main').empty();

    },
    showHire : function() {
      var layout = this.initializeLayout({className : 'sidebar-layout content'});
      layout.main.show(new HireView());
    },
    showHireAccounting : function() {
      var layout = this.initializeLayout({className : 'sidebar-layout content'});
      layout.main.show(new HireAccoutingView());
    },
    showHireAssistant : function() {
      var layout = this.initializeLayout({className : 'sidebar-layout content'});
      layout.main.show(new HireAssistantView());
    },
    showAddress : function() {
      var layout = this.initializeLayout({className : 'sidebar-layout content'});
      layout.main.show(new AddressView());
    },
    showPlan : function() {
      var layout = this.initializeLayout({className : 'sidebar-layout content'});
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
