PanlinCap.module('PanlinCap.Contact', function(Contact, PanlinCap, Backbone, Marionette) {
  'use strict';

  var BizPlanView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/business-plan.hbs'],
    className : 'main plan'
  });

  var HTMLView = Marionette.ItemView.extend({
    template : Handlebars.compile('{{{body}}}'),
    className : 'main plan'
  });
  
  var ContactController = {
    showContacts : function(subpage, id) {
      PanlinCap.execute('showBackground', 'contact');
      var name = id || subpage;
      if (name) {
        if (name === 'plan') {
          PanlinCap.bodyRegion.show(new BizPlanView());
        } else {
          PanlinCap.reqres.request('declaration:fetch', name).then(function(raw) {
            var model = new Backbone.Model(raw);
            PanlinCap.bodyRegion.show(new HTMLView({ model : model }));
          });
        }
      } else {
        PanlinCap.bodyRegion.empty();
      }
    }
  };

  Contact.Controller = ContactController;
});
