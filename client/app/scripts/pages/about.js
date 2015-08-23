PanlinCap.module('About', function(About, PanlinCap, Backbone, Marionette) {
  'use strict';

  var slogan = [
    { text : '磐霖介绍', link : '#/about/panlin' }, 
    { text : '我们的优势', link : '#/about/advantage' }
  ];

  var reveal = {
    back : '#/about',
    description : [
      '<h2>磐霖介绍</h2>',
      '<p>上海磐霖资产管理有限公司是专业的人民币私募股权投资基金（以下简称PE基金）的投资管理平台, 主要从事未上市企业的股权投资和投资后的资产管理。公司为中国证券投资基金业协会备案登记的私募股权基金管理人（备案登记号：P1000741）。迄今，公司已成功发起成立并管理了七期PE基金，包括一家医疗健康行业创投基金和一家环保产业并购基金。公司连同其管理的PE基金合称磐霖资本。</p>',
      '<p>聚集中国民营资本，助力中国民族经济的发展是磐霖资本的追求。</p>',
      '<p>秉承“专业创造价值”的理念，磐霖资本以在专业技能和行业资源上高度互补的投资管理团队，并以在中国资本市场多个成功退出案例名列人民币PE基金市场领域内的前列。</p>',
      '<p>“快乐投资”是磐霖资本的核心投资理念。磐霖资本依托于医疗健康及节能环保等领域内的专业投资经验，致力于发掘被投资企业价值，通过组合行业资源、提供以上市为标准的管理规范与企业共同创造价值，并通过促进上市或产业并购等投行增值服务帮助企业实现价值，共同成长，分享快乐。 </p>',
      '<p>为此，磐霖资本专注于投资处于成长阶段的中国民营企业，专注于投资医疗健康、节能环保、新的消费模式等新兴行业领域内的创新型企业，以聚焦于高增值可持续的投资机会，并最有效地发挥磐霖资本投资管理团队的专业经验和行业优势。</p>'
    ].join('\n')
  };

  var advantage = {
    back : '#/about',
    description : [
      '<h2>我们的优势</h2>',
      '<h3>优秀的投资业绩</h3>',
      '<p>我们是一家成熟的专业投资机构，先后成功发起和管理了五期基金，给投资人带来了丰厚的投资回报。我们在医疗健康、节能环保、新的消费模式等行业进行了诸多的成功投资，其中探路者、高能环境、东方时尚、康泰生物、凯普生物、骏梦游戏、盛世骄阳等公司都发展成为所在行业的明星企业。</p>',
      '<h3>专业的投资团队</h3>',
      '<p>我们的投资团队具有资深的产业投资、投行、财务及法律事务背景，核心成员均具有至少15年以上专业投资管理经验或顶级投资银行经验，在国内资本市场拥有资深的金融资源，基于超过20个IPO或并购项目的成功实施经验，我们的团队在投资企业后能有效推动企业规范化运作和主导企业上市及并购事宜；同时，我们的医疗、环保专业团队拥有深厚的专业背景和丰富的执业经历，能紧密跟踪产业发展的前沿动态、把握产业发展的未来趋势，提早进行投资布局；丰富的行业资源，为向被投企业提供行业资源组合及投后管理奠定了坚实的基础。</p>',
      '<h3>成熟的投资方法</h3>',
      '<p>磐霖资本定位于成长性投资机构，为此，我们专注于投资处于成长阶段的中国民营企业，专注于投资医疗健康、节能环保、新的消费模式等新兴行业领域内的创新型企业，以聚焦于高增值可持续的投资机会，并最有效地发挥磐霖资本投资管理团队的专业经验和行业优势。 </p>'
    ].join('\n')
  };

  var Shared = PanlinCap.module('Layout.Sidebar');

  var AboutController = Shared.MainRegionController.extend({
    background : 'about',
    showAbout : function() {
      var layout = this.initializeLayout();
      layout.getRegion('main').empty();
      layout.sidebar.show(new Shared.SidebarView({
        collection : new Backbone.Collection(slogan)
      }));
      layout.breadcrumb.show(new Shared.BreadcrumbView({
        collection : new Backbone.Collection([{ text : '关于我们', link : '#/about' }]) 
      }));

      PanlinCap.vent.trigger('reveal:hide');
    },
    showAboutPanlin : function() {
      var layout = this.initializeLayout();
      layout.sidebar.show(new Shared.SidebarView({
        collection : new Backbone.Collection(slogan)
      }));
      layout.main.show(new Shared.RevealView({
        model : new Backbone.Model(reveal)
      }));
      layout.breadcrumb.show(new Shared.BreadcrumbView({
        collection : new Backbone.Collection([
          { text : '关于我们', link : '#/about' }, 
          { text : '关于磐霖', link : '#/about/panlin'}
        ])
      }));

      PanlinCap.vent.trigger('reveal:active');
    },
    showAdvantage : function() {
      var layout = this.initializeLayout();
      layout.sidebar.show(new Shared.SidebarView({ 
        collection : new Backbone.Collection(slogan) 
      }));
      layout.main.show(new Shared.RevealView({ 
        model : new Backbone.Model(advantage) 
      }));
      layout.breadcrumb.show(new Shared.BreadcrumbView({ 
        collection : new Backbone.Collection([
          { text : '关于我们', link : '#/about' }, 
          { text : '我们的优势', link : '#/about/advantage'}
        ]) 
      }));
      
      PanlinCap.vent.trigger('reveal:active');
    }
  });

  PanlinCap.addInitializer(function() {

    var router = new Marionette.AppRouter({
      appRoutes : {
        'about(/)': 'showAbout',
        'about/panlin(/)' : 'showAboutPanlin',
        'about/advantage(/)' : 'showAdvantage'
      },
      controller: new AboutController()
    });

    router.on('route', function(route, params) {
      $('.page').scrollTop(0);
    });

  });
});