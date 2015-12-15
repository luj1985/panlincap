PanlinCap.module('PanlinCap.Lang', function(Lang, PanlinCap) {
  'use strict';

  var messages = {
    zh : {
      name : '基金名称：',
      period : '投资周期：',
      company : '投资项目：',
      distribution : '投资行业分布：',
      back : '返回',
      more : '更多',
      collapse : '收起',
      male : '先生',
      female : '女士'
    },
    en : {
      name : 'Fund Name:',
      period : 'Investment Period:',
      company : 'Invested Companies:',
      distribution : 'Industry Distribution:',
      back : 'Back',
      more : 'More',
      collapse : 'Collapse',
      male : 'Mr.',
      female : 'Ms.'
    }
  };

  Lang.getLanguage = function() {
    return $.cookie('lang') || 'zh';
  };

  Lang.setLanguage = function(lang) {
    var current = Lang.getLanguage();
    // or disable language selection button.
    if (lang !== current) {
      $.cookie('lang', lang, { expires: 365 });
      PanlinCap.trigger('language', lang);
    }
  };

  Lang.getLabels = function() {
    var lang = Lang.getLanguage() ;
    return messages[lang];
  };

  Lang.getLabel = function(name) {
    var labels = Lang.getLabels();
    return labels[name];
  };
});