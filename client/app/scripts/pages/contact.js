PanlinCap.module('PanlinCap.Contact', function(Contact, PanlinCap, Backbone, Marionette) {
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
    showContacts : function(subpage, id) {
      var layout = this.initializeLayout({className : 'sidebar-layout content'});
      layout.getRegion('main').empty();
      if (id) {
        if (id === 'accouting') {
          layout.main.show(new HireAccoutingView());
        } else if (id === 'assistant') {
          layout.main.show(new HireAssistantView());
        }

      } else {
        if (subpage === 'hire') {
          layout.main.show(new HireView());
        } else if (subpage === 'address') {
          layout.main.show(new AddressView());
        } else if (subpage === 'plan') {
          layout.main.show(new BizPlanView());
        }
      }
    }
  });

  Contact.Controller = new ContactController();
});
