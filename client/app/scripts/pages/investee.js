PanlinCap.module('PanlinCap.Investee', function(Case, PanlinCap, Backbone, Marionette, $, _) {
  'use strict';

  var Share = PanlinCap.module('PanlinCap.Share');

  var Investee = Backbone.Model.extend({});
  var InvesteeCollection = Backbone.Collection.extend({
    model : Investee,
    url : '/api/investees'
  });

  var collection = new InvesteeCollection();

  var CaseView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '<div class="company-logo">' +
      '<div class="logo"></div>' + 
      '<h3>{{name}}</h3>' +
      '<p>{{brief}}</p>' +
      '</div>'
    ),
    className : 'company',
    onRender : function() {
      var model = this.model;
      this.$('.logo').css('background-image', 'url(' + this.model.get('logo') + ')');

      this.$el.on('click', function() {
        var dialog = new CaseDialogView({model : model});
        PanlinCap.dialogRegion.show(dialog);
      });
    }
  });

  var CaseDialogView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/case/case-dialog.hbs'],
    className : 'panlin dialog',
    onShow : function() {
      this.$el.bPopup({ 
        closeClass : 'close',
        opacity: 0.3,
        positionStyle: 'fixed',
        amsl : 0
      });
    }
  });

  var InvesteesView = Marionette.CompositeView.extend({
    template : Handlebars.compile(
      '{{#if area}}<h4>{{area}}</h4>{{/if}}' +
      '<div class="companys"></div>'
    ),
    childView : CaseView,
    childViewContainer : '.companys',
    className : 'area',
    tagName : 'section',
    initialize : function() {
      this.collection = new Backbone.Collection(this.model.get('brands'));
    }
  });

  var CasesCollectionView = Share.ScrollView.extend({
    childView : InvesteesView,
    className : 'cases main',
    initialize : function() {
      var collection = this.collection;
      this.listenTo(PanlinCap, 'language', function() {
        collection.fetch();
      });
    }
  });

  var casesController = {
    showCases: function() {
      PanlinCap.bodyRegion.empty();
      PanlinCap.execute('showBackground', 'cases');
      PanlinCap.bodyRegion.show(new CasesCollectionView({ collection : collection }));
      collection.fetch();
    }
  };

  Case.Controller = casesController;
});