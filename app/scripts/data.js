PanlinCap.reqres.setHandler('topics:fetch', function(page) {
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

  var topics = new Backbone.Collection(data);
  return topics;
});