PanlinCap.module('PanlinCap.Lang', function(Lang) {
  'use strict';

  var messages = {
    zh : {
      name : '基金名称：',
      period : '投资周期：',
      company : '投资项目：',
      distribution : '投资行业分布：',
      back : '返回',
      more : '更多',
      collapse : '收起'
    },
    en : {
      name : 'Fund Name:',
      period : 'Investment Period:',
      company : 'Invested Companies:',
      distribution : 'Industry Distribution:',
      back : 'Back',
      more : 'More',
      collapse : 'Collapse'
    }
  };

  Lang.getLabels = function() {
    var lang = $.cookie('lang');
    return messages[lang];
  };

  Lang.getLabel = function(name) {
    var labels = Lang.getLabels();
    return labels[name];
  };
});