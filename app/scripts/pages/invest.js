PanlinCap.module('Invest', function(Invest, PanlinCap, Backbone, Marionette) {
  'use strict';

  var slogan = [
    { text : '投资核心原则', link : '/investment/show' }, 
    { text : '重点投资领域', link : '/investment/show' }, 
    { text : '价值提升机制', link : '/investment/show' }
  ];

  var reveal = {
    back : '/investment',
    description : [
      '<h2>投资核心原则</h2>',
      '<h3>新兴产业</h3>',
      '<p>紧密贴合国家政策所长期支持的产业创新升级的大趋势，精选拥有扎实基础并具备做大做强DNA的创新性民企；</p>',
      '<h3>扎根价值</h3>',
      '<p>从企业的高成长性中寻求高回报</p>',
      '<h3>稳健交易</h3>',
      '<p>控制投资成本，注重投资组合，力保投资安全</p>',
      '<h3>重点投资领域</h3>',
      '<p>医疗健康、节能环保、医疗健康、新的消费模式等新兴行业领域</p>',
      '<h3>投资阶段</h3>',
      '<p>成长期为主，成熟期为辅。</p>'
    ].join('\n')
  };


  var Shared = PanlinCap.module('Layout.Sidebar');

  var InvestmentController = Shared.MainRegionController.extend({
    background : 'invest',
    showInvestMent : function() {
      var layout = this.initializeLayout();
      layout.getRegion('main').empty();
      layout.showChildView('sidebar', new Shared.SidebarView({ collection : new Backbone.Collection(slogan) }));
      layout.showChildView('breadcrumb', new Shared.BreadcrumbView({ collection : new Backbone.Model([{ text : '投资理念', link : '/investment' }]) }));
      
      PanlinCap.vent.trigger('reveal:hide');
    },
    showDetail : function() {
      var layout = this.initializeLayout();
      layout.getRegion('main').empty();
      layout.showChildView('sidebar', new Shared.SidebarView({ collection : new Backbone.Collection(slogan) }));
      layout.showChildView('breadcrumb', new Shared.BreadcrumbView({ collection : new Backbone.Model([{ text : '投资理念', link : '/investment' }, {text : '投资核心原则', link : '/investment/show'}]) }));
      layout.showChildView('main', new Shared.RevealView({ model : new Backbone.Model(reveal) }));

      PanlinCap.vent.trigger('reveal:active');
    }
  });


  PanlinCap.addInitializer(function() {
    new Marionette.AppRouter({
      appRoutes : {
        'investment(/)': 'showInvestMent',
        'investment/show' : 'showDetail'
      },
      controller: new InvestmentController()
    });

  });
});
