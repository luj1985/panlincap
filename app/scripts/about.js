PanlinCap.module('About', function(About, PanlinCap, Backbone, Marionette) {
  'use strict';
  var PARTITION = .3;

  var AboutView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/about/about.hbs'],
    className: 'description about',
    onShow : function () {
      var width = $(window).width();
      var size = this.$el.width();
      var reveal = this.$('.reveal');
      var margin = (width - size) / 2;
      var left = (width * PARTITION) - margin;
      reveal.css('left', left + 'px');
    },
    toggleReveal : function() {
      this.$('.reveal').toggleClass('active');
    },
    triggers : {
      'click .topic.detail' : 'expand'
    }
  });


  var AboutBgView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/about/aboutbg.hbs'],
    className: 'slides about',
    updateSeparation : function() {
      
      var width = $(window).width(),
          height = $(window).height();
      var left = this.$('.left'),
          right = this.$('.right');

      left.css('clip', 'rect(0px,' + width * PARTITION + 'px,' + height + 'px,0px)');
      right.css('clip', 'rect(0px,' + width + 'px,' + height + 'px,' + width * PARTITION+ 'px)');
    },
    toggleSplit : function() {
      this.$('.right').toggleClass('split');
    },
    initialize : function() {
      $(window).on('resize', this.updateSeparation);
    },
    onRender : function() {
      this.updateSeparation();
    },
    onDestroy : function() {
      $(window).off('reisze', this.updateSeparation);
    }
  });

  var StaticController = Marionette.Controller.extend({
    showAbout: function() {
      var view = new AboutView(), bg = new AboutBgView();
      bg.listenTo(view, 'expand', function() {
        bg.toggleSplit();
        view.toggleReveal();
      })
      PanlinCap.mainRegion.show(view);
      PanlinCap.bgRegion.show(bg);
    }
  });

  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'about(/)': 'showAbout'
      },
      controller: new StaticController()
    });

  });
});