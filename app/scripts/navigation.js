PanlinCap.module('Navigation', function(Navigation, PanlinCap, Backbone, Marionette) {
  'use strict';

  var data = [
    { text : '首页', link : '/' }, 
    { text : '关于我们', menu : [ { text : '关于我们', link : '/about' }, { text : '特点/优势', link : '#' }] }, 
    { text : '投资理念', menu : [ { text : '投资策略', link : '#' },  { text : '投资理念', link : '/investment' }, { text : '价值提升机制', link : '#' }]},
    { text : '核心团队', menu : [ { text : '投资团队', link : '/team'} ]},
    { text : '基金管理', link : '/founds' },
    { text : '投资组合', menu : [ { text : '投资案例', link : '/cases' }]},
    { text : '新闻中心', menu : [ { text : '公司新闻', link : '#' }, { text : '被投公司新闻', link : '#' }]},
    { text : '联系我们', menu : [ { text : '招贤纳士', link : '#' }, { text : '联系我们', link : '#' }, { text : '商业计划书', link : '#'}]}
  ];

  var MenuView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/nav.hbs'],
    className: 'ui menu',
    onRender : function() {
      this.$el.find('.ui.dropdown').dropdown();
    }
  });

  var menus = new Backbone.Model(data);

  PanlinCap.addInitializer(function() {
    PanlinCap.navRegion.show(new MenuView({ collection : menus }));
  });
});