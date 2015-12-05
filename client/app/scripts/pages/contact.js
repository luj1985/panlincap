PanlinCap.module('PanlinCap.Contact', function(Contact, PanlinCap, Backbone, Marionette) {
  'use strict';

  var DeclareModel = Backbone.Model.extend({ 
    load : function(name) {
      this.name = name;
      this.reload();
    },
    reload : function() {
      var name = this.name;
      this.fetch({ url : '/api/declaration/' + name });
    }
  });

  var model = new DeclareModel();

  var BizPlanView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/business-plan.hbs'],
    className : 'main plan'
  });

  var HTMLView = Marionette.ItemView.extend({
    template : Handlebars.compile('{{{body}}}'),
    className : 'main plan',
    initialize : function() {
      this.listenTo(this.model, 'sync', this.render);
      this.listenTo(PanlinCap, 'language', function() {
        this.model.reload();
      });
    }
  });
  
  var ContactController = {
    showContacts : function(subpage, id) {
      PanlinCap.bodyRegion.empty();
      PanlinCap.execute('showBackground', 'contact');
      var name = id || subpage;
      if (name) {
        if (name === 'plan') {
          PanlinCap.bodyRegion.show(new BizPlanView());
        } else {
          PanlinCap.bodyRegion.show(new HTMLView({ model : model }));
          model.load(name);
        }
      } else {
        PanlinCap.bodyRegion.empty();
      }
    }
  };

  Contact.Controller = ContactController;
});
