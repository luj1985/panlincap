PanlinCap.module('About', function(About, PanlinCap, Backbone, Marionette) {
  'use strict';

  var slogan = [{ text : '关于磐霖' }, { text : '我们的优势' }];

  var reveal = {
    description : [
      '<h2>关于磐霖</h2>',
      '<p>上海磐霖资产管理有限公司是专业的人民币私募股权投资基金（以下简称PE基金）的投资管理平台, 主要从事未上市企业的股权投资和投资后的资产管理。公司为中国证券投资基金业协会备案登记的私募股权基金管理人。迄今，公司已成功发起成立并管理了五期PE基金。公司连同其管理的PE基金合称磐霖资本。</p>',
      '<p>聚集中国民营资本，助力中国民族经济的发展是磐霖资本的追求。</p>',
      '<p>秉承“专业创造价值”的理念，磐霖资本以在专业技能和行业资源上高度互补的投资管理团队，并以在中国资本市场多个成功退出案例名列人民币PE基金市场领域内的前列。</p>'
    ].join('\n')
  };

  var breadcrumb = { text : '关于我们', link : '/about' };

  var Shared = PanlinCap.module('Layout.Sidebar');
  
  var AboutView = Shared.SidebarLayoutView.extend({
    
    onBeforeShow : function() {
      this.showChildView('main', new Shared.RevealView({
        model : new Backbone.Model(reveal)
      }));
      this.showChildView('sidebar', new Shared.SidebarView({
        collection : new Backbone.Collection(slogan)
      }));
      this.showChildView('breadcrumb', new Shared.BreadcrumbView({
        model : new Backbone.Model(breadcrumb)
      }));
    }
  });

  var aboutController = {
    showAbout: function() {
      PanlinCap.bodyRegion.show(new AboutView());
      PanlinCap.execute('showBackground', 'about');
    }
  };

  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'about(/)': 'showAbout'
      },
      controller: aboutController
    });

  });
});