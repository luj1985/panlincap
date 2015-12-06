PanlinCap.module('PanlinCap.Investee', function(Case, PanlinCap, Backbone, Marionette, $, _) {
  'use strict';

  var Share = PanlinCap.module('PanlinCap.Share');

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
    className : 'cases main'
  });

  var casesController = {
    showCases: function() {
      PanlinCap.bodyRegion.empty();
      PanlinCap.execute('showBackground', 'cases');
      PanlinCap.reqres.request('investees:fetch').then(function(raw) {
        var data = _.chain(raw).groupBy('area').map(function(brands, area) {
          return { area : area, brands : brands };
        }).value();

        var cases = new Backbone.Collection(data);
        PanlinCap.bodyRegion.show(new CasesCollectionView({ collection : cases }));
      });
    }
  };

  Case.Controller = casesController;
});