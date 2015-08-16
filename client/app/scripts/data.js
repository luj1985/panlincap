(function(PanlinCap, Marionette, Backbone) {
  'use strict';

  PanlinCap.reqres.setHandler('news:fetch', function() {
    return $.get('/api/article/invested');
  });

  PanlinCap.reqres.setHandler('company-news:fetch', function() {
    return $.get('/api/article/company');
  });

  PanlinCap.reqres.setHandler('news:detail', function(id) {
    return $.get('/api/article/' + id + '.json');
  });

  PanlinCap.reqres.setHandler('cases:fetch', function() {
    return $.get('/api/cases');
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
            '<tr><td>投资项目：</td><td>高能环境、瑞翔材料、东方时尚、骏梦游戏等</td></tr>',
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
            '<tr><td>投资项目：</td><td>康泰生物、爱德牛业、德勤集团、盛世骄阳、骏梦游戏等</td></tr>',
          '</table>',

          '<div class="content-column-right">',
            '<p>投资行业分布：</p>',
            '<table class="chart distribution">',
              '<tr>',
                '<td width="49%" style="background-color:rgb(180,6,12)">49%</td>',
                '<td width="11%" style="background-color:rgb(199,99,103)">11%</td>',
                '<td width="18%" style="background-color:rgb(178,53,55)">18%</td>',
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
                '<td width="77%" style="background-color:rgb(180,6,12)">77%</td>',
                '<td width="23%" style="background-color:rgb(199,99,103)">23%</td>',
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
            '<tr><td>行业分布：</td><td>投资组合尚在进行中</td></tr>',
          '</table>',
        '</div>'
      ].join('')
    }, {
      issue : '陆期基金',
      name : '磐霖滨海医疗健康股权投资基金',
	    description : [
        '<div class="found-wrapper">',
          '<table class="content-column-left">',
            '<tr><td>基金名称：</td><td>磐霖滨海医疗健康股权投资基金</td></tr>',
            '<tr><td> </td><td> 正在募集成立中</td></tr>',
          '</table>',
        '</div>'
      ].join('')
    }, {
      issue : '柒期基金',
      name : '磐霖高能环保产业基金',
	    description : [
        '<div class="found-wrapper">',
          '<table class="content-column-left">',
            '<tr><td>基金名称：</td><td>磐霖高能环保产业基金</td></tr>',
            '<tr><td> </td><td> 正在募集成立中</td></tr>',
          '</table>',
        '</div>'
      ].join('')
    }];
    return new Backbone.Collection(data);
  });


  PanlinCap.reqres.setHandler('topics:fetch', function() {
    return $.get('/api/home.json');
  });


  PanlinCap.reqres.setHandler('members:fetch', function() {

    var data = [{
      id : 1,
      name : '李宇辉',
      title : '磐霖资本主管合伙人、执行董事',
	  call : '先生',
      avatar : '/images/team/李宇辉.jpg',
      descriptions : [
        '<p>毕业于华中科技大学和西南财经大学，拥有工学学士和经济学硕士学位，清华大学EMBA，具有超过20年的中国资本市场投资及投资银行业务管理经验。</p>',
        '<p>李宇辉先生是中国最大的户外运动产品零售商探路者（300005）的A轮主导投资人，该公司于2009年在创业板首批上市；是中国从事固废治理和土壤修复的龙头企业高能环境（603588）的A轮主导投资人，该公司荣获清科集团“2012年中国最具投资价值企业50强”第一名。</p>',
        '<p>作为磐霖资本的创始合伙人，李宇辉先生长期从事国内资本市场的投资，在私募股权投资领域具有独到的投资理念和系列化的成功案例，专注投资于新的消费模式、医疗健康和节能环保产业，作为项目负责人，先后主持投资了探路者<em>（户外运动产品，300005，A轮主投）</em>、东方时尚<em>（连锁驾驶培训，A轮主投）</em>、盛世骄阳<em>（电视数字版权，已被皇氏集团（002329）吸收合并）</em>、高能环境<em>（固废土壤修复，603588，A轮主投）</em>、华夏滤园<em>（植物生态修复，天使轮主投）</em>、康泰生物<em>（人用二类疫苗，B轮主投）</em>、凯普生物<em>（体外诊断试剂）</em>、赛安生物<em>（肿瘤分子诊断，A轮主投）</em>、瑞博生物<em>（小核酸药物）</em>等PE/VC项目，并主持磐霖东方基金、磐霖平安基金在4年内分别取得超过8倍和5倍的优秀投资业绩。</p>',
        '<p>在创立磐霖资本前，李宇辉先生在国内一线投行工作了10年，曾先后担任君安证券投资银行总部高级经理、君安证券国际业务部总经理助理、国泰君安证券国际业务部业务董事、东北证券投资银行总部副总经理、健桥证券投资银行总部总经理，具有资深的投行专业服务和管理经验，尤其擅长上市公司并购业务。</p>',
        '<p>基于多年的投行经历，李宇辉先生拥有广泛的项目来源、专业判断和项目争取、谈判和后续管理能力，善于整合业务资源及协调所有项目参与方的关系，在投资成为公司股东后能有效推动公司规范化运作和主导公司上市及并购事宜。现任瑞翔新材董事、华夏滤园董事、赛安生物董事、东方时尚监事。</p>'
      ].join('')
    }, {
      id : 2,
      name : '王利波',
      title : '磐霖资本管理合伙人',
	  call : '先生',
      avatar : '/images/team/王利波.jpg',
      descriptions : [
        '<p>毕业于东北财经大学和澳大利亚麦考理大学，拥有经济学学士和会计学硕士学位，具有超过16年的中国资本市场投资及专业服务经验。</p>',
        '<p>王利波先生从事私募股权投资行业以来，专注于投资医疗健康和现代农业产业，先后主持投资了爱德牛业<em>（生物胚胎）</em>、创新生物<em>（无抗生物饲料，A轮主投）</em>等PE项目，参与了高能环境<em>（固废土壤修复，603588，A轮主投）</em>、东方时尚<em>（连锁驾驶培训，A轮主投）</em>、康泰生物<em>（人用二类疫苗，B轮主投）</em>、盛世骄阳<em>（电视数字版权，已被皇氏集团（002329）吸收合并）</em>、德易东方<em>（基因测序，A轮主投）</em>等项目，并担任盛世骄阳的监事、德易东方的监事及康泰生物的董事会观察员。</p>',
        '<p>在联合创立磐霖资本前，王利波先生曾先后担任中洲会计师事务所部门经理、健桥证券投资银行总部业务董事、澳华黄金矿业财务总监助理等职务，具有资深的会计专业服务和管理经验。</p>',
        '<p>王利波先生熟悉国内上市流程和财务操作规范，精通企业会计核算，擅长企业预算管理、资金管理、财务筹划与资本运作相结合，且拥有丰富的内、外部审计的工作经验，为推动公司上市及并购提供有效财务操作支持。</p>'
      ].join('')
    }, {
      id : 3,
      name : '谭惠东',
	  call : '先生',
      title : '磐霖资本合伙人',
      avatar : '/images/team/谭惠东.jpg',
      descriptions : [
        '<p>毕业于华东师范大学，拥有经济学学士学位。具有20年的资产管理经验和证券二级市场投资管理经验。 </p>',
        '<p>作为磐霖资本的合伙人，谭惠东先生长期从事国内资本市场的投资，熟悉金融市场和企业运营，擅长行业分析，尤其对节能环保及医疗健康领域的企业价值和公司治理有深入研究和理解，在成就企业价值过程中发挥较大作用。先后参与投资了佳宇资源<em>（资源综合回收利用）</em>、高能环境<em>（固废土壤修复，603588，A轮主投）</em>、康泰生物<em>（人用二类疫苗，B轮主投）</em>、凯普生物<em>（体外诊断试剂）</em>、华夏滤园<em>（植物生态修复，天使轮主投）</em>等PE项目，获得了良好的投资业绩。谭惠东先生同时还担任广东凯普生物科技股份有限公司董事会观察员、江苏佳宇资源利用股份有限公司执行管理委员会委员、无锡华夏滤园环保科技有限公司监事。</p>',
        '<p>在联合创立磐霖资本前，谭惠东先生曾在光大国际信托投资公司，光大证券，首创期货公司担任投资管理工作，负责运作并管理基金的投资。具有资深的国内资本市场特别是二级市场的运作经验。</p>',
        '<p>基于多年的丰富投资经验，谭惠东先生具有丰富的专业投资及项目管理经验，熟悉资本运作与企业运营管理，擅长企业资源整合，提升企业价值。拥有对国内资本市场的敏锐性和洞察力，并在机构投资者中拥有广泛的社会资源和人脉。</p>'
      ].join('')
    }, {
      id : 4,
      name : '薛孟军',
      call : '先生',
      title : '磐霖资本合伙人',
      avatar : '/images/team/薛孟军.jpg',
      descriptions : [
        '<p>毕业于上海财经大学，拥有经济学学士和中国注册会计师资格。前任时代创业投资总监、健桥证券投资银行总部副总经理、亚商咨询业务董事，具有超过15年投资银行及股权投资业务领域的专业经验。</p>', 
        '<p>薛孟军先生熟悉并能够深刻理解国内资本市场，拥有广泛的人脉资源，在投行领域具备资深的业务经验，了解和熟悉上市公司运作。尤其是在企业并购重组领域具备丰富的操作经验和实战能力，曾作为项目负责人成功完成沪昌特钢、成都华联、东阿阿胶、伊利股份、金丰投资、甘长风、陕长岭等十几家上市公司并购重组案例，均达到预期目的，其中西安高科借壳沪昌特钢涉资数十亿元，是国内资本市场并购重组的经典案例。</p>', 
        '<p>薛孟军先生在环保、消费、TMT领域从事了多年的股权投资工作，在上述领域成功完成多个项目投资，在企业价值判断、尽职调查、投后管理、项目退出、后续融资、财务管理与规范等方面积累了丰富的实战经验，能够帮助被投企业实现快速的价值提升。在磐霖资本， 薛孟军先生先后主持了骏梦游戏<em>（网络游戏，已被富春通信（300299）吸收合并）</em>、华夏滤园<em>（植物生态修复，天使轮主投）</em>、盛诺基<em>（肿瘤创新药，D轮主投）</em>等项目，参与了东方时尚<em>（连锁驾驶培训，A轮主投）</em>、康泰生物<em>（人用二类疫苗，B轮主投）</em>等投资项目，现任无锡华夏滤园环保科技有限公司董事。</p>', 
      ].join('')
    }, {
      id : 5,
      name : '唐爱民',
      call : '先生',
      title : '磐霖资本合伙人',
      avatar : '/images/team/唐爱民.jpg',
      descriptions : [
        '<p>毕业于南开大学和北京大学，拥有生物学硕士学位。前任华澳资本生物医药投资总监、百祥生物董事总经理、中美奥沃公司副总经理等，具有20年以上的中国医药医疗及生物技术产业相关市场经验。</p>',
        '<p>唐爱民先生有丰富的医疗健康行业PE&VC投资经验，先后主持了康泰生物<em>（人用二类疫苗）</em>、新旭发科技<em>（医药设备）</em>的投资，并参与了新产业生物<em>（化学免疫发光）</em>、美诺华药业<em>（原料药）</em>的投资；在磐霖资本，主持了德易东方<em>（基因测序）</em>的A轮主投，参与了赛安生物<em>（肿瘤分子诊断）</em>、盛诺基<em>（肿瘤创新药）</em>、瑞博生物<em>（小核酸药物）</em>的投资，所投资企业均有优异的业绩增长表现。 </p>',
        '<p>唐爱民先生拥有丰富的医疗健康产业专业知识和经营经验，对医疗健康的重要细分领域有深入的研究和心得；在医疗器械、生物医药、诊断试剂、原料药等诸多领域建立了广泛的客户关系和潜在的项目积累。在投资对象寻找、目标筛选、尽职调查、风险控制方面拥有相当专业的判断能力。现任德易东方董事、赛安生物监事。 </p>',
        '<p>唐爱民先生还曾参与管理多家企业的整体经营运作与团队建设工作，曾以创始合伙人身份建立上海百祥生物科技有限公司，组建了生产、销售体外诊断试剂的团队和市场网络。</p>'
      ].join('')
    }, {
      id : 6,
      name : '张越',
      call : '先生',
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
      call : '女士',
      title : '磐霖资本股权投资基金管理经理',
      avatar : '/images/team/安琦莉.jpg',
      descriptions : [
        '<p>安琦莉女士将负责基金事务的具体执行。</p>',
        '<p>安琦莉女士毕业于上海师范大学，拥有计算机学士学位。曾任上海乾隆网络科技股份有限公司港股部经理，拥有近十年的金融相关行业销售服务经验，与基金公司、香港券商、资产管理公司等机构合作，拓展和维护中高端客户。</p>'
      ].join('')
    }, {
      id : 8,
      name : '黄晓山',
    call : '先生',
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
      call : '先生',
      title : '磐霖资本投资经理',
      avatar : '/images/team/缪波.jpg',
      descriptions : [
        '<p>毕业于上海复旦大学和美国纽约大学，拥有统计学学士学位和应用数学硕士学位。</p>',
        '<p>缪波先生专注于医疗健康和节能环保领域的深度挖掘，已先后参与德易东方<em>（基因测序）</em>、康泰生物<em>（人用二类疫苗）</em>、华杉环保<em>（废水处理）</em>、华夏滤园<em>（植物生态修复）</em>等多个PE/VC项目的投资和投后管理。</p>',
        '<p>缪波先生曾先后在浙商证券、杭州市农业银行等参与相关工作，熟悉国内资本市场运作，具备优秀的宏观经济、行业或上市公司的洞察力和分析能力。</p>'
      ].join('')
    }, {
      id : 10,
      name : '孙颖',
      call : '先生',
      title : '磐霖资本投资经理',
      avatar : '/images/team/孙颖.jpg',
      descriptions : [
        '<p>毕业于哈尔滨工业大学和上海生物制品研究所，拥有生物工程学士和基础医学硕士学位。</p>',
        '<p>孙颖先生专注于医疗健康领域的投资和资源整合。加入磐霖资本前，曾任职上海盛宇股权投资基金管理有限公司投资经理，善于挖掘和筛选一二级投资市场医疗领域项目，尤其是在IVD行业和生物制药行业拥有专业的判断力和分析能力。在磐霖资本，先后参与了盛诺基<em>（肿瘤创新药）</em>、瑞博生物<em>（小核酸药物）</em>项目投资。</p>'
      ].join('')
    }, {
      id : 11,
      name : '王超',
      call : '先生',
      title : '磐霖资本医疗健康产业研究员',
      avatar : '/images/team/王超.jpg',
      descriptions : [
        '<p>毕业于浙江大学和中国科学院研究生院，获生物信息学学士和生物医药硕士学位，期间以生物医药研发和计算信息技术的结合为主要研究方向。</p>',
        '<p>加入磐霖资本前，曾任职上海集博投资管理咨询有限公司（GBI Health）助理总监、产品经理，及北京东胜创新生物技术有限公司销售代表，经历多年移动医疗产品开发、医疗健康行业咨询、行业情报决策产品（SOURCE）开发，服务客户包括20余家在华大中型跨国药企如Sanofi、Eli Lily、Roche、Bayer Tech等，业务后期并拓展至拉美、巴西等地区，对医疗医药行业有较深的认知。在磐霖资本，已先后参与德易东方<em>（基因测序）</em>、赛安生物<em>（肿瘤分子诊断）</em>等多个PE/VC项目的投资和投后管理。</p>'
      ].join('')
    }, {
      id : 12, 
      name : '张寅',
      call : '先生',
      title : '磐霖资本医疗健康投资副总监',
      avatar : '/images/team/张寅.jpg',
      descriptions : [
        '<p>毕业于浙江大学，拥有医学硕士学位，具有5年医疗临床工作经验和8年中国资本市场研究投资经验。</p>',
        '<p>张寅先生曾在浙江大学附属第二医院、上海市东方医院从事口腔颌面外科临床和科研工作，之后先后担任申银万国证券研究所、中银国际证券研究部医药行业分析师，东吴基金研究部副总经理。专注于医药行业及上市公司研究，撰写过大量研究报告，深入研究并成功发掘了医疗健康产业多个上市公司投资机会，促成基金重仓买入并获得较高超额收益。在东吴基金担任研究部副总经理期间，还负责研究报告审核，新入职研究员培训，参与部门制度拟定和研究员晋升考核。</p>',
        '<p>基于多年的医疗健康产业和资本市场投资研究经历，张寅先生积累了丰富的医疗行业、上市公司和专业投资研究机构的人脉资源，对医疗健康产业各细分领域的发展趋势、运行规律以及企业投资价值判断有较深刻的理解。</p>',
        '<p>在磐霖资本，参与了赛安生物<em>（肿瘤分子诊断）</em>、盛诺基<em>（肿瘤创新药）</em>的投资，并担任瑞博生物<em>（小核酸药物）</em>项目投资的现场管理。</p>'
      ].join('')
    }, {
      id : 13,
      name : '李新成',
      call : '先生',
      title : '磐霖资本研究助理',
      avatar : '/images/team/李新成.jpg',
      descriptions : [
        '<p>毕业于山东中医药大学和西南财经大学，拥有管理学学士学位和经济学硕士学位。</p>',
        '<p>李新成先生曾在鲁证期货股份有限公司从事商品期货的投资研究，并多次参与地方金融中心建设、金融产业园区规划，具备较强的宏观经济及行业分析能力。在磐霖资本，已先后参与了赛安生物<em>（肿瘤分子诊断）</em>、瑞博生物<em>（小核酸药物）</em>等多个PE/VC项目的投资。</p>'
      ].join('')

    }];

    return new Backbone.Collection(data);
  });

})(PanlinCap, Marionette, Backbone);
