PanlinCap.module('Case', function(Case, PanlinCap, Backbone, Marionette) {
  'use strict';

  var data = [{
    id: 1,
    title : '八达园林',
    website : 'http://www.jsbdyl.com',
    brand : '/images/cases/7.png',
    descriptions : '国内苗木栽培、景观设计和工程施工一体化领先企业。受益于中国城镇化进程的加速，未来仍将持续增长，成长空间巨大；公司拥有住建部颁发的一级施工资质，是行业内上下游一体化的企业，具备领先的行业地位，发展目标是成为国内首屈一指的集苗木栽培和养护、园林工程设计和施工的一体化行业龙头企业。'
  }, {
    id: 2,
    title : '瑞翔材料',
    website : 'http://www.reshine.net',
    brand : '/images/cases/4.png',
    descriptions : '公司为锂电池正极材料的国内龙头企业；正处于产品结构升级和客户升级的拐点，毛利率上升，可望拥抱新能源汽车动力电池市场的几何级增长，实现企业的快速发展；公司研发能力强，是国家863计划指定研究单位，系尼桑-三星体系内电动车正级材料的最大战略供应商，在业内具有明确的技术优势。 '
  }, {
    id: 3,
    title : '佳宇资源',
    brand : '/images/cases/5.png',
    descriptions : '太阳能硅片切割液循环利用细分行业中的龙头。依托于市场空间巨大并持续高速发展的太阳能市场，企业有望维持高速成长；提供的高性价比差异化产品高度契合下游企业降低成本的迫切需求，符合资源循环再利用的政策导向。'
  }, {
    id: 4,
    title : '高能环境（603588）',
    website : 'http://www.bgechina.cn',
    brand : '/images/cases/2.png',
    descriptions : '公司为国内环保生态屏障解决方案龙头企业；拥有独到领先的土壤修复技术，其提供的服务可应用于多个领域（石油、化工、水电、核电），解决固废污染扩散并致力于污染修复。受益于国家产业政策的大力扶持，增长空间巨大；公司为国家标准的主要制订者，并获得 “清科2012年中国最具投资价值企业50强第1名”、“清科2011年中国最具投资价值企业50强第6名”、“2011年CVAwards年度最具潜力企业100名”、“2010年德勤高科技、高成长亚太500强”等多个权威排名。'
  }, {
    id: 5,
    title : '探路者（300005）',
    website: 'http://www.toread.com.cn',
    brand : '/images/cases/1.png',
    descriptions : '公司为国内最大的户外运动用品品牌零售商；拥有中高端“Discovery”、中端主品牌“探路者”及电子商务品牌“ACANU”三大品牌，标准化门店1100余家；产品涵盖户外服装、户外功能鞋和户外装备三大系列。在国内户外运动产品行业年均增长40%的背景下，公司依托于品牌建设和连锁扩张，获得高速增长。公司荣获2011年度“创业板上市公司价值二十强”、“2011年度金牛最佳创业成长公司”。'
  }, {
    id: 6,
    title : '东方时尚',
    website : 'http://www.dfss.com.cn',
    brand : '/images/cases/3.png',
    descriptions : '公司为汽车驾驶培训行业的龙头企业。拥有亚洲规模最大、设施最先进的校区；其所在行业增长稳定，极具成长空间，而公司已建立成熟规范的管理与运营模式，通过复制可完成全国范围内的扩张；公司获得“2011年中国快公司TOP10企业”、“2011年度中国教育新领军人物、行业领军成长10强”、“第十届中国成长百强榜单第4名”等多个荣誉称号。 '
  }, {
    id: 7,
    title : '创新科技',
    website : 'http://www.hncxin.com',
    brand : '/images/cases/6.png',
    descriptions : '农业产业化的国家重点企业。具备独特的技术及知识产权；自主研发的无抗生素生物饲料能够有效地解决肉类产品的抗生素积聚难题，符合食品健康安全的消费大趋势；有望在市场中获取爆发式增长。 '
  }];

  var CaseView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/case/case.hbs'],
    className : 'case',
    events : {
      'click' : function() {
        if (this.$el.hasClass('current')) {
          PanlinCap.dialogRegion.show(new CaseExpandView({model : this.model}));
        }
      }
    }
  });

  var CaseExpandView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/case/dialog.hbs'],
    className : 'ui panlin modal case-dialog',
    onShow : function() {
      this.$el.modal('show');
    }
  });

  var CasesView = Marionette.CompositeView.extend({
    template : PanlinCapTpl['templates/case/cases.hbs'],
    className : 'showcase',
    childView : CaseView,
    childViewContainer : '.cases',
    onShow : function() {
      this._length = this.$('.cases .case').length;
      this.coverflow = this.$('.cases').coverflow({
        index : 4,
        easing: 'easeInOutQuad',
        innerAngle: -20,
        outerAngle: 0,
        innerScale: 0.8,
        outerScale: 0.5,
        innerOffset: 100 / 3
      });
    },
    events : {
      'click .carousel-control.left' : function(e) {
        e.preventDefault();
        var index = this.$('.cases').coverflow('index');
        if (index < this._length - 1) {
          this.$('.cases').coverflow('index', ++index);
        }
      },
      'click .carousel-control.right' : function(e) {
        e.preventDefault();
        var index = this.$('.cases').coverflow('index');
        if (index > 0) {
          this.$('.cases').coverflow('index', --index); 
        }
      }
    }
  });

  var CasesBgView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/case/casesbg.hbs'],
    className: 'slides cases'
  });

  var StaticController = Marionette.Controller.extend({
    showCases: function() {
      PanlinCap.bodyRegion.show(new CasesView({
        collection: new Backbone.Collection(data)
      }));
      PanlinCap.bgRegion.show(new CasesBgView());
    }
  });

  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'cases(/)' : 'showCases'
      },
      controller: new StaticController()
    });

  });
});