PanlinCap.module('Home', function(Home, PanlinCap, Backbone, Marionette) {
  'use strict';

  var HomeView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/home.hbs'],
    className: 'home'
  });

  var backgroundSwitchEffect = 'blinds3d';

  function play() {
    var flux = window.myFlux;
    if (flux) {
      flux.next(backgroundSwitchEffect, { 
        columns: 28,
        delayBetweenBarsX: 150
      });
    }
  }

  var SWITCHER = {
    'blinds3d' : 'slide',
    'slide' : 'blinds3d'
  };

  var MESSAGES = {
    'blinds3d' : '背景切换为百叶窗效果',
    'slide' : '背景切换为滑动效果'
  };

  function switchEffect(e) {
    var code = e.keyCode, ctrl = e.ctrlKey, shift = e.shiftKey;
    if (ctrl && shift && code === 83) {
      var effect = SWITCHER[backgroundSwitchEffect];
      backgroundSwitchEffect = effect;
      window.alert(MESSAGES[effect]);
    }
  };

  var playHandler;

  var HomeBg = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/homebg.hbs'],
    className: 'slides home',
    onShow: function() {
      window.myFlux = new flux.slider('.slides.home', {
        autoplay: false
      });
      playHandler = window.setInterval(play, 10000);

      $(document).on('keydown', switchEffect);
    },
    onDestroy: function() {
      delete window.myFlux;
      $(document).off('keydown', switchEffect);
      clearInterval(playHandler);
    }
  });

  var AboutView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/about.hbs'],
    className: 'description'
  });

  var InvestmentView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/investment.hbs'],
    className: 'description investment',
    events: {
      'click .brief': 'expandTopic'
    },
    expandTopic : function() {
      $('.slides.investment').toggleClass('active');
      $('.description.investment').toggleClass('active');
    }
  });

  var InvestmentBg = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/investmentbg.hbs'],
    tagName: 'ul',
    className: 'slides investment'
  });

  var TeamView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team.hbs'],
    className: 'description'
  });

  var CasesView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/cases.hbs'],
    className: 'description'
  });

  var StaticController = Marionette.Controller.extend({
    showHome: function() {
      PanlinCap.mainRegion.show(new HomeView());
      PanlinCap.bgRegion.show(new HomeBg());
    },
    showInvestMent: function() {
      PanlinCap.mainRegion.show(new InvestmentView());
      PanlinCap.bgRegion.show(new InvestmentBg());
    },
    showAbout: function() {
      PanlinCap.mainRegion.show(new AboutView());
    },
    showCases: function() {
      PanlinCap.mainRegion.show(new CasesView());
    },
    showTeam: function() {
      PanlinCap.mainRegion.show(new TeamView());
    }
  });


  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'investment(/)': 'showInvestMent',
        'about(/)': 'showAbout',
        'team(/)' : 'showTeam',
        'cases(/)' : 'showCases',
        '(/)' : 'showHome'
      },
      controller: new StaticController()
    });


  });
});