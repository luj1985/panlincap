PanlinCap.module('Invest', function(Invest, PanlinCap, Backbone, Marionette) {
  'use strict';

  var slogan = [
    { text : '核心理念', link : '#/investment/principle' }, 
    { text : '投资策略', link : '#/investment/strategy' }, 
    { text : '价值提升机制', link : '#/investment/price' }
  ];

  var principle = {
    back : '#/investment',
    description : [
      '<h2>核心投资理念 – “快乐投资”</h2>',
      '<p>即被投企业获得理念认同和加速成功的快乐；投资人获得共同见证企业的高速成长，与合作伙伴分享财富倍增和事业跃升的快乐；而基金管理人则获得成就卓越、创造共赢、促进民族经济升级和创新的快乐。</p>'
    ].join('\n')
  };


  var strategy = {
    back : '#/investment',
    description : [
      '<h2>投资核心原则</h2>',
      '<p>新兴产业：紧密贴合国家政策所长期支持的产业创新升级的大趋势，精选拥有扎实基础并具备做大做强DNA的创新型民企</p>',
      '<p>扎根价值：从企业的高成长性中寻求高回报</p>',
      '<p>稳健交易：控制投资成本，注重投资组合，力保投资安全</p>',
      '<h2>重点投资领域</h2>',
      '<p>医疗健康、节能环保、新的消费模式等新兴行业领域</p>',
      '<h2>投资阶段</h2>',
      '<p>GC（成长期）为主，VC为辅。</p>'
    ].join('\n')
  };

  var price = {
    back : '#/investment',
    description : [
      '<h2>价值提升机制</h2>',
      '<p>整合产业资源：基于专业的投资背景和过往的成功投资经验，我们在重点投资行业积累了丰富的行业资源，能够在被投企业的战略规划、市场开拓、人才引进等方面提供有效的帮助。</p>',
      '<p>导入金融资源：我们将充分发挥自身的投行、财务、法律等方面的资源优势，帮助被投企业在后续融资、财务制度规范、资本运作、上市合规等方面获得明显进步。</p>'
    ].join('\n')
  };


  var Shared = PanlinCap.module('Layout.Sidebar');

  var InvestmentController = Shared.MainRegionController.extend({
    background : 'invest',
    showInvestment : function() {
      var layout = this.initializeLayout();
      layout.getRegion('main').empty();
      layout.sidebar.show(new Shared.SidebarView({ 
        collection : new Backbone.Collection(slogan) 
      }));
      layout.breadcrumb.show(new Shared.BreadcrumbView({ 
        collection : new Backbone.Collection([{ text : '投资理念', link : '#/investment' }]) 
      }));
      
      PanlinCap.vent.trigger('reveal:hide');
    },
    showPrice : function() {
      var layout = this.initializeLayout();
      layout.sidebar.show(new Shared.SidebarView({ 
        collection : new Backbone.Collection(slogan) 
      }));
      layout.breadcrumb.show(new Shared.BreadcrumbView({ 
        collection : new Backbone.Collection([
          { text : '投资理念', link : '#/investment' }, 
          { text : '价值提升机制', link : '#/investment/price'}
        ]) 
      }));
      layout.main.show(new Shared.RevealView({ 
        model : new Backbone.Model(price) 
      }));

      PanlinCap.vent.trigger('reveal:active');
    },
    showPrinciple : function() {
      var layout = this.initializeLayout();
      layout.sidebar.show(new Shared.SidebarView({ 
        collection : new Backbone.Collection(slogan) 
      }));
      layout.breadcrumb.show(new Shared.BreadcrumbView({ 
        collection : new Backbone.Collection([
          { text : '投资理念', link : '#/investment' }, 
          { text : '投资核心原则', link : '#/investment/principle'}
        ]) 
      }));
      layout.main.show(new Shared.RevealView({ 
        model : new Backbone.Model(principle) 
      }));

      PanlinCap.vent.trigger('reveal:active');
    },
    showStrategy : function() {
      var layout = this.initializeLayout();
      layout.sidebar.show(new Shared.SidebarView({ 
        collection : new Backbone.Collection(slogan) 
      }));
      layout.breadcrumb.show(new Shared.BreadcrumbView({ 
        collection : new Backbone.Collection([
          { text : '投资理念', link : '#/investment' }, 
          { text : '投资策略', link : '#/investment/strategy'}
        ]) 
      }));
      layout.main.show(new Shared.RevealView({ 
        model : new Backbone.Model(strategy) 
      }));

      PanlinCap.vent.trigger('reveal:active');

    }
  });


  PanlinCap.addInitializer(function() {
    var router = new Marionette.AppRouter({
      appRoutes : {
        'investment(/)': 'showInvestment',
        'investment/principle(/)' : 'showPrinciple',
        'investment/strategy(/)' : 'showStrategy',
        'investment/price' : 'showPrice'
      },
      controller: new InvestmentController()
    });

    router.on('route', function(route, params) {
      $('.page').scrollTop(0);
    });

  });
});
