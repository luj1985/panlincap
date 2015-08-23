this.PanlinCapTpl=this.PanlinCapTpl||{},this.PanlinCapTpl["templates/case/case-group.hbs"]=Handlebars.template({1:function(a,b,c,d){var e;return"<h4>"+this.escapeExpression((e=null!=(e=b.area||(null!=a?a.area:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"area",hash:{},data:d}):e))+"</h4>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e;return(null!=(e=b["if"].call(a,null!=a?a.area:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'<div class="brands ui four column grid"></div>'},useData:!0}),this.PanlinCapTpl["templates/case/case.hbs"]=Handlebars.template({1:function(a,b,c,d){var e,f=b.helperMissing,g="function",h=this.escapeExpression;return'        <a target="_blank" href="'+h((e=null!=(e=b.website||(null!=a?a.website:a))?e:f,typeof e===g?e.call(a,{name:"website",hash:{},data:d}):e))+'">'+h((e=null!=(e=b.website||(null!=a?a.website:a))?e:f,typeof e===g?e.call(a,{name:"website",hash:{},data:d}):e))+"</a>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="content-wrapper">\n  <div class="content-body case">\n    <a href="#" class="close">&times;</a>\n    <div class="case-preview">\n      <img src="'+i((f=null!=(f=b.logo||(null!=a?a.logo:a))?f:g,typeof f===h?f.call(a,{name:"logo",hash:{},data:d}):f))+'" />\n      <h4>'+i((f=null!=(f=b.name||(null!=a?a.name:a))?f:g,typeof f===h?f.call(a,{name:"name",hash:{},data:d}):f))+"</h4>\n"+(null!=(e=b["if"].call(a,null!=a?a.website:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'      <p class="description">'+(null!=(f=null!=(f=b.description||(null!=a?a.description:a))?f:g,e=typeof f===h?f.call(a,{name:"description",hash:{},data:d}):f)?e:"")+"</p>\n    </div>\n  </div>\n</div>"},useData:!0}),this.PanlinCapTpl["templates/case/container.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<div class="main-container cases"></div>\n<div class="vertical pagination">\n  <a href="#" class="scroll up"><i class="fa fa-chevron-circle-up"></i></a>\n  <a href="#" class="scroll down"><i class="fa fa-chevron-circle-down"></i></a>\n</div>'},useData:!0}),this.PanlinCapTpl["templates/contact/accouting.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return"<h3>会计</h3>\n<h4>岗位职责：</h4>\n<ol>\n<li>依据公司财务制度规定，进行日常财务核算、帐务处理工作，如：根据原始单据编制会计凭证，确保每笔业务正确性，各项费用支付合理性，帐户处理科学性等；</li>\n<li>负责各项费用的报销审核工作，审核费用报销原始单据的合规性，整理、归集各类原始凭证；</li>\n<li>负责固定资产台帐维护、实物盘点；</li>\n<li>负责管理银行帐户，帐户年检、回单及对帐单，完成银行帐面余额与网上银行各帐户余额核对工作；</li>\n<li>根据记账凭证汇总、编制科目汇总表，根据科目汇总表登记总账，期末，编制资产负债表、利润表、现金流量表；</li>\n<li>按月、季、年度及时进行税务申报及汇算清缴，依法正确计提和上缴各项税费；</li>\n<li>负责公司每月会计凭证、报表及相关账簿的整理、打印及装订，会计档案的整理及保管等工作；</li>\n<li>协调公司与税务、审计机构等外部关系，保持良好的关系；</li>\n<li>对公司金融产品进行成本核算，编制项目成本表，提供相关的成本资料；</li>\n<li>协助财务负责人完成其他所需相关财务报表；</li>\n<li>完成上级交付的其他工作任务，能独立分析问题，解决问题，做好部门间的协调沟通工作配合领导完成其他临时工作。</li>\n</ol>\n\n<h4>任职资格：</h4>\n<ol>\n<li>会计、财务管理、金融等相关专业本科以上学历；</li>\n<li>具有三年以上工作经验，具备金融行业任职经验者优先；</li>\n<li>具有初级以上会计资质，中级职称优先，CPA优先；</li>\n<li>精通国家财税法律规范、财务核算、财务管理、财务分析、财务预测等财务制度和业务，熟悉国家会计法规，了解税务法规和相关税收政策；</li>\n<li>学习能力强，有实际操作经验，能熟练运用主要财务软件；</li>\n<li>工作严谨细致，具有高度的工作责任感和敬业精神，有良好的职业道德和职业操守；</li>\n<li>有较强的沟通协调能力，有良好的纪律性、团队合作精神，能够承受工作压力。会计</li>\n</ol>"},useData:!0}),this.PanlinCapTpl["templates/contact/address.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<h3>上海磐霖资产管理有限公司</h3>\n<table class="address">\n  <tr>\n    <td>公司地址：</td>\n    <td>\n      （中建办公室）上海市浦东新区世纪大道1568号中建大厦1701室<br>\n      <address><a target="_blank" href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D%E4%B8%8A%E6%B5%B7%E5%B8%82%E6%B5%A6%E4%B8%9C%E6%96%B0%E5%8C%BA%E4%B8%96%E7%BA%AA%E5%A4%A7%E9%81%931568%E5%8F%B7%E4%B8%AD%E5%BB%BA%E5%A4%A7%E5%8E%A61701%E5%AE%A4">查看位置</a></address>\n      （长泰办公室）上海市浦东新区世纪大道1589号长泰国际金融大厦1908室\n      <address><a target="_blank" href="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D%E4%B8%8A%E6%B5%B7%E5%B8%82%E6%B5%A6%E4%B8%9C%E6%96%B0%E5%8C%BA%E4%B8%96%E7%BA%AA%E5%A4%A7%E9%81%931589%E5%8F%B7%E9%95%BF%E6%B3%B0%E5%9B%BD%E9%99%85%E9%87%91%E8%9E%8D%E5%A4%A7%E5%8E%A61908%E5%AE%A4">查看位置</a></address>\n    </td>\n    <td rowspan="5"></td>\n  </tr>\n  <tr>\n    <td>邮编：</td>\n    <td>200122</td>\n  </tr>\n  <tr>\n    <td>电话：</td><td>021-61652500</td>\n  </tr>\n  <tr>\n    <td>传真：</td><td>021-61652511</td>\n  </tr>\n  <tr>\n    <td>电子邮件：</td>\n    <td><a href="mailto:master@panlincap.com">master@panlincap.com</a></td>\n  </tr>\n</table>'},useData:!0}),this.PanlinCapTpl["templates/contact/assistant.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return"<h3>行政助理</h3>\n<h4>岗位职责：</h4>\n<ol>\n<li>负责公司电话接听与转接、会议室管理、访客接待；</li>\n<li>负责信函、报刊、文件等的收发、整理、归档；</li>\n<li>协助做好公司职员的差旅安排，包括酒店、票务等预订工作；</li>\n<li>协助做好公司各类会议的筹备、活动的组织、协调和接待工作；</li>\n<li>负责办公室日常办公设备的正常使用、办公用品采购计划制定及物品领取管理的登记和管理、供应商的协调等行政后勤保障工作；</li>\n<li>负责日常资料和数据库的收集、整理和保管工作，负责PE行业新闻与被投公司新闻的搜集；</li>\n<li>在行政主管的领导下，协助企业文化建设相关辅助工作；</li>\n<li>在行政主管的领导下，配合公司业务部门进行其他后勤支持工作，资料整理、文件归档等。</li>\n</ol>\n \n<h4>任职资格：</h4>\n<ol>\n<li>28岁以下，女性；热爱行政工作、细心、耐心；</li>\n<li>大专以上学历，行政管理、经济管理类专业；</li>\n<li>有一年以上行政工作经验，具备基础行政管理知识、文秘管理知识；</li>\n<li>熟练掌握word、excel、ppt、photoshop等办公软件；</li>\n<li>工作态度积极主动、工作认真细致、责任心强，能够承受工作压力；</li>\n<li>热爱金融行业，能高度自律，并能保持高效的工作状态，具有团队合作精神。</li>\n</ol>"},useData:!0}),this.PanlinCapTpl["templates/contact/hire.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<h3>上海磐霖资产管理有限公司招聘启示</h3>\n<p>上海磐霖资产管理有限公司是专业的人民币私募股权投资基金合伙企业(有限合伙)的管理平台，主要从事未上市企业的股权投资和投资后的资产管理。公司以“快乐投资，互信共赢，提升价值，促进上市”为核心投资理念，以助力中国民族经济的发展为己任，专注投资于成长阶段的中国民营企业。</p>\n<p>在中国经济持续高速增长的背景下，我们坚信中国资本市场的未来属于具有核心竞争力并持续创造价值的专业团队，“磐霖”的未来属于与之创造价值的每一个人。</p>\n<p>因此，我们设计了行业领先的合伙人制度、分配体系和发展机会，期待您的加入，共同创造“磐霖”的未来。</p>\n<p>因业务发展需要，公司公开招聘如下岗位人员：</p>\n<table class="hire">\n  <thead>\n    <th>招聘岗位</th>\n    <th>时间</th>\n  </thead>\n  <tbody>\n  <tr>\n    <td><a href="#/contacts/hire/accouting">会计</a></td><td>2015/04/18</td>\n  </tr>\n  <tr>\n    <td><a href="#/contacts/hire/assistant">行政助理</a></td><td>2015/04/18</td>\n  </tr>\n  </tbody>\n</table>\n<p>有意者请将个人简历、近期免冠一寸照及相关资格证书发送至：hr@panlincap.com 或邮寄至上海市浦东新区世纪大道1568号中建大厦1701室，邮编：200122。</p>\n<p>凡适合条件者，我们将以电话方式通知面试。所有个人资料将列入公司人力资源库，恕不退还。谢谢。</p>\n<p>联系人：孙小姐</p>'},useData:!0}),this.PanlinCapTpl["templates/contact/plan.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<div class="myplan">\n  <h3>上传您的商业计划书至：</h3>\n\n  <a href="mailto:master@panlincap.com" class="email">master@panlincap.com</a>\n  <input type="button" value="点击复制" id="copy">\n\n  <div class="actions">\n    <input type="button" value="上传" id="upload">\n    <input type="button" value="取消" id="cancel">\n  </div>\n</div>'},useData:!0}),this.PanlinCapTpl["templates/found/dialog.hbs"]=Handlebars.template({1:function(a,b,c,d){var e;return"        <tr><td>投资周期：</td><td>"+this.escapeExpression((e=null!=(e=b.period||(null!=a?a.period:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"period",hash:{},data:d}):e))+"</td></tr>\n"},3:function(a,b,c,d){var e;return"        <tr><td>投资项目：</td><td>"+this.escapeExpression((e=null!=(e=b.company||(null!=a?a.company:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"company",hash:{},data:d}):e))+"</td></tr>\n"},5:function(a,b,c,d){var e;return"        <tr><td></td><td>"+this.escapeExpression((e=null!=(e=b.statusMsg||(null!=a?a.statusMsg:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"statusMsg",hash:{},data:d}):e))+"</td></tr>\n"},7:function(a,b,c,d){var e;return'        <p>投资行业分布：</p>\n        <table class="chart distribution">\n          <tr class="bar">\n'+(null!=(e=b.each.call(a,null!=a?a.portfolio:a,{name:"each",hash:{},fn:this.program(8,d,0),inverse:this.noop,data:d}))?e:"")+'          </tr>\n          <tr class="caption">\n'+(null!=(e=b.each.call(a,null!=a?a.portfolio:a,{name:"each",hash:{},fn:this.program(10,d,0),inverse:this.noop,data:d}))?e:"")+"          </tr>\n        </table>\n"},8:function(a,b,c,d){var e,f=b.helperMissing,g="function",h=this.escapeExpression;return'            <td width="'+h((e=null!=(e=b.percentage||(null!=a?a.percentage:a))?e:f,typeof e===g?e.call(a,{name:"percentage",hash:{},data:d}):e))+'%" style="background-color:'+h((e=null!=(e=b.color||(null!=a?a.color:a))?e:f,typeof e===g?e.call(a,{name:"color",hash:{},data:d}):e))+'">'+h((e=null!=(e=b.percentage||(null!=a?a.percentage:a))?e:f,typeof e===g?e.call(a,{name:"percentage",hash:{},data:d}):e))+"%</td>\n"},10:function(a,b,c,d){var e;return"            <td>"+this.escapeExpression((e=null!=(e=b.area||(null!=a?a.area:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"area",hash:{},data:d}):e))+"</td>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="content-wrapper">\n  <div class="content-body found">\n    <a href="#" class="close">&times;</a>\n    <h3>'+i((f=null!=(f=b.issue||(null!=a?a.issue:a))?f:g,typeof f===h?f.call(a,{name:"issue",hash:{},data:d}):f))+"</h3>\n    <h4>"+i((f=null!=(f=b.name||(null!=a?a.name:a))?f:g,typeof f===h?f.call(a,{name:"name",hash:{},data:d}):f))+'</h4>\n    <div class="found-wrapper">\n      <table class="content-column-left">\n        <tr><td>基金名称：</td><td>'+i((f=null!=(f=b.name||(null!=a?a.name:a))?f:g,typeof f===h?f.call(a,{name:"name",hash:{},data:d}):f))+"</td></tr>\n"+(null!=(e=b["if"].call(a,null!=a?a.period:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+"\n"+(null!=(e=b["if"].call(a,null!=a?a.company:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+"\n"+(null!=(e=b["if"].call(a,null!=a?a.statusMsg:a,{name:"if",hash:{},fn:this.program(5,d,0),inverse:this.noop,data:d}))?e:"")+'      </table>\n\n      <div class="content-column-right">\n'+(null!=(e=b["if"].call(a,null!=a?a.portfolio:a,{name:"if",hash:{},fn:this.program(7,d,0),inverse:this.noop,data:d}))?e:"")+"      </div>\n    </div>\n  </div>\n</div>"},useData:!0}),this.PanlinCapTpl["templates/home/home.hbs"]=Handlebars.template({1:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="topic topic-'+i((f=null!=(f=b.index||d&&d.index)?f:g,typeof f===h?f.call(a,{name:"index",hash:{},data:d}):f))+'">\n  <div class="inner">\n    <h2 class="header">'+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:g,typeof f===h?f.call(a,{name:"title",hash:{},data:d}):f))+'</h2>\n    <div class="content">'+(null!=(f=null!=(f=b.description||(null!=a?a.description:a))?f:g,e=typeof f===h?f.call(a,{name:"description",hash:{},data:d}):f)?e:"")+'</div>\n    <a href="'+i((f=null!=(f=b.link||(null!=a?a.link:a))?f:g,typeof f===h?f.call(a,{name:"link",hash:{},data:d}):f))+'" class="more"> + 更多</a>\n  </div>\n</div>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e;return null!=(e=b.each.call(a,null!=a?a.items:a,{name:"each",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:""},useData:!0}),this.PanlinCapTpl["templates/news/detail.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="detail">\n<h3>'+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:g,typeof f===h?f.call(a,{name:"title",hash:{},data:d}):f))+"</h3>\n<h4>发布时间: "+i((f=null!=(f=b.date||(null!=a?a.date:a))?f:g,typeof f===h?f.call(a,{name:"date",hash:{},data:d}):f))+' 已经浏览[<span class="count">'+i((f=null!=(f=b.count||(null!=a?a.count:a))?f:g,typeof f===h?f.call(a,{name:"count",hash:{},data:d}):f))+"</span>]次</h4>\n<div>\n"+(null!=(f=null!=(f=b.body||(null!=a?a.body:a))?f:g,e=typeof f===h?f.call(a,{name:"body",hash:{},data:d}):f)?e:"")+"\n</div>\n</div>"},useData:!0}),this.PanlinCapTpl["templates/news/news.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<h4><a href="#/news/detail/'+i((f=null!=(f=b.id||(null!=a?a.id:a))?f:g,typeof f===h?f.call(a,{name:"id",hash:{},data:d}):f))+'">'+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:g,typeof f===h?f.call(a,{name:"title",hash:{},data:d}):f))+"</a></h4>\n<p>"+(null!=(f=null!=(f=b.descriptions||(null!=a?a.descriptions:a))?f:g,e=typeof f===h?f.call(a,{name:"descriptions",hash:{},data:d}):f)?e:"")},useData:!0}),this.PanlinCapTpl["templates/news/pages.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<ul class="news">\n</ul>\n<div class="pagination">\n  <a href="#" class="prev">上一页</a>\n  <a href="#" class="next">下一页</a>\n  <span class="current">第<input type="text" />页</span>\n  <a href="#" class="last">尾页</a>\n</div>\n<div class="vertical pagination">\n  <a href="#" class="scroll up"><i class="fa fa-chevron-circle-up"></i></a>\n  <a href="#" class="scroll down"><i class="fa fa-chevron-circle-down"></i></a>\n</div>\n'},useData:!0}),this.PanlinCapTpl["templates/news/searchnews.hbs"]=Handlebars.template({1:function(a,b,c,d){var e,f=b.helperMissing,g="function",h=this.escapeExpression;return'<li><a href="'+h((e=null!=(e=b.link||(null!=a?a.link:a))?e:f,typeof e===g?e.call(a,{name:"link",hash:{},data:d}):e))+'">'+h((e=null!=(e=b.text||(null!=a?a.text:a))?e:f,typeof e===g?e.call(a,{name:"text",hash:{},data:d}):e))+"</a></li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e;return'<ul class="brief">\n'+(null!=(e=b.each.call(a,null!=a?a.items:a,{name:"each",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'</ul>\n<input type="search" placeholder="关键字检索">\n'},useData:!0}),this.PanlinCapTpl["templates/revealbg.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<div class="slide"></div>\n<div class="revealbg"></div>'},useData:!0}),this.PanlinCapTpl["templates/team/container.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<div class="teams"></div>\n<div class="vertical pagination">\n  <a href="#" class="scroll up"><i class="fa fa-chevron-circle-up"></i></a>\n  <a href="#" class="scroll down"><i class="fa fa-chevron-circle-down"></i></a>\n</div>'},useData:!0}),this.PanlinCapTpl["templates/team/member.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="content-wrapper">\n  <div class="content-body member">\n    <a href="#" class="close">&times;</a>\n    <img class="avatar" src="'+i((f=null!=(f=b.avatar||(null!=a?a.avatar:a))?f:g,typeof f===h?f.call(a,{name:"avatar",hash:{},data:d}):f))+'" />\n    <div class="description">\n      <h4 class="ui header">'+i((f=null!=(f=b.name||(null!=a?a.name:a))?f:g,typeof f===h?f.call(a,{name:"name",hash:{},data:d}):f))+"  "+i((f=null!=(f=b.suffix||(null!=a?a.suffix:a))?f:g,typeof f===h?f.call(a,{name:"suffix",hash:{},data:d}):f))+"</h4>\n      <p>"+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:g,typeof f===h?f.call(a,{name:"title",hash:{},data:d}):f))+"</p>\n      "+(null!=(f=null!=(f=b.description||(null!=a?a.description:a))?f:g,e=typeof f===h?f.call(a,{name:"description",hash:{},data:d}):f)?e:"")+"\n    </div>\n  </div>\n</div>\n"},useData:!0}),this.PanlinCapTpl["templates/team/team.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f=b.helperMissing,g="function",h=this.escapeExpression;return'<img src="'+h((e=null!=(e=b.avatar||(null!=a?a.avatar:a))?e:f,typeof e===g?e.call(a,{name:"avatar",hash:{},data:d}):e))+'" />\n<div class="member">\n  <h4>'+h((e=null!=(e=b.name||(null!=a?a.name:a))?e:f,typeof e===g?e.call(a,{name:"name",hash:{},data:d}):e))+"</h4>\n</div>"},useData:!0}),PanlinCap.module("Layout.Sidebar",function(a,b,c,d){"use strict";a.ScrollView=d.CompositeView.extend({onRender:function(){function a(){d.animate({scrollTop:"-=50"},"normal","linear",a)}function b(){d.animate({scrollTop:"+=50"},"normal","linear",b)}function c(){d.stop()}var d=$(".page");this.$(".scroll.up").mousedown(a).mouseup(c),this.$(".scroll.down").mousedown(b).mouseup(c)},events:{"click .scroll.up":function(a){a.preventDefault()},"click .scroll.down":function(a){a.preventDefault()}}}),a.SidebarLayoutView=d.LayoutView.extend({template:Handlebars.compile('<nav id="breadcrumb"></nav><div class="content-wrapper"><aside id="sidebar"></aside><main id="main"></main></div>'),className:"sidebar-layout",regions:{breadcrumb:"#breadcrumb",sidebar:"#sidebar",main:"#main"}}),a.SidebarView=a.SideMenuView=d.ItemView.extend({template:Handlebars.compile('{{#each items}}<li><a href="{{link}}">{{text}}</a></li>{{/each}}'),tagName:"ul",className:"brief"}),a.RevealView=d.ItemView.extend({template:Handlebars.compile('{{{description}}}<a href="{{back}}" class="close">  <i class="fa fa-angle-double-left"></i> 收起</a>'),className:"reveal",initialize:function(){this.listenTo(b.vent,"reveal:active",this.revealView,this),this.listenTo(b.vent,"reveal:hide",this.hideView,this)},hideView:function(){this.$el.removeClass("active")},revealView:function(){this.$el.addClass("active")}}),a.BreadcrumbView=d.ItemView.extend({template:Handlebars.compile('<a class="section" href="/#">首页</a>{{#each items}} <i class="fa fa-chevron-right"></i> <a class="section" href="{{link}}">{{text}}</a>{{/each}}'),className:"ui breadcrumb"}),a.MainRegionController=d.Controller.extend({initializeLayout:function(c){var d=this.getOption("background");if(!d)throw new Error("must assign background");return(!this.layout||this.layout&&this.layout.isDestroyed)&&(this.layout=new a.SidebarLayoutView(c),b.bodyRegion.show(this.layout),b.execute("showBackground",d)),this.layout}})}),function(a){"use strict";a.addRegions({navRegion:".fixed-header nav",bodyRegion:"#body",dialogRegion:"#dialog",bgRegion:"#background"}),a.on("start",function(){Backbone.history.start({pushState:!1}),Backbone.Intercept.start()})}(PanlinCap),PanlinCap.module("Share",function(a,b,c,d){"use strict";var e=960;a.SplitView=d.ItemView.extend({toggleReveal:function(){this.$(".reveal").toggleClass("active")},triggers:{"click .topic.detail":"expand","click .close":"expand"}}),a.SplitBgView=d.ItemView.extend({updateSeparation:function(){var a=$(window).width(),b=$(window).height(),c=this.$(".left"),d=this.$(".right"),f=(a-e)/2,g=f+160;c.css("clip","rect(0px,"+g+"px,"+b+"px,0px)"),d.css("clip","rect(0px,"+a+"px,"+b+"px,"+g+"px)")},toggleSplit:function(){this.$(".right").toggleClass("split")},initialize:function(){$(window).on("resize",this.updateSeparation)},onRender:function(){this.updateSeparation()},onDestroy:function(){$(window).off("reisze",this.updateSeparation)}})}),PanlinCap.module("Navigation",function(a,b,c,d){"use strict";var e=d.ItemView.extend({template:Handlebars.compile('{{#each items}}<a href="#{{link}}">{{title}}</a>{{/each}}'),className:"navigation"});b.addInitializer(function(){var a=b.reqres.request("menus:fetch");a.then(function(a){var d=new c.Model(a);b.navRegion.show(new e({collection:d}))})})}),PanlinCap.module("Background",function(a,b,c,d){"use strict";var e=d.ItemView.extend({template:Handlebars.compile('<div class="slide homebg-1"></div><div class="slide homebg-2"></div><div class="slide homebg-3"></div>'),className:"slides home"}),f=d.ItemView.extend({template:PanlinCapTpl["templates/revealbg.hbs"],initialize:function(){this.listenTo(b.vent,"reveal:active",this.revealView,this),this.listenTo(b.vent,"reveal:hide",this.hideView,this)},hideView:function(){this.$(".revealbg").removeClass("active")},revealView:function(){this.$(".revealbg").addClass("active")}});b.commands.setHandler("showBackground",function(a){switch(a){case"home":b.bgRegion.show(new e);break;case"about":case"invest":case"team":case"found":case"news":case"contact":case"cases":var c=["slides",a].join(" ");b.bgRegion.show(new f({className:c}))}})}),function(a,b,c){"use strict";a.reqres.setHandler("news:fetch",function(){return $.get("/api/article/invested")}),a.reqres.setHandler("company-news:fetch",function(){return $.get("/api/article/company")}),a.reqres.setHandler("news:detail",function(a){return $.get("/api/article/"+a+".json")}),a.reqres.setHandler("cases:fetch",function(){return $.get("/api/cases")}),a.reqres.setHandler("menus:fetch",function(){return $.get("/api/menus")}),a.reqres.setHandler("founds:fetch",function(){return $.get("/api/founds")}),a.reqres.setHandler("topics:fetch",function(){return $.get("/api/home.json")}),a.reqres.setHandler("members:fetch",function(){return $.get("/api/members")})}(PanlinCap,Marionette,Backbone),PanlinCap.module("Home",function(a,b,c,d){"use strict";var e=d.ItemView.extend({template:PanlinCapTpl["templates/home/home.hbs"],className:"topics"}),f={showHome:function(){var a=b.reqres.request("topics:fetch");a.then(function(a){var d=new c.Collection(a);b.bodyRegion.show(new e({collection:d}))}),b.execute("showBackground","home")}};b.addInitializer(function(){var a=new d.AppRouter({appRoutes:{"(/)":"showHome"},controller:f});a.on("route",function(a,b){$(".page").scrollTop(0)})})}),PanlinCap.module("About",function(a,b,c,d){"use strict";var e=[{text:"磐霖介绍",link:"#/about/panlin"},{text:"我们的优势",link:"#/about/advantage"}],f={back:"#/about",description:["<h2>磐霖介绍</h2>","<p>上海磐霖资产管理有限公司是专业的人民币私募股权投资基金（以下简称PE基金）的投资管理平台, 主要从事未上市企业的股权投资和投资后的资产管理。公司为中国证券投资基金业协会备案登记的私募股权基金管理人（备案登记号：P1000741）。迄今，公司已成功发起成立并管理了七期PE基金，包括一家医疗健康行业创投基金和一家环保产业并购基金。公司连同其管理的PE基金合称磐霖资本。</p>","<p>聚集中国民营资本，助力中国民族经济的发展是磐霖资本的追求。</p>","<p>秉承“专业创造价值”的理念，磐霖资本以在专业技能和行业资源上高度互补的投资管理团队，并以在中国资本市场多个成功退出案例名列人民币PE基金市场领域内的前列。</p>","<p>“快乐投资”是磐霖资本的核心投资理念。磐霖资本依托于医疗健康及节能环保等领域内的专业投资经验，致力于发掘被投资企业价值，通过组合行业资源、提供以上市为标准的管理规范与企业共同创造价值，并通过促进上市或产业并购等投行增值服务帮助企业实现价值，共同成长，分享快乐。 </p>","<p>为此，磐霖资本专注于投资处于成长阶段的中国民营企业，专注于投资医疗健康、节能环保、新的消费模式等新兴行业领域内的创新型企业，以聚焦于高增值可持续的投资机会，并最有效地发挥磐霖资本投资管理团队的专业经验和行业优势。</p>"].join("\n")},g={back:"#/about",description:["<h2>我们的优势</h2>","<h3>优秀的投资业绩</h3>","<p>我们是一家成熟的专业投资机构，先后成功发起和管理了五期基金，给投资人带来了丰厚的投资回报。我们在医疗健康、节能环保、新的消费模式等行业进行了诸多的成功投资，其中探路者、高能环境、东方时尚、康泰生物、凯普生物、骏梦游戏、盛世骄阳等公司都发展成为所在行业的明星企业。</p>","<h3>专业的投资团队</h3>","<p>我们的投资团队具有资深的产业投资、投行、财务及法律事务背景，核心成员均具有至少15年以上专业投资管理经验或顶级投资银行经验，在国内资本市场拥有资深的金融资源，基于超过20个IPO或并购项目的成功实施经验，我们的团队在投资企业后能有效推动企业规范化运作和主导企业上市及并购事宜；同时，我们的医疗、环保专业团队拥有深厚的专业背景和丰富的执业经历，能紧密跟踪产业发展的前沿动态、把握产业发展的未来趋势，提早进行投资布局；丰富的行业资源，为向被投企业提供行业资源组合及投后管理奠定了坚实的基础。</p>","<h3>成熟的投资方法</h3>","<p>磐霖资本定位于成长性投资机构，为此，我们专注于投资处于成长阶段的中国民营企业，专注于投资医疗健康、节能环保、新的消费模式等新兴行业领域内的创新型企业，以聚焦于高增值可持续的投资机会，并最有效地发挥磐霖资本投资管理团队的专业经验和行业优势。 </p>"].join("\n")},h=b.module("Layout.Sidebar"),i=h.MainRegionController.extend({background:"about",showAbout:function(){var a=this.initializeLayout();a.getRegion("main").empty(),a.sidebar.show(new h.SidebarView({collection:new c.Collection(e)})),a.breadcrumb.show(new h.BreadcrumbView({collection:new c.Collection([{text:"关于我们",link:"#/about"}])})),b.vent.trigger("reveal:hide")},showAboutPanlin:function(){var a=this.initializeLayout();a.sidebar.show(new h.SidebarView({collection:new c.Collection(e)})),a.main.show(new h.RevealView({model:new c.Model(f)})),a.breadcrumb.show(new h.BreadcrumbView({collection:new c.Collection([{text:"关于我们",link:"#/about"},{text:"关于磐霖",link:"#/about/panlin"}])})),b.vent.trigger("reveal:active")},showAdvantage:function(){var a=this.initializeLayout();a.sidebar.show(new h.SidebarView({collection:new c.Collection(e)})),a.main.show(new h.RevealView({model:new c.Model(g)})),a.breadcrumb.show(new h.BreadcrumbView({collection:new c.Collection([{text:"关于我们",link:"#/about"},{text:"我们的优势",link:"#/about/advantage"}])})),b.vent.trigger("reveal:active")}});b.addInitializer(function(){var a=new d.AppRouter({appRoutes:{"about(/)":"showAbout","about/panlin(/)":"showAboutPanlin","about/advantage(/)":"showAdvantage"},controller:new i});a.on("route",function(a,b){$(".page").scrollTop(0)})})}),PanlinCap.module("Invest",function(a,b,c,d){"use strict";var e=[{text:"核心理念",link:"#/investment/principle"},{text:"投资策略",link:"#/investment/strategy"},{text:"价值提升机制",link:"#/investment/price"}],f={back:"#/investment",description:["<h2>核心投资理念 – “快乐投资”</h2>","<p>即被投企业获得理念认同和加速成功的快乐；投资人获得共同见证企业的高速成长，与合作伙伴分享财富倍增和事业跃升的快乐；而基金管理人则获得成就卓越、创造共赢、促进民族经济升级和创新的快乐。</p>"].join("\n")},g={back:"#/investment",description:["<h2>投资核心原则</h2>","<p>新兴产业：紧密贴合国家政策所长期支持的产业创新升级的大趋势，精选拥有扎实基础并具备做大做强DNA的创新型民企</p>","<p>扎根价值：从企业的高成长性中寻求高回报</p>","<p>稳健交易：控制投资成本，注重投资组合，力保投资安全</p>","<h2>重点投资领域</h2>","<p>医疗健康、节能环保、新的消费模式等新兴行业领域</p>","<h2>投资阶段</h2>","<p>GC（成长期）为主，VC为辅。</p>"].join("\n")},h={back:"#/investment",description:["<h2>价值提升机制</h2>","<p>整合产业资源：基于专业的投资背景和过往的成功投资经验，我们在重点投资行业积累了丰富的行业资源，能够在被投企业的战略规划、市场开拓、人才引进等方面提供有效的帮助。</p>","<p>导入金融资源：我们将充分发挥自身的投行、财务、法律等方面的资源优势，帮助被投企业在后续融资、财务制度规范、资本运作、上市合规等方面获得明显进步。</p>"].join("\n")},i=b.module("Layout.Sidebar"),j=i.MainRegionController.extend({background:"invest",showInvestment:function(){var a=this.initializeLayout();a.getRegion("main").empty(),a.sidebar.show(new i.SidebarView({collection:new c.Collection(e)})),a.breadcrumb.show(new i.BreadcrumbView({collection:new c.Collection([{text:"投资理念",link:"#/investment"}])})),b.vent.trigger("reveal:hide")},showPrice:function(){var a=this.initializeLayout();a.sidebar.show(new i.SidebarView({collection:new c.Collection(e)})),a.breadcrumb.show(new i.BreadcrumbView({collection:new c.Collection([{text:"投资理念",link:"#/investment"},{text:"价值提升机制",link:"#/investment/price"}])})),a.main.show(new i.RevealView({model:new c.Model(h)})),b.vent.trigger("reveal:active")},showPrinciple:function(){var a=this.initializeLayout();a.sidebar.show(new i.SidebarView({collection:new c.Collection(e)})),a.breadcrumb.show(new i.BreadcrumbView({collection:new c.Collection([{text:"投资理念",link:"#/investment"},{text:"投资核心原则",link:"#/investment/principle"}])})),a.main.show(new i.RevealView({model:new c.Model(f)})),b.vent.trigger("reveal:active")},showStrategy:function(){var a=this.initializeLayout();a.sidebar.show(new i.SidebarView({collection:new c.Collection(e)})),a.breadcrumb.show(new i.BreadcrumbView({collection:new c.Collection([{text:"投资理念",link:"#/investment"},{text:"投资策略",link:"#/investment/strategy"}])})),a.main.show(new i.RevealView({model:new c.Model(g)})),b.vent.trigger("reveal:active")}});b.addInitializer(function(){var a=new d.AppRouter({appRoutes:{"investment(/)":"showInvestment","investment/principle(/)":"showPrinciple","investment/strategy(/)":"showStrategy","investment/price":"showPrice"},controller:new j});a.on("route",function(a,b){$(".page").scrollTop(0)})})}),PanlinCap.module("Case",function(a,b,c,d){"use strict";var e=b.module("Layout.Sidebar"),f=d.ItemView.extend({template:Handlebars.compile('<div class="brand-logo"><div class="logo"></div><p>{{name}}</p></div>'),className:"brand column",onRender:function(){var a=this.model;this.$el.on("click",function(){var c=new g({model:a});b.dialogRegion.show(c)}),this.$(".logo").css("background-image","url("+this.model.get("logo")+")")}}),g=d.ItemView.extend({template:PanlinCapTpl["templates/case/case.hbs"],className:"panlin dialog",onShow:function(){this.$el.bPopup({closeClass:"close",opacity:.3,positionStyle:"fixed",amsl:0})}}),h=d.CompositeView.extend({template:PanlinCapTpl["templates/case/case-group.hbs"],childView:f,childViewContainer:".brands",className:"case-group",tagName:"section",initialize:function(){this.collection=new c.Collection(this.model.get("brands"))}}),i=e.ScrollView.extend({template:PanlinCapTpl["templates/case/container.hbs"],childView:h,childViewContainer:".main-container.cases"}),j=e.SidebarLayoutView.extend({onBeforeShow:function(){var a=this,d=b.reqres.request("cases:fetch");d.then(function(b){var d=_.chain(b).groupBy("area").map(function(a,b){return{area:b,brands:a}}).value(),e=new c.Collection(d);a.main.show(new i({collection:e}))}),this.sidebar.show(new e.SideMenuView({collection:new c.Collection([{text:"投资案例",link:"#/cases"},{text:"重点案例",link:"/cases"}])})),this.breadcrumb.show(new e.BreadcrumbView({collection:new c.Collection([{text:"投资组合",link:"#/cases"}])}))}}),k={showCases:function(){b.bodyRegion.show(new j({className:"sidebar-layout content"})),b.execute("showBackground","cases")}};b.addInitializer(function(){var a=new d.AppRouter({appRoutes:{"cases(/)":"showCases"},controller:k});a.on("route",function(a,b){$(".page").scrollTop(0)})})}),PanlinCap.module("Team",function(a,b,c,d){"use strict";var e=b.module("Layout.Sidebar"),f=[{text:"合伙人",link:"#/team/partner"},{text:"核心团队",link:"#/team/members"}],g=d.ItemView.extend({template:PanlinCapTpl["templates/team/member.hbs"],className:"panlin dialog",onShow:function(){this.$el.bPopup({closeClass:"close",opacity:.3,positionStyle:"fixed",amsl:0})}}),h=d.ItemView.extend({template:PanlinCapTpl["templates/team/team.hbs"],className:"person",onRender:function(){var a=this.model;this.$el.click(function(){b.dialogRegion.show(new g({model:a}))})}}),i=e.ScrollView.extend({template:PanlinCapTpl["templates/team/container.hbs"],childView:h,childViewContainer:".teams"}),j=e.SidebarLayoutView.extend({onBeforeShow:function(){var a=this,d=b.reqres.request("members:fetch");d.then(function(b){var d=new c.Collection(b);a.main.show(new i({collection:d}))}),this.sidebar.show(new e.SideMenuView({collection:new c.Collection(f)})),this.breadcrumb.show(new e.BreadcrumbView({collection:new c.Collection([{text:"核心团队",link:"#/team"}])}))}}),k=function(){return{showTeam:function(){var a=b.reqres.request("members:fetch");a.then(function(a){var d=new c.Collection(a);b.bodyRegion.show(new j({collection:d}))}),b.execute("showBackground","team")},showPartner:function(){this.showTeam(),$(".page").animate({scrollTop:0},{duration:300,easing:"swing"})},showMembers:function(){this.showTeam(),$(".page").animate({scrollTop:640},{duration:300,easing:"swing"})}}}();b.addInitializer(function(){var a=new d.AppRouter({appRoutes:{"team(/)":"showTeam","team/partner(/)":"showPartner","team/members(/)":"showMembers"},controller:k});a.on("route",function(a,b){$(".page").scrollTop(0)})})}),PanlinCap.module("Found",function(a,b,c,d){"use strict";var e=d.ItemView.extend({template:Handlebars.compile('<div class="inner"><h3>{{issue}}</h3><h4>{{name}}</h4></div>'),className:"found",onRender:function(){var a=this.model;this.$el.on("click",function(){var c=new g({model:a});b.dialogRegion.show(c)})}}),f=d.CollectionView.extend({childView:e,className:"founds"}),g=d.ItemView.extend({template:PanlinCapTpl["templates/found/dialog.hbs"],className:"panlin dialog",onShow:function(){this.$el.bPopup({closeClass:"close",opacity:.3,positionStyle:"fixed",amsl:0})}}),h={showFounds:function(){var a=b.reqres.request("founds:fetch"),d=["rgb(180,6,12)","rgb(199,99,103)","rgb(178,53,55)","rgb(208,145,148)"];a.then(function(a){var e=(_.map(a,function(a){var b=a.portfolio,c=a.status;if("building"===c&&(a.statusMsg="正在募集成立中"),b){var e=b.split(",");a.portfolio=_.map(e,function(a,b){var c=a.split(":");return{area:c[0],percentage:parseInt(c[1]),color:d[b]}})}}),new c.Collection(a));b.bodyRegion.show(new f({collection:e}))}),b.execute("showBackground","found")}};b.addInitializer(function(){var a=new d.AppRouter({appRoutes:{"founds(/)":"showFounds"},controller:h});a.on("route",function(a,b){$(".page").scrollTop(0)})})}),PanlinCap.module("News",function(a,b,c,d){"use strict";var e=b.module("Layout.Sidebar"),f=[{text:"被投公司资讯",link:"#/news/invested"},{text:"公司新闻",link:"#/news/company"}],g=d.ItemView.extend({template:PanlinCapTpl["templates/news/news.hbs"],tagName:"li"}),h=e.ScrollView.extend({template:PanlinCapTpl["templates/news/pages.hbs"],childView:g,className:"main-container news",childViewContainer:"ul.news"}),i=d.ItemView.extend({template:PanlinCapTpl["templates/news/searchnews.hbs"]}),j=d.ItemView.extend({template:PanlinCapTpl["templates/news/detail.hbs"],className:"main-container news"}),k=e.SidebarLayoutView.extend({onBeforeShow:function(){this.sidebar.show(new i({collection:new c.Collection(f)}))}}),l={initLayout:function(){return(!this.layout||this.layout&&this.layout.isDestroyed)&&(this.layout=new k({className:"sidebar-layout content"}),b.bodyRegion.show(this.layout),b.execute("showBackground","news")),this.layout},showNews:function(){
var a=this.initLayout();a.getRegion("main").empty(),a.breadcrumb.show(new e.BreadcrumbView({collection:new c.Collection({text:"新闻中心",link:"#/news"})}))},showDetail:function(a){var d=this.initLayout(),f=b.reqres.request("news:detail",a);f.then(function(a){var b=new c.Model(a);d.main.show(new j({model:b}))}),d.breadcrumb.show(new e.BreadcrumbView({collection:new c.Collection({text:"新闻中心",link:"#/news"})}))},showInvestedCompanyNews:function(){var a=this.initLayout(),d=b.reqres.request("news:fetch");d.then(function(b){var d=new c.Collection(b);a.main.show(new h({collection:d}))}),a.breadcrumb.show(new e.BreadcrumbView({collection:new c.Collection([{text:"新闻中心",link:"#/news"},{text:"被投公司新闻",link:"#/news/invested "}])}))},showCompanyNews:function(){var a=this.initLayout(),d=b.reqres.request("company-news:fetch");d.then(function(b){var d=new c.Collection(b);a.main.show(new h({collection:d}))}),a.breadcrumb.show(new e.BreadcrumbView({collection:new c.Collection([{text:"新闻中心",link:"#/news"},{text:"公司新闻",link:"#/news/company "}])}))}};b.addInitializer(function(){var a=new d.AppRouter({appRoutes:{"news(/)":"showNews","news/invested(/)":"showInvestedCompanyNews","news/company(/)":"showCompanyNews","news/detail/:id(/)":"showDetail"},controller:l});a.on("route",function(a,b){$(".page").scrollTop(0)})})}),PanlinCap.module("Contact",function(a,b,c,d){"use strict";var e=b.module("Layout.Sidebar"),f=[{text:"招贤纳士",link:"#/contacts/hire"},{text:"公司地址",link:"#/contacts/address"},{text:"商业计划书",link:"#/contacts/plan"}],g=d.ItemView.extend({template:PanlinCapTpl["templates/contact/address.hbs"],className:"main-container address"}),h=d.ItemView.extend({template:PanlinCapTpl["templates/contact/hire.hbs"],className:"main-container hire"}),i=d.ItemView.extend({template:PanlinCapTpl["templates/contact/accouting.hbs"],className:"main-container hire"}),j=d.ItemView.extend({template:PanlinCapTpl["templates/contact/assistant.hbs"],className:"main-container hire"}),k=d.ItemView.extend({template:PanlinCapTpl["templates/contact/plan.hbs"],className:"main-container plan"}),l=e.MainRegionController.extend({background:"contact",showContacts:function(){var a=this.initializeLayout({className:"sidebar-layout content"});a.getRegion("main").empty(),a.sidebar.show(new e.SidebarView({collection:new c.Collection(f)})),a.breadcrumb.show(new e.BreadcrumbView({collection:new c.Collection([{text:"联系我们",link:"#/contacts"}])}))},showHire:function(){var a=this.initializeLayout({className:"sidebar-layout content"});a.sidebar.show(new e.SidebarView({collection:new c.Collection(f)})),a.breadcrumb.show(new e.BreadcrumbView({collection:new c.Collection([{text:"联系我们",link:"#/contacts"},{text:"招贤纳士",link:"#/contacts/hire"}])})),a.main.show(new h)},showHireAccounting:function(){var a=this.initializeLayout({className:"sidebar-layout content"});a.sidebar.show(new e.SidebarView({collection:new c.Collection(f)})),a.breadcrumb.show(new e.BreadcrumbView({collection:new c.Collection([{text:"联系我们",link:"#/contacts"},{text:"招贤纳士",link:"#/contacts/hire"},{text:"会计",link:"#/contacts/hire/accouting"}])})),a.main.show(new i)},showHireAssistant:function(){var a=this.initializeLayout({className:"sidebar-layout content"});a.sidebar.show(new e.SidebarView({collection:new c.Collection(f)})),a.breadcrumb.show(new e.BreadcrumbView({collection:new c.Collection([{text:"联系我们",link:"#/contacts"},{text:"招贤纳士",link:"#/contacts/hire"},{text:"行政助理",link:"#/contacts/hire/accouting"}])})),a.main.show(new j)},showAddress:function(){var a=this.initializeLayout({className:"sidebar-layout content"});a.sidebar.show(new e.SidebarView({collection:new c.Collection(f)})),a.breadcrumb.show(new e.BreadcrumbView({collection:new c.Collection([{text:"联系我们",link:"#/contacts"},{text:"公司地址",link:"#/contacts/address"}])})),a.main.show(new g)},showPlan:function(){var a=this.initializeLayout({className:"sidebar-layout content"});a.sidebar.show(new e.SidebarView({collection:new c.Collection(f)})),a.breadcrumb.show(new e.BreadcrumbView({collection:new c.Collection([{text:"联系我们",link:"#/contacts"},{text:"商业计划书",link:"#/contacts/plan"}])})),a.main.show(new k)}});b.addInitializer(function(){var a=new d.AppRouter({appRoutes:{"contacts(/)":"showContacts","contacts/hire(/)":"showHire","contacts/hire/accouting(/)":"showHireAccounting","contacts/hire/assistant(/)":"showHireAssistant","contacts/address(/)":"showAddress","contacts/plan(/)":"showPlan"},controller:new l});a.on("route",function(a,b){$(".page").scrollTop(0)})})});