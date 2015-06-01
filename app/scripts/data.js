(function(PanlinCap, Marionette, Backbone) {
  'use strict';

  PanlinCap.reqres.setHandler('news:fetch', function() {
    var news = [{
      title : '2015/05/12   [ 高能环境隆重亮相第16届中国环博会 ]',
      descriptions : '5月6——8日，由德国慕尼黑国际博览集团、中国环境科学学会、全联环境服务业商会、中贸慕尼黑展览（上海）有限公司等单位联合举办的第十...'
    }, {
      title : '2015/05/04   [ 东方时尚走进"4.29"首都网络安全日 ]',
      descriptions : '“4.29首都网络安全日”活动，即网络与信息安全博览会在北京展览馆里隆重召开。此次博览会在公安部、工业与信息化部的支持下，经北京市...'
    }, {
      title : '2015/04/30   [ 高能环境绿色小学隆重揭牌 ]',
      descriptions : '高能环境在四川阿坝松潘县捐建首座希望小学   4月22日，北京高能时代环境技术股份有限公司捐助四川省阿坝州松潘县水晶...'
    }, {
      title : '2015/04/30   [ 东方时尚--全国驾校教练员素质提升培训班第一期圆满结束 ]',
      descriptions : '由中国道路运输协会汽车驾驶员工作委员会组织，东方时尚驾驶学校股份有限公司承办,“2015年全国驾校教练员素质提升培训班”，于201...'
    }];
    return new Backbone.Collection(news);
  });

  PanlinCap.reqres.setHandler('company-news:fetch', function() {
    var news = [{
      title : '2015/05/18   [ 磐霖资本股权投资基金A轮主导投资上海赛安生物医药科技有限公司 ]',
      descriptions : '近日，磐霖资本股权投资基金作为A轮主导投资人，投资了上海赛安生物医药科技有限公司。   公司长期致力于肿瘤个体化治疗...'
    }, {
      title : '2015/03/25   [ 磐霖东方、磐霖盛泰基金投资的上海骏梦网络被富春通信收购100%股权获证监会无条件通过 ]',
      descriptions : '2015年3月23日，磐霖东方、磐霖盛泰基金投资的上海骏梦网络科技有限公司被富春通信（300299）收购100%股权获证监会无条件...'
    }, {
      title : '2015/03/05   [ 磐霖仟源医疗健康产业基金正式成立，总规模达3亿人民币 ]',
      descriptions : '由上海磐霖资产管理有限公司（以下简称“磐霖资本”）与山西仟源医药集团股份有限公司（以下简称“仟源医药”）共同发起设立的医疗健康产业...'
    }, {
      title : '2015/02/26   [ 磐霖盛泰基金投资的盛世骄阳拟被皇氏集团以7.8亿元收购100%股权 ]',
      descriptions : '2015年1月29日晚间，皇氏集团股份有限公司（002329.SZ）（以下简称“皇氏集团”）发布公告，磐霖盛泰基金投资的北京盛世骄...'
    }];
    return new Backbone.Collection(news);
  });

  PanlinCap.reqres.setHandler('cases:fetch', function() {

    var cases = [{
      title : '医疗健康',
      brands : [{
        title : '凯普生物',
        website : 'http://www.hybribio.cn',
        brand : '/images/cases/凯普生物.png',
        description : '宫颈癌生物基因检测领域的市场领导者。宫颈癌是仅次于乳腺癌的第二大妇科肿瘤，国家对其检测预防的扶持力度不断加大，中国各地已陆续开展筛查宫颈癌的高危型人乳头瘤病毒分型检测；公司是中国宫颈癌防治工程的战略合作伙伴，并与国家疾病预防控制中心及中国宫颈癌防治工程进行全国性的深度合作；公司产品拥有10项中美专利，已在全国超过数百家医院建立了可高效扩张的销售和服务平台，未来高速成长可期。公司荣获“2012中国医疗健康产业最具投资价值企业TOP10”殊荣。'
      }, {
        title : '康泰生物',
        website : 'http://www.biokangtai.com/docc',
        brand : '/images/cases/康泰生物.png',
        description : '国内疫苗行业的龙头公司。基于公司全资子公司北京民海生物科技有限公司（http://www.biominhai.com）强大的研发平台，公司20余年的行业经验和工艺生产及质量检测水平，随着国内首创的无细胞百白破b型流感嗜血杆菌联合疫苗、成人60微克乙肝疫苗、肺炎疫苗、人二倍体狂犬疫苗等系列化新产品的上市，公司具有爆发性的成长空间和增长潜力。'
      }, {
        title : '德易东方',
        website : 'http://www.deyidongfang.com',
        brand : '/images/cases/德易东方.png',
        description : '公司为国内最贴近临床应用的基因测序服务公司，已将多种实验室高端医学诊断技术转化为临床应用项目，利用基因二代测序技术，可一次性检测分析4000多种遗传病，准确地协助医生进行临床诊断，已与国内多家著名医院开展业务合作；其国内首创的疾病基因组数据库正不断扩充和完善。'
      }, {
        title : '赛安生物',
        website : 'http://www.shineschina.com',
        brand : '/images/cases/赛安生物.png',
        description : '公司为国内践行个体化治疗与精准医疗的先行者之一，利用多样化的检测技术平台提供从肿瘤早期筛查、个体化用药筛选、疗效判定、愈后复发、放疗靶标、生物免疫治疗等覆盖整个过程的解决方案，在产品开发和市场建设方面都有基础，并以共建中心模式协助各大医院建立完善的肿瘤分子医学诊断中心。公司在肿瘤分子诊断领域，是提供最多检测平台、检测指标的单位之一，获得Frost&Sullivan公司颁发的中国体外诊断行业的2014年度最佳实践奖。  '
      }, {
        title : '爱德牛业',
        website : 'http://www.indlifetech.com.cn',
        brand : '/images/cases/爱德牛业.png',
        description : '高产奶牛生物胚胎移植领域的龙头公司。随着中国居民可支配收入的快速增加，国内牛奶消费进入快速增长阶段，引入高产加系荷斯坦奶牛对提升国内奶牛单产具有极大的意义；公司是世界上最大的以胚胎移植的方法进行奶牛和肉牛繁育改良中心，也是目前在中国奶牛繁育市场唯一一家能够进行高品质胚胎技术产品产供销一条龙服务的企业；公司采用现代生物育种技术，可快速改良和替代我国大部分低产奶牛；通过独特的小区托管模式快速扩张产能，获得爆发式增长机会；公司获得清科“2010年中国最具投资价值企业50强”称号。'
      }]
    }, {
      title : '新的消费模式',
      brands : [{
        title : '探路者（300005）',
        website: 'http://www.toread.com.cn',
        brand : '/images/cases/探路者.png',
        description : '公司为国内最大的户外运动用品品牌零售商；拥有中高端“Discovery”、中端主品牌“探路者”及电子商务品牌“ACANU”三大品牌，标准化门店1100余家；产品涵盖户外服装、户外功能鞋和户外装备三大系列。在国内户外运动产品行业年均增长40%的背景下，公司依托于品牌建设和连锁扩张，获得高速增长。公司荣获2011年度“创业板上市公司价值二十强”、“2011年度金牛最佳创业成长公司”。'
      }, {
        title : '东方时尚',
        website : 'http://www.dfss.com.cn',
        brand : '/images/cases/东方时尚.png',
        description : '公司为汽车驾驶培训行业的龙头企业。拥有亚洲规模最大、设施最先进的校区；其所在行业增长稳定，极具成长空间，而公司已建立成熟规范的管理与运营模式，通过复制可完成全国范围内的扩张；公司获得“2011年中国快公司TOP10企业”、“2011年度中国教育新领军人物、行业领军成长10强”、“第十届中国成长百强榜单第4名”等多个荣誉称号。 '
      }, {
        title : '骏梦游戏',
        website : 'http://www.thedream.cc',
        brand : '/images/cases/骏梦游戏.png',
        description : '公司专注于网页游戏、社交游戏以及移动互联网游戏等跨平台市场，拥有熟练掌握Flash、Unity3D以及Html5等多种网页游戏核心开发技术并具备丰富运营经验的优秀团队，是国内以自主研发为核心并兼具游戏运营竞争力的一线企业。目前公司拥有超过5000万的高粘度、高付费偏向的自有注册用户资源，在动漫题材的游戏用户市场雄踞第一。公司未来的战略目标是通过强IP战略的实施，不断向市场推出重量级的游戏产品，成为网络游戏行业的领导企业。'
      }, {
        title : '盛世骄阳',
        website : 'http://www.sun-tv.com.cn',
        brand : '/images/cases/盛世骄阳.png',
        description : '公司是国内领先的新媒体影视节目整合、发行和运营公司,是专门面向视听新媒体市场的数字版权节目集成交易服务商，是目前国内唯一覆盖所有数字媒体渠道的版权发行商。公司拥有目前国内规模最大的精品长销剧独家数字版权节目库，其B2B发行覆盖90%主流网络视频网站以及50%的数字电视发行渠道。'
      }, {
        title : '创新科技',
        website : 'http://www.hncxin.com',
        brand : '/images/cases/创新科技.png',
        description : '农业产业化的国家重点企业。具备独特的技术及知识产权；自主研发的无抗生素生物饲料能够有效地解决肉类产品的抗生素积聚难题，符合食品健康安全的消费大趋势；有望在市场中获取爆发式增长。 '
      }]
    }, {
      title : '节能环保',
      brands : [{
        title : '高能环境（603588）',
        website : 'http://www.bgechina.cn',
        brand : '/images/cases/高能环境.png',
        description : '公司为国内环保生态屏障解决方案龙头企业；拥有独到领先的土壤修复技术，其提供的服务可应用于多个领域（石油、化工、水电、核电），解决固废污染扩散并致力于污染修复。受益于国家产业政策的大力扶持，增长空间巨大；公司为国家标准的主要制订者，并获得 “清科2012年中国最具投资价值企业50强第1名”、“清科2011年中国最具投资价值企业50强第6名”、“2011年CVAwards年度最具潜力企业100名”、“2010年德勤高科技、高成长亚太500强”等多个权威排名。'
      }, {
        title : '佳宇资源',
        brand : '/images/cases/佳宇资源.png',
        description : '太阳能硅片切割液循环利用细分行业中的龙头。依托于市场空间巨大并持续高速发展的太阳能市场，企业有望维持高速成长；提供的高性价比差异化产品高度契合下游企业降低成本的迫切需求，符合资源循环再利用的政策导向。'
      }, {
        title : '瑞翔材料',
        website : 'http://www.reshine.net',
        brand : '/images/cases/瑞翔材料.png',
        description : '公司为锂电池正极材料的国内龙头企业；正处于产品结构升级和客户升级的拐点，毛利率上升，可望拥抱新能源汽车动力电池市场的几何级增长，实现企业的快速发展；公司研发能力强，是国家863计划指定研究单位，系尼桑-三星体系内电动车正级材料的最大战略供应商，在业内具有明确的技术优势。 '
      }, {
        title : '八达园林',
        website : 'http://www.jsbdyl.com',
        brand : '/images/cases/八达园林.png',
        description : '国内苗木栽培、景观设计和工程施工一体化领先企业。受益于中国城镇化进程的加速，未来仍将持续增长，成长空间巨大；公司拥有住建部颁发的一级施工资质，是行业内上下游一体化的企业，具备领先的行业地位，发展目标是成为国内首屈一指的集苗木栽培和养护、园林工程设计和施工的一体化行业龙头企业。'
      }, {
        title : '华杉环保',
        website : 'http://www.huashan-environ.com',
        brand : '/images/cases/华杉环保.png',
        description : '公司专注于氨氮废水处理领域，是目前国内中高浓度氨氮废水处理行业经营规模最大的公司之一。其所处的细分市场是万亿环保大产业中增长最快的（废）污水氨氮处理领域。作为国内较早涉足中高浓度氨氮废水处理的环保企业，公司积累了丰富的项目经验，尤其在有色、稀土、化工等行业内具有较高的美誉度。公司已具备目前国内最完善和涵盖面最广的氨氮废水处理技术体系。'
      }]
    }, {
      title : '其他',
      brands : [{
        title : '德勤企业',
        website : 'http://www.deqingroup.com',
        brand : '/images/cases/德勤企业.png',
        description : '国内民营内河和近海航运业的领军企业；行业地位突出，公司总控制运力（即自有运力与租赁运力之和）规模全国排名第八，民营航运企业排名第二。业务结构良好，业务模式灵活、多样，具有明显的揽货优势，差异化竞争策略带来长期稳定的优质客户，物流基地和物流网点的积极铺设为开拓市场货源带来极大便利。'
      }]
    }];

    return new Backbone.Collection(cases);
  });

  PanlinCap.reqres.setHandler('menus:fetch', function() {

    var data = [
      { text : '首页',    link : '/' }, 
      { text : '关于我们', link : '/about' }, 
      { text : '投资理念', link : '/investment' },
      { text : '核心团队', link : '/team' },
      { text : '基金管理', link : '/founds' },
      { text : '投资组合', link : '/cases' },
      { text : '新闻中心', link : '/news' },
      { text : '联系我们', link : '/contacts'}
    ];

    return new Backbone.Model(data);
  });


  PanlinCap.reqres.setHandler('founds:fetch', function() {
    var data = [{
      issue : '壹期基金',
      name : '磐霖东方股权投资基金',
      description : [
        '<div class="found-wrapper">',
          '<table class="content-column-left">',
            '<tr><td>基金名称：</td><td>磐霖东方股权投资基金</td></tr>',
            '<tr><td>投资周期：</td><td>2010年至2016年</td></tr>',
            '<tr><td>投资项目：</td><td>高能环境、瑞翔材料、东方时尚、骏梦网络等</td></tr>',
          '</table>',

          '<div class="content-column-right">',
            '<p>投资行业分布：</p>',
            '<table class="chart distribution">',
              '<tr>',
                '<td width="62%" style="background-color:rgb(180,6,12)">62%</td>',
                '<td width="20%" style="background-color:rgb(199,99,103)">20%</td>',
                '<td width="8%"  style="background-color:rgb(178,53,55)">8%</td>',
                '<td width="10%" style="background-color:rgb(208,145,148)">10%</td>',
              '</tr>',
              '<tr>',
                '<td>节能环保</td>',
                '<td>教育培训</td>',
                '<td>新能源/新材料</td>',
                '<td>文化传媒</td>',
              '</tr>',
            '</table>',
          '</div>',
        '</div>'
      ].join('')
    }, {
      issue : '贰期基金',
      name : '磐霖平安股权投资基金',
      description : [
        '<div class="found-wrapper">',
          '<table class="content-column-left">',
            '<tr><td>基金名称：</td><td>磐霖平安股权投资基金</td></tr>',
            '<tr><td>投资周期：</td><td>2010年至2015年</td></tr>',
            '<tr><td>投资项目：</td><td>东方时尚、八达园林、凯普生物、康泰生物等</td></tr>',
          '</table>',

          '<div class="content-column-right">',
            '<p>投资行业分布：</p>',
            '<table class="chart distribution">',
              '<tr>',
                '<td width="17%" style="background-color:rgb(180,6,12)">17%</td>',
                '<td width="48%" style="background-color:rgb(199,99,103)">48%</td>',
                '<td width="34%"  style="background-color:rgb(178,53,55)">34%</td>',
              '</tr>',
              '<tr>',
                '<td>培训教育</td>',
                '<td>医疗健康</td>',
                '<td>城市园林绿化</td>',
              '</tr>',
            '</table>',
          '</div>',
        '</div>'
      ].join('')
    }, {
      issue : '叁期基金',
      name : '磐霖盛泰股权投资基金',
      description : [
        '<div class="found-wrapper">',
          '<table class="content-column-left">',
            '<tr><td>基金名称：</td><td>磐霖盛泰股权投资基金</td></tr>',
            '<tr><td>投资周期：</td><td>2011年至2016年</td></tr>',
            '<tr><td>投资项目：</td><td>康泰生物、爱德牛业、德勤集团、盛世骄阳等</td></tr>',
          '</table>',

          '<div class="content-column-right">',
            '<p>投资行业分布：</p>',
            '<table class="chart distribution">',
              '<tr>',
                '<td width="49%" style="background-color:rgb(180,6,12)">49%</td>',
                '<td width="11%" style="background-color:rgb(199,99,103)">11%</td>',
                '<td width="18%"  style="background-color:rgb(178,53,55)">18%</td>',
                '<td width="23%" style="background-color:rgb(208,145,148)">23%</td>',
              '</tr>',
              '<tr>',
                '<td>医疗健康</td>',
                '<td>现代农业</td>',
                '<td>航运/现代物流</td>',
                '<td>文化传媒</td>',
              '</tr>',
            '</table>',
          '</div>',
        '</div>'
      ].join('')
    }, {
      issue : '肆期基金',
      name : '磐霖丹阳股权投资基金',
      description : [
        '<div class="found-wrapper">',
          '<table class="content-column-left">',
            '<tr><td>基金名称：</td><td>磐霖丹阳股权投资基金</td></tr>',
            '<tr><td>投资周期：</td><td>2012年至2017年</td></tr>',
            '<tr><td>投资项目：</td><td>华杉环保、康泰生物、德易东方、华夏滤园、赛安生物等</td></tr>',
          '</table>',

          '<div class="content-column-right">',
            '<p>投资行业分布：</p>',
            '<table class="chart distribution">',
              '<tr>',
                '<td width="72%" style="background-color:rgb(180,6,12)">72%</td>',
                '<td width="28%" style="background-color:rgb(199,99,103)">28%</td>',
              '</tr>',
              '<tr>',
                '<td>医疗健康</td>',
                '<td>节能环保</td>',
              '</tr>',
            '</table>',
          '</div>',
        '</div>'
      ].join('')
    }, {
      issue : '伍期基金',
      name : '磐霖仟源股权投资基金',
      description : [
        '<div class="found-wrapper">',
          '<table class="content-column-left">',
            '<tr><td>基金名称：</td><td>磐霖仟源股权投资基金</td></tr>',
            '<tr><td>投资周期：</td><td>2015年至2020年</td></tr>',
            '<tr><td>投资行业分</td><td>布：投资组合尚在进行中</td></tr>',
          '</table>',
        '</div>'
      ].join('')
    }, {
      issue : '陆期基金',
      name : '磐霖滨海医疗健康股权投资基金'
    }];
    return new Backbone.Collection(data);
  });


  PanlinCap.reqres.setHandler('topics:fetch', function() {
    var data = [{
      title : '关于磐霖',
      description : '上海磐霖资产管理有限公司是专业的人民币私募股权投资基金（以下简称PE基金）的投资管理平台, 主要从事未上市企业的股权投资和投资后的资产管理...',
      link : '/about'
    }, {
      title : '投资理念',
      description : '核心投资理念 –- “快乐投资”<br>差异化投资模式 –- “专业创造价值”',
      link : '/investment'
    }, {
      title : '核心团队',
      description : '管理团队结构合理，<br>核心成员的能力资源相得益彰...',
      link : '/team'
    }, {
      title : '投资案例',
      description : '我们既有已在创业板首批上市的成功投资案例，也有已经入股而预期在三年内上市的项目...',
      link : '/cases'
    }];

    return new Backbone.Collection(data);
  });


  PanlinCap.reqres.setHandler('members:fetch', function() {

    var data = [{
      id : 1,
      name : '李宇辉',
      title : '磐霖资本主管合伙人、执行董事',
      avatar : '/images/team/李宇辉.jpg',
      descriptions : [
        '<p>毕业于华中科技大学和西南财经大学，拥有工学学士和经济学硕士学位，具有20年的中国资本市场投资及投资银行业务管理经验。</p>',
        '<p>李宇辉先生是中国最大的户外运动产品零售商北京探路者（300005）的A轮主导投资人，该公司于2009年在创业板首批上市；是中国从事固废治理和土壤修复的龙头企业北京高能环境（603588）的A轮主导投资人，该公司荣获清科集团“2012年中国最具投资价值企业50强”第一名。</p>',
        '<p>作为磐霖资本的创始合伙人，李宇辉先生长期从事国内资本市场的投资，在私募股权投资领域具有独到的投资理念和系列化的成功案例，专注投资于消费升级、医疗健康和节能环保产业，先后主持投资了探路者、东方时尚、高能时代、深圳康泰、广东凯普、盛世骄阳、湖南瑞翔等PE项目，取得优秀的投资业绩。</p>'
        //'<p>在创立磐霖资本前，李宇辉先生在国内一线投行工作了10年，曾先后担任君安证券投资银行总部高级经理、君安证券国际业务部总经理助理、国泰君安证券国际业务部业务董事、东北证券投资银行总部副总经理、健桥证券投资银行总部总经理，具有资深的投行专业服务和管理经验。</p>',
        //'<p>基于多年的投行经历，李宇辉先生拥有广泛的项目来源、专业判断和项目争取、谈判和后续管理能力，善于整合业务资源及协调所有项目参与方的关系，在投资成为公司股东后能有效推动公司规范化运作和主导公司上市及并购事宜。</p>',
      ].join('')
    }, {
      id : 2,
      name : '王利波',
      title : '磐霖资本管理合伙人',
      avatar : '/images/team/王利波.jpg',
      descriptions : [
        '<p>毕业于东北财经大学和澳大利亚麦考理大学，拥有经济学学士和会计学硕士学位，具有超过16年的中国资本市场投资及专业服务经验。</p>',
        '<p>王利波先生从事私募股权投资行业以来，专注于投资医疗健康和现代农业产业，先后主持投资了爱德牛业、创新生物等PE项目，参与了高能时代、东方时尚、康泰生物、盛世骄阳等项目，并担任盛世骄阳的监事、德易东方的监事及康泰生物的董事会观察员。</p>',
        '<p>在联合创立磐霖资本前，王利波先生曾先后担任中洲会计师事务所部门经理、健桥证券投资银行总部业务董事、澳华黄金矿业财务总监助理等职务，具有资深的会计专业服务和管理经验。</p>'
        //'<p>在联合创立磐霖资本前，王利波先生曾先后担任中洲会计师事务所部门经理、健桥证券投资银行总部业务董事、澳华黄金矿业财务总监助理等职务，具有资深的会计专业服务和管理经验。</p>',
      ].join('')
    }, {
      id : 3,
      name : '谭惠东',
      title : '磐霖资本合伙人',
      avatar : '/images/team/谭惠东.jpg',
      descriptions : [
        '<p>毕业于华东师范大学，拥有经济学学士学位。具有20年的资产管理经验和证券二级市场投资管理经验。</p>',
        '<p>作为磐霖资本的合伙人，谭惠东先生长期从事国内资本市场的投资，熟悉金融市场和企业运营，擅长行业分析，尤其对节能环保及医疗健康领域的企业价值和公司治理有深入研究和理解，在成就企业价值过程中发挥较大作用。先后投资了佳宇资源、北京高能、深圳康泰、广东凯普等PE项目，获得了良好的投资业绩。谭惠东先生同时还担任广东凯普董事会观察员、江苏佳宇执行管理委员会委员。</p>',
        '<p>在联合创立磐霖资本前，谭惠东先生曾在光大国际信托投资公司，光大证券，首创期货公司担任投资管理工作，负责运作并管理基金的投资。具有资深的国内资本市场特别是证券二级市场投资管理经验。</p>'
        //'<p>基于多年的丰富投资经验，谭惠东先生具有丰富的专业投资及项目管理经验，熟悉资本运作与企业运营管理，擅长企业资源整合，提升企业价值。拥有对国内资本市场的敏锐性和洞察力，并在机构投资者中拥有广泛的社会资源和人脉。</p>',
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
        '<p>唐爱民先生拥有丰富的医疗健康产业专业知识和经营经验，对医疗健康的重要细分领域有深入的研究和心得；在医疗器械、生物医药、诊断试剂、原料药等诸多领域建立了广泛的客户关系和潜在的项目积累。在投资对象寻找、目标筛选、尽职调查、风险控制方面拥有相当专业的判断能力。</p>'
        //'<p>唐爱民先生还曾参与管理多家企业的整体经营运作与团队建设工作，曾以创始合伙人身份建立上海百祥生物科技有限公司，组建了生产、销售体外诊断试剂的团队和市场网络。</p>'
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
    }, {
      id : 7,
      name : '安琦莉',
      title : '磐霖资本股权投资基金管理经理',
      avatar : '/images/team/安琦莉.jpg',
      descriptions : [
        '<p>安琦莉女士将负责基金事务的具体执行。</p>',
        '<p>安琦莉女士毕业于上海师范大学，拥有计算机学士学位。曾任上海乾隆网络科技股份有限公司港股部经理，拥有近十年的金融相关行业销售服务经验，与基金公司、香港券商、资产管理公司等机构合作，拓展和维护中高端客户。</p>'
      ].join('')
    }, {
      id : 8,
      name : '黄晓山',
      title : '磐霖资本基金市场总监',
      avatar : '/images/team/黄晓山.jpg',
      descriptions : [
        '<p>黄晓山先生将负责基金资金募集的具体实施。</p>',
        '<p>黄晓山先生毕业于华东师范大学，拥有经济学学士学位。曾于信达证券、东方汇金期货公司等机构担任营销管理工作，具有多年的金融市场营销管理经验和证券市场投资管理经验。</p>',
        '<p>黄晓山先生长期从事营销管理工作，善于处理投资者关系、挖掘高净值客户、建立销售渠道、管理销售团队，具有策划、组织、实施基金募集活动的丰富经验。</p>'
      ].join('')
    }, {
      id : 9,
      name : '缪波',
      title : '磐霖资本投资经理',
      avatar : '/images/team/缪波.jpg',
      descriptions : [
        '<p>毕业于上海复旦大学和美国纽约大学，拥有统计学学士学位和应用数学硕士学位。</p>',
        '<p>缪波先生专注于医疗健康和节能环保领域的深度挖掘，已先后参与德易东方、康泰生物、华杉环保等多个PE/VC项目的投资和投后管理。</p>',
        '<p>缪波先生曾先后在浙商证券、杭州市农业银行等参与相关工作，熟悉国内资本市场运作，具备优秀的宏观经济、行业或上市公司的洞察力和分析能力。</p>'
      ].join('')
    }, {
      id : 10,
      name : '孙颖',
      title : '磐霖资本投资经理',
      avatar : '/images/team/孙颖.jpg',
      descriptions : [
        '<p>毕业于哈尔滨工业大学和上海生物制品研究所，拥有生物工程学士和基础医学硕士学位。</p>',
        '<p>孙颖先生专注于医疗健康领域的投资和资源整合。加入磐霖资本前，曾任职上海盛宇股权投资基金管理有限公司投资经理，善于挖掘和筛选一二级投资市场医疗领域项目，尤其是在IVD行业和生物制药行业拥有专业的判断力和分析能力。</p>'
      ].join('')
    }, {
      id : 11,
      name : '王超',
      title : '磐霖资本医疗健康产业研究员',
      avatar : '/images/team/王超.jpg',
      descriptions : [
        '<p>毕业于浙江大学和中国科学院研究生院，获生物信息学学士和生物医药硕士学位，期间以生物医药研发和计算信息技术的结合为主要研究方向。</p>',
        '<p>加入磐霖资本前，曾任职上海集博投资管理咨询有限公司（GBI Health）助理总监、产品经理，及北京东胜创新生物技术有限公司销售代表，经历多年移动医疗产品开发、医疗健康行业咨询、行业情报决策产品（SOURCE）开发，服务客户包括20余家在华大中型跨国药企如Sanofi、Eli Lily、Roche、Bayer Tech等，业务后期并拓展至拉美、巴西等地区，对医疗医药行业有较深的认知。</p>'
      ].join('')
    }, {
      id : 12, 
      name : '张寅',
      title : '磐霖资本医疗健康投资副总监',
      avatar : '/images/team/张寅.jpg',
      descriptions : [
        '<p>毕业于浙江大学，拥有医学硕士学位，具有5年医疗临床工作经验和8年中国资本市场研究投资经验。</p>',
        '<p>张寅先生曾在浙江大学附属第二医院、上海市东方医院从事口腔颌面外科临床和科研工作，并承担同济大学口腔医学系学生的临床实习带教。</p>',
        '<p>之后先后担任申银万国证券研究所、中银国际证券研究部医药行业分析师，东吴基金研究部副总经理。专注于医药行业及上市公司研究，撰写过大量研究报告，深入研究并成功发掘了大量医疗健康产业上市公司投资机会，促成基金重仓买入并获得较高超额收益。在东吴基金担任研究部副总经理期间，还负责研究报告审核，新入职研究员培训，参与部门制度拟定和研究员晋升考核。</p>'
        //'<p>基于多年的医疗健康产业和资本市场投资研究经历，张寅先生积累了丰富的医疗行业、上市公司和专业投资研究机构的人脉资源，对医疗健康产业各细分领域的发展趋势、运行规律以及企业投资价值判断有较深刻的理解。</p>'
      ].join('')
    }];

    return new Backbone.Collection(data);
  });

})(PanlinCap, Marionette, Backbone);
