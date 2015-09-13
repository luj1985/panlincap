PanlinCap.module('PanlinCap.Contact', function(Contact, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  var BizPlanView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/contact/plan.hbs'],
    className : 'main-container plan'
  });

  var HTMLView = Marionette.ItemView.extend({
    template : Handlebars.compile('{{{body}}}'),
    className : 'main-container plan'
  });
  
  var ContactController = Layout.MainRegionController.extend({
    background: 'contact',
    showContacts : function(subpage, id) {
      var layout = this.initializeLayout({className : 'sidebar-layout content'});
      layout.getRegion('main').empty();
      
      var name = id || subpage;
      if (name) {
        if (name === 'plan') {
          layout.main.show(new BizPlanView());
        } else {
          PanlinCap.reqres.request('declaration:fetch', name).then(function(raw) {
            var model = new Backbone.Model(raw);
            layout.main.show(new HTMLView({ model : model }));
          });
        }
      }
    }
  });

  Contact.Controller = new ContactController();
});
