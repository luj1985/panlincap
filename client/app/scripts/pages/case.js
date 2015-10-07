PanlinCap.module('PanlinCap.Case', function(Case, PanlinCap, Backbone, Marionette, $, _) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  var CaseView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '<div class="brand-logo">' +
      '<div class="logo"></div>' + 
      '<p>{{name}}</p>' + 
      '</div>'
    ),
    className : 'brand column',
    onRender : function() {
      var model = this.model;
      this.$el.on('click', function() {
        var dialog = new CaseDialogView({model : model});
        PanlinCap.dialogRegion.show(dialog);
      });

      this.$('.logo').css('background-image', 'url(' + this.model.get('logo') + ')');
    }
  });

  var CaseDialogView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/case/case.hbs'],
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

  var CasesView = Marionette.CompositeView.extend({
    template : PanlinCapTpl['templates/case/case-group.hbs'],
    childView : CaseView,
    childViewContainer : '.brands',
    className : 'case-group',
    tagName : 'section',
    initialize : function() {
      this.collection = new Backbone.Collection(this.model.get('brands'));
    }
  });

  var CasesCollectionView = Layout.ScrollView.extend({
    template : PanlinCapTpl['templates/case/container.hbs'],
    childView : CasesView,
    childViewContainer : '.main-container.cases'
  });

  var casesController = {
    showCases: function() {
      var promise = PanlinCap.reqres.request('cases:fetch');
      promise.then(function(raw) {
        var data = _.chain(raw).groupBy('area').map(function(brands, area) {
          return { area : area, brands : brands };
        }).value();

        var cases = new Backbone.Collection(data);
        PanlinCap.bodyRegion.show(new CasesCollectionView({ collection : cases }));
      });
      PanlinCap.execute('showBackground', 'cases');
    }
  };

  Case.Controller = casesController;
});