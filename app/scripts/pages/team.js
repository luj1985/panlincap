PanlinCap.module('Team', function(Team, PanlinCap, Backbone, Marionette) {
  'use strict';

  var data = [{
    id : 1,
    name : '李宇辉',
    title : '磐霖资本主管合伙人、执行董事',
    avatar : '/images/team/李宇辉.jpg',
    descriptions : [
      '<p>毕业于华中科技大学和西南财经大学，拥有工学学士和经济学硕士学位，具有20年的中国资本市场投资及投资银行业务管理经验。</p>',
      '<p>李宇辉先生是中国最大的户外运动产品零售商北京探路者（300005）的A轮主导投资人，该公司于2009年在创业板首批上市；是中国从事固废治理和土壤修复的龙头企业北京高能环境（603588）的A轮主导投资人，该公司荣获清科集团“2012年中国最具投资价值企业50强”第一名。</p>',
      '<p>作为磐霖资本的创始合伙人，李宇辉先生长期从事国内资本市场的投资，在私募股权投资领域具有独到的投资理念和系列化的成功案例，专注投资于消费升级、医疗健康和节能环保产业，先后主持投资了探路者、东方时尚、高能时代、深圳康泰、广东凯普、盛世骄阳、湖南瑞翔等PE项目，取得优秀的投资业绩。</p>',
      '<p>在创立磐霖资本前，李宇辉先生在国内一线投行工作了10年，曾先后担任君安证券投资银行总部高级经理、君安证券国际业务部总经理助理、国泰君安证券国际业务部业务董事、东北证券投资银行总部副总经理、健桥证券投资银行总部总经理，具有资深的投行专业服务和管理经验。</p>',
      '<p>基于多年的投行经历，李宇辉先生拥有广泛的项目来源、专业判断和项目争取、谈判和后续管理能力，善于整合业务资源及协调所有项目参与方的关系，在投资成为公司股东后能有效推动公司规范化运作和主导公司上市及并购事宜。</p>',
    ].join('')
  }, {
    id : 2,
    name : '王利波',
    title : '磐霖资本管理合伙人',
    avatar : '/images/team/王利波.jpg',
    descriptions : [
      '<p>毕业于东北财经大学和澳大利亚麦考理大学，拥有经济学学士和会计学硕士学位，具有超过16年的中国资本市场投资及专业服务经验。</p>',
      '<p>王利波先生从事私募股权投资行业以来，专注于投资医疗健康和现代农业产业，先后主持投资了爱德牛业、创新生物等PE项目，参与了高能时代、东方时尚、康泰生物、盛世骄阳等项目，并担任盛世骄阳的监事、德易东方的监事及康泰生物的董事会观察员。</p>',
      '<p>在联合创立磐霖资本前，王利波先生曾先后担任中洲会计师事务所部门经理、健桥证券投资银行总部业务董事、澳华黄金矿业财务总监助理等职务，具有资深的会计专业服务和管理经验。</p>',
      '<p>在联合创立磐霖资本前，王利波先生曾先后担任中洲会计师事务所部门经理、健桥证券投资银行总部业务董事、澳华黄金矿业财务总监助理等职务，具有资深的会计专业服务和管理经验。</p>',
    ].join('')
  }, {
    id : 3,
    name : '谭惠东',
    title : '磐霖资本合伙人',
    avatar : '/images/team/谭惠东.jpg',
    descriptions : [
      '<p>毕业于华东师范大学，拥有经济学学士学位。具有20年的资产管理经验和证券二级市场投资管理经验。</p>',
      '<p>作为磐霖资本的合伙人，谭惠东先生长期从事国内资本市场的投资，熟悉金融市场和企业运营，擅长行业分析，尤其对节能环保及医疗健康领域的企业价值和公司治理有深入研究和理解，在成就企业价值过程中发挥较大作用。先后投资了佳宇资源、北京高能、深圳康泰、广东凯普等PE项目，获得了良好的投资业绩。谭惠东先生同时还担任广东凯普董事会观察员、江苏佳宇执行管理委员会委员。</p>',
      '<p>在联合创立磐霖资本前，谭惠东先生曾在光大国际信托投资公司，光大证券，首创期货公司担任投资管理工作，负责运作并管理基金的投资。具有资深的国内资本市场特别是证券二级市场投资管理经验。</p>',
      '<p>基于多年的丰富投资经验，谭惠东先生具有丰富的专业投资及项目管理经验，熟悉资本运作与企业运营管理，擅长企业资源整合，提升企业价值。拥有对国内资本市场的敏锐性和洞察力，并在机构投资者中拥有广泛的社会资源和人脉。</p>',
    ].join('')
  }, {
    id : 4,
    name : '薛孟军',
    title : '磐霖资本合伙人',
    avatar : '/images/team/薛孟军.jpg',
    descriptions : [
      '<p>毕业于上海财经大学，拥有经济学学士和中国注册会计师资格。前任时代创业投资总监、健桥证券投资银行总部副总经理、亚商咨询业务董事，具有超过15年投资银行及股权投资业务领域的专业经验。</p>', 
      '<p>薛孟军先生熟悉并能够深刻理解国内资本市场，拥有广泛的人脉资源，在投行领域具备资深的业务经验，了解和熟悉上市公司运作。尤其是在企业并购重组领域具备丰富的操作经验和实战能力，曾作为项目负责人成功完成沪昌特钢、成都华联、东阿阿胶、伊利股份、金丰投资、甘长风、陕长岭等十几家上市公司并购重组案例，均达到预期目的，其中西安高科借壳沪昌特钢涉资数十亿元，是国内资本市场并购重组的经典案例。</p>', 
      '<p>薛孟军先生在环保、消费、TMT领域从事了多年的股权投资工作，在上述领域成功完成多个项目投资，在企业价值判断、尽职调查、投后管理、项目退出、后续融资、财务管理与规范等方面积累了丰富的实战经验，能够帮助被投企业实现快速的价值提升。</p>', 
    ].join('')
  }, {
    id : 5,
    name : '唐爱民',
    title : '磐霖资本合伙人',
    avatar : '/images/team/唐爱民.jpg',
    descriptions : [
      '<p>毕业于南开大学和北京大学，拥有生物学硕士学位。前任华澳资本生物医药投资总监、百祥生物董事总经理、中美奥沃公司副总经理等，具有20年以上的中国医药医疗及生物技术产业相关市场经验。</p>',
      '<p>唐爱民先生有丰富的医疗健康行业PE&VC投资经验，主持或参与过的投资项目主要有:康泰生物、新产业生物、新旭发科技、美诺华药业、德易东方等，所投资企业均有优异的业绩增长表现。唐爱民先生现任德易东方董事。</p>',
      '<p>唐爱民先生拥有丰富的医疗健康产业专业知识和经营经验，对医疗健康的重要细分领域有深入的研究和心得；在医疗器械、生物医药、诊断试剂、原料药等诸多领域建立了广泛的客户关系和潜在的项目积累。在投资对象寻找、目标筛选、尽职调查、风险控制方面拥有相当专业的判断能力。</p>',
      '<p>唐爱民先生还曾参与管理多家企业的整体经营运作与团队建设工作，曾以创始合伙人身份建立上海百祥生物科技有限公司，组建了生产、销售体外诊断试剂的团队和市场网络。</p>'
    ].join('')
  }, {
    id : 6,
    name : '张越',
    title : '磐霖资本合伙人',
    avatar : '/images/team/张越.jpg',
    descriptions : [
      '<p>西南财经大学MBA，拥有18年投资银行及投资从业经历。</p>',
      '<p>张越先生曾先后担任君安证券有限公司（后为国泰君安证券有限公司）投资银行部业务董事；联合证券投资银行部一级业务董事、投资银行三部副总经理；上市公司“四川湖山”董事会秘书、副总经理；深圳鹰格投资有限公司投资总监；浙江中证大道投资管理有限公司副总裁等职。</p>',
      '<p>张越先生长期从事投资银行、证券投资、上市公司管理工作，见证并参与了中国证券的发展，具备丰富的理论基础和实践经验；参与并主持完成境内外多家企业的股票发行上市工作，参与并主持完成了多项企业间并购业务，熟悉境内外证券市场状态、投资银行业务体系及相关业务流程、熟悉投融资业务；善于企业结构建设及资产重组，对中国经济及国内、国际证券市场有深刻理解。</p>',
    ].join('')
  }];

  var MemberView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team/member.hbs'],
    className : 'ui panlin modal',
    onShow : function() {
      this.$el.modal('show');
    }
  });

  var TeamView = Marionette.ItemView.extend({
    template: PanlinCapTpl['templates/team/team.hbs'],
    className : 'person',
    events : {
      'click .member' : function() {
        PanlinCap.dialogRegion.show(new MemberView({model : this.model}));
      }
    }
  });

  var TeamsView = Marionette.CompositeView.extend({
    template : PanlinCapTpl['templates/team/teams.hbs'],
    className : 'team-show',
    childView : TeamView,
    childViewContainer : '.teams',
    events : {
      'click .carousel-control.left' : function(e) {
        e.preventDefault();
      },
      'click .carousel-control.right' : function(e) {
        e.preventDefault();
      }
    }
  })

  var TeamBgView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/team/teambg.hbs'],
    className: 'slides home'
  });

  var StaticController = Marionette.Controller.extend({
    showTeam: function() {
      var teams = new Backbone.Collection(data);
      PanlinCap.bodyRegion.show(new TeamsView({collection: teams}));
      PanlinCap.bgRegion.show(new TeamBgView());
    }
  });

  PanlinCap.addInitializer(function() {

    new Marionette.AppRouter({
      appRoutes : {
        'team(/)' : 'showTeam'
      },
      controller: new StaticController()
    });

  });
});