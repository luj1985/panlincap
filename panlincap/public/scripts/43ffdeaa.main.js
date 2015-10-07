this.PanlinCapTpl=this.PanlinCapTpl||{},this.PanlinCapTpl["templates/business-plan.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<div class="myplan">\n  <h3>上传您的商业计划书至：</h3>\n\n  <a href="mailto:master@panlincap.com" class="email">master@panlincap.com</a>\n\n</div>'},useData:!0}),this.PanlinCapTpl["templates/case/case.hbs"]=Handlebars.template({1:function(a,b,c,d){var e,f=b.helperMissing,g="function",h=this.escapeExpression;return'        <a target="_blank" href="'+h((e=null!=(e=b.website||(null!=a?a.website:a))?e:f,typeof e===g?e.call(a,{name:"website",hash:{},data:d}):e))+'">'+h((e=null!=(e=b.website||(null!=a?a.website:a))?e:f,typeof e===g?e.call(a,{name:"website",hash:{},data:d}):e))+"</a>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="content-wrapper">\n  <div class="content-body case">\n    <a href="#" class="close">&times;</a>\n    <div class="case-preview">\n      <img src="'+i((f=null!=(f=b.logo||(null!=a?a.logo:a))?f:g,typeof f===h?f.call(a,{name:"logo",hash:{},data:d}):f))+'" />\n      <h4>'+i((f=null!=(f=b.name||(null!=a?a.name:a))?f:g,typeof f===h?f.call(a,{name:"name",hash:{},data:d}):f))+"</h4>\n"+(null!=(e=b["if"].call(a,null!=a?a.website:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'      <p class="description">'+(null!=(f=null!=(f=b.description||(null!=a?a.description:a))?f:g,e=typeof f===h?f.call(a,{name:"description",hash:{},data:d}):f)?e:"")+"</p>\n    </div>\n  </div>\n</div>"},useData:!0}),this.PanlinCapTpl["templates/found-detail.hbs"]=Handlebars.template({1:function(a,b,c,d){var e;return"        <tr><td>投资周期：</td><td>"+this.escapeExpression((e=null!=(e=b.period||(null!=a?a.period:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"period",hash:{},data:d}):e))+"</td></tr>\n"},3:function(a,b,c,d){var e;return"        <tr><td>投资项目：</td><td>"+this.escapeExpression((e=null!=(e=b.company||(null!=a?a.company:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"company",hash:{},data:d}):e))+"</td></tr>\n"},5:function(a,b,c,d){var e;return"        <tr><td></td><td>"+this.escapeExpression((e=null!=(e=b.statusMsg||(null!=a?a.statusMsg:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"statusMsg",hash:{},data:d}):e))+"</td></tr>\n"},7:function(a,b,c,d){var e;return'        <p>投资行业分布：</p>\n        <table class="chart distribution">\n          <tr class="bar">\n'+(null!=(e=b.each.call(a,null!=a?a.portfolio:a,{name:"each",hash:{},fn:this.program(8,d,0),inverse:this.noop,data:d}))?e:"")+'          </tr>\n          <tr class="caption">\n'+(null!=(e=b.each.call(a,null!=a?a.portfolio:a,{name:"each",hash:{},fn:this.program(10,d,0),inverse:this.noop,data:d}))?e:"")+"          </tr>\n        </table>\n"},8:function(a,b,c,d){var e,f=b.helperMissing,g="function",h=this.escapeExpression;return'            <td width="'+h((e=null!=(e=b.percentage||(null!=a?a.percentage:a))?e:f,typeof e===g?e.call(a,{name:"percentage",hash:{},data:d}):e))+'%" style="background-color:'+h((e=null!=(e=b.color||(null!=a?a.color:a))?e:f,typeof e===g?e.call(a,{name:"color",hash:{},data:d}):e))+'">'+h((e=null!=(e=b.percentage||(null!=a?a.percentage:a))?e:f,typeof e===g?e.call(a,{name:"percentage",hash:{},data:d}):e))+"%</td>\n"},10:function(a,b,c,d){var e;return"            <td>"+this.escapeExpression((e=null!=(e=b.area||(null!=a?a.area:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"area",hash:{},data:d}):e))+"</td>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="content-wrapper">\n  <div class="content-body found">\n    <a href="#" class="close">&times;</a>\n    <h3>'+i((f=null!=(f=b.issue||(null!=a?a.issue:a))?f:g,typeof f===h?f.call(a,{name:"issue",hash:{},data:d}):f))+"</h3>\n    <h4>"+i((f=null!=(f=b.name||(null!=a?a.name:a))?f:g,typeof f===h?f.call(a,{name:"name",hash:{},data:d}):f))+'</h4>\n    <div class="found-wrapper">\n      <table class="content-column-left">\n        <tr><td>基金名称：</td><td>'+i((f=null!=(f=b.name||(null!=a?a.name:a))?f:g,typeof f===h?f.call(a,{name:"name",hash:{},data:d}):f))+"</td></tr>\n"+(null!=(e=b["if"].call(a,null!=a?a.period:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+"\n"+(null!=(e=b["if"].call(a,null!=a?a.company:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+"\n"+(null!=(e=b["if"].call(a,null!=a?a.statusMsg:a,{name:"if",hash:{},fn:this.program(5,d,0),inverse:this.noop,data:d}))?e:"")+'      </table>\n\n      <div class="content-column-right">\n'+(null!=(e=b["if"].call(a,null!=a?a.portfolio:a,{name:"if",hash:{},fn:this.program(7,d,0),inverse:this.noop,data:d}))?e:"")+"      </div>\n    </div>\n  </div>\n</div>"},useData:!0}),this.PanlinCapTpl["templates/home.hbs"]=Handlebars.template({1:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="topic topic-'+i((f=null!=(f=b.index||d&&d.index)?f:g,typeof f===h?f.call(a,{name:"index",hash:{},data:d}):f))+'">\n  <div class="inner">\n    <h2 class="header">'+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:g,typeof f===h?f.call(a,{name:"title",hash:{},data:d}):f))+'</h2>\n    <div class="content">'+(null!=(f=null!=(f=b.description||(null!=a?a.description:a))?f:g,e=typeof f===h?f.call(a,{name:"description",hash:{},data:d}):f)?e:"")+'</div>\n    <a href="'+i((f=null!=(f=b.link||(null!=a?a.link:a))?f:g,typeof f===h?f.call(a,{name:"link",hash:{},data:d}):f))+'" class="more"> + 更多</a>\n  </div>\n</div>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e;return null!=(e=b.each.call(a,null!=a?a.items:a,{name:"each",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:""},useData:!0}),this.PanlinCapTpl["templates/news/detail.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="detail">\n<h3>'+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:g,typeof f===h?f.call(a,{name:"title",hash:{},data:d}):f))+"</h3>\n<h4>发布时间: "+i((f=null!=(f=b.date||(null!=a?a.date:a))?f:g,typeof f===h?f.call(a,{name:"date",hash:{},data:d}):f))+' 已经浏览[<span class="count">'+i((f=null!=(f=b.count||(null!=a?a.count:a))?f:g,typeof f===h?f.call(a,{name:"count",hash:{},data:d}):f))+"</span>]次</h4>\n<div>\n"+(null!=(f=null!=(f=b.body||(null!=a?a.body:a))?f:g,e=typeof f===h?f.call(a,{name:"body",hash:{},data:d}):f)?e:"")+"\n</div>\n</div>"},useData:!0}),this.PanlinCapTpl["templates/news/news.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<h4><a href="#/news/'+i((f=null!=(f=b.category||(null!=a?a.category:a))?f:g,typeof f===h?f.call(a,{name:"category",hash:{},data:d}):f))+"/"+i((f=null!=(f=b.id||(null!=a?a.id:a))?f:g,typeof f===h?f.call(a,{name:"id",hash:{},data:d}):f))+'">'+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:g,typeof f===h?f.call(a,{name:"title",hash:{},data:d}):f))+"</a></h4>\n<p>"+(null!=(f=null!=(f=b.descriptions||(null!=a?a.descriptions:a))?f:g,e=typeof f===h?f.call(a,{name:"descriptions",hash:{},data:d}):f)?e:"")},useData:!0}),this.PanlinCapTpl["templates/news/pages.hbs"]=Handlebars.template({1:function(a,b,c,d){return'    <a href="#" class="first">首页</a>\n    <a href="#" class="prev">上一页</a>\n'},3:function(a,b,c,d){return'    <span class="first disabled">首页</span>\n    <span class="prev disabled">上一页</span>\n'},5:function(a,b,c,d){return'  <a href="#" class="next">下一页</a>\n  <a href="#" class="last">尾页</a>\n'},7:function(a,b,c,d){return'  <span class="next disabled">下一页</span>\n  <span class="last disabled">尾页</span>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<ul class="news"></ul>\n<div class="pagination">\n'+(null!=(e=b["if"].call(a,null!=a?a.hasPrev:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.program(3,d,0),data:d}))?e:"")+'  <span class="current">第 '+i((f=null!=(f=b.currentPage||(null!=a?a.currentPage:a))?f:g,typeof f===h?f.call(a,{name:"currentPage",hash:{},data:d}):f))+" / "+i((f=null!=(f=b.totalPage||(null!=a?a.totalPage:a))?f:g,typeof f===h?f.call(a,{name:"totalPage",hash:{},data:d}):f))+" 页</span>\n"+(null!=(e=b["if"].call(a,null!=a?a.hasNext:a,{name:"if",hash:{},fn:this.program(5,d,0),inverse:this.program(7,d,0),data:d}))?e:"")+'</div>\n<div class="vertical pagination">\n  <a href="#" class="scroll up"><i class="fa fa-chevron-circle-up"></i></a>\n  <a href="#" class="scroll down"><i class="fa fa-chevron-circle-down"></i></a>\n</div>\n'},useData:!0}),this.PanlinCapTpl["templates/news/searchnews.hbs"]=Handlebars.template({1:function(a,b,c,d){var e,f=b.helperMissing,g="function",h=this.escapeExpression;return'<li><a href="'+h((e=null!=(e=b.link||(null!=a?a.link:a))?e:f,typeof e===g?e.call(a,{name:"link",hash:{},data:d}):e))+'">'+h((e=null!=(e=b.text||(null!=a?a.text:a))?e:f,typeof e===g?e.call(a,{name:"text",hash:{},data:d}):e))+"</a></li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e;return'<ul class="brief">\n'+(null!=(e=b.each.call(a,null!=a?a.items:a,{name:"each",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'</ul>\n<input type="search" placeholder="关键字检索">\n'},useData:!0}),this.PanlinCapTpl["templates/scroll-indicator.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<div class="collection"></div>\n<div class="vertical pagination">\n  <a href="#" class="scroll up"><i class="fa fa-chevron-circle-up"></i></a>\n  <a href="#" class="scroll down"><i class="fa fa-chevron-circle-down"></i></a>\n</div>'},useData:!0}),this.PanlinCapTpl["templates/team/member.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<img class="avatar" src="'+i((f=null!=(f=b.avatar||(null!=a?a.avatar:a))?f:g,typeof f===h?f.call(a,{name:"avatar",hash:{},data:d}):f))+'" />\n<div class="description">\n  <h4 class="ui header">'+i((f=null!=(f=b.name||(null!=a?a.name:a))?f:g,typeof f===h?f.call(a,{name:"name",hash:{},data:d}):f))+"  "+i((f=null!=(f=b.suffix||(null!=a?a.suffix:a))?f:g,typeof f===h?f.call(a,{name:"suffix",hash:{},data:d}):f))+"</h4>\n  <p>"+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:g,typeof f===h?f.call(a,{name:"title",hash:{},data:d}):f))+"</p>\n  "+(null!=(f=null!=(f=b.description||(null!=a?a.description:a))?f:g,e=typeof f===h?f.call(a,{name:"description",hash:{},data:d}):f)?e:"")+"\n</div>\n"},useData:!0}),this.PanlinCapTpl["templates/team/memberdialog.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="content-wrapper">\n  <div class="content-body member">\n    <a href="#" class="close">&times;</a>\n    <img class="avatar" src="'+i((f=null!=(f=b.avatar||(null!=a?a.avatar:a))?f:g,typeof f===h?f.call(a,{name:"avatar",hash:{},data:d}):f))+'" />\n    <div class="description">\n      <h4 class="ui header">'+i((f=null!=(f=b.name||(null!=a?a.name:a))?f:g,typeof f===h?f.call(a,{name:"name",hash:{},data:d}):f))+"  "+i((f=null!=(f=b.suffix||(null!=a?a.suffix:a))?f:g,typeof f===h?f.call(a,{name:"suffix",hash:{},data:d}):f))+"</h4>\n      <p>"+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:g,typeof f===h?f.call(a,{name:"title",hash:{},data:d}):f))+"</p>\n      "+(null!=(f=null!=(f=b.description||(null!=a?a.description:a))?f:g,e=typeof f===h?f.call(a,{name:"description",hash:{},data:d}):f)?e:"")+"\n    </div>\n  </div>\n</div>\n"},useData:!0}),this.PanlinCapTpl["templates/team/team.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f=b.helperMissing,g="function",h=this.escapeExpression;return'<a href="#/team/member/'+h((e=null!=(e=b.id||(null!=a?a.id:a))?e:f,typeof e===g?e.call(a,{name:"id",hash:{},data:d}):e))+'" class="card pos-'+h((e=null!=(e=b.position||(null!=a?a.position:a))?e:f,typeof e===g?e.call(a,{name:"position",hash:{},data:d}):e))+'">\n  <img src="'+h((e=null!=(e=b.avatar||(null!=a?a.avatar:a))?e:f,typeof e===g?e.call(a,{name:"avatar",hash:{},data:d}):e))+'" />\n  <div class="member">\n    <h4>'+h((e=null!=(e=b.name||(null!=a?a.name:a))?e:f,typeof e===g?e.call(a,{name:"name",hash:{},data:d}):e))+"</h4>\n  </div>\n</a>"},useData:!0}),PanlinCap.module("PanlinCap.Layout",function(a,b,c,d){"use strict";a.ScrollView=d.CompositeView.extend({template:PanlinCapTpl["templates/scroll-indicator.hbs"],childViewContainer:".collection",onRender:function(){function a(){d.animate({scrollTop:"-=50"},"normal","linear",a)}function b(){d.animate({scrollTop:"+=50"},"normal","linear",b)}function c(){d.stop()}var d=$(".page");this.$(".scroll.up").mousedown(a).mouseup(c),this.$(".scroll.down").mousedown(b).mouseup(c)},events:{"click .scroll.up":function(a){a.preventDefault()},"click .scroll.down":function(a){a.preventDefault()}}})}),PanlinCap.module("PanlinCap.Breadcrumb",function(a,b,c,d){"use strict";var e=d.ItemView.extend({template:Handlebars.compile('<a class="section" href="/#">首页</a>{{#each items}} <i class="fa fa-chevron-right"></i> <a class="section" href="#{{link}}">{{title}}</a>{{/each}}'),className:"breadcrumb"});c.history.on("route",function(){var a=this.getFragment()||"";b.reqres.request("breadcrumb:fetch",a).then(function(a){0===a.length?b.breadcrumbRegion.empty():b.breadcrumbRegion.show(new e({collection:new c.Collection(a)}))}).fail(function(){b.breadcrumbRegion.empty()})})}),PanlinCap.module("PanlinCap.Layout",function(a,b,c,d){"use strict";var e=d.ItemView.extend({template:Handlebars.compile('{{#each items}}<li><a href="#{{link}}">{{title}}</a></li>{{/each}}'),tagName:"ul",className:"brief"});c.history.on("route",function(){var a=this.getFragment()||"",d=b.reqres.request("submenus:fetch",a);d.then(function(a){a&&a.length>0?b.subRegion.show(new e({collection:new c.Collection(a)})):b.subRegion.empty()}).fail(function(){b.subRegion.empty()})})}),PanlinCap.module("PanlinCap.Layout",function(a,b,c,d){"use strict";a.RevealView=d.ItemView.extend({template:Handlebars.compile('{{{body}}}<a href="{{back}}" class="close">  <i class="fa fa-angle-double-left"></i> 收起</a>'),className:"reveal",initialize:function(){this.listenTo(b.vent,"reveal:active",this.revealView,this),this.listenTo(b.vent,"reveal:hide",this.hideView,this)},hideView:function(){this.$el.removeClass("active")},revealView:function(){this.$el.addClass("active")}})}),function(a){"use strict";a.addRegions({navRegion:"#navigation",contentRegion:"#content",dialogRegion:"#dialog",subRegion:"#submenu",breadcrumbRegion:"#breadcrumb",bgRegion:"#background",bodyRegion:"#body"}),a.isMobile=function(){return"none"===$("#breadcrumb").css("display")},a.on("start",function(){Backbone.history.start({pushState:!1}),Backbone.Intercept.start()})}(PanlinCap),PanlinCap.module("PanlinCap.Menu",function(a,b,c,d,e,f){"use strict";function g(a,b){var c=a.findWhere({link:b});if(c){for(;c.get("parent");)c=a.get(c.get("parent"));return c}var d=f.lastIndexOf(b,"/");return d>0?(b=b.slice(0,d),g(a,b)):null}var h=c.Model.extend({defaults:{parent:null}}),i=c.Collection.extend({model:h,url:"/api/menus"}),j=new i,k=j.fetch();b.reqres.setHandler("menus:fetch",function(a){var b=e.Deferred();return k.then(function(c){var d=f.filter(c,function(b){return b.parent===a});b.resolve(d)}),b}),b.reqres.setHandler("submenus:fetch",function(a){var b=e.Deferred();return k.then(function(){var c="/"===a[0]?a:"/"+a,d=g(j,c);d?b.resolve(j.where({parent:d.id})):b.reject()}),b}),b.reqres.setHandler("breadcrumb:fetch",function(a){var b,c,d=e.Deferred(),g=[];return k.then(function(){var e=a.split("/");for(b=0,c=e.length;c>b;b++){var h=e.slice(0,b+1);h.unshift("");var i=j.findWhere({link:h.join("/")});i&&f.indexOf(["/","/founds"],i.get("link"))<0&&g.push(i)}d.resolve(g)}),d})}),PanlinCap.module("Share",function(a,b,c,d){"use strict";var e=960;a.SplitView=d.ItemView.extend({toggleReveal:function(){this.$(".reveal").toggleClass("active")},triggers:{"click .topic.detail":"expand","click .close":"expand"}}),a.SplitBgView=d.ItemView.extend({updateSeparation:function(){var a=$(window).width(),b=$(window).height(),c=this.$(".left"),d=this.$(".right"),f=(a-e)/2,g=f+160;c.css("clip","rect(0px,"+g+"px,"+b+"px,0px)"),d.css("clip","rect(0px,"+a+"px,"+b+"px,"+g+"px)")},toggleSplit:function(){this.$(".right").toggleClass("split")},initialize:function(){$(window).on("resize",this.updateSeparation)},onRender:function(){this.updateSeparation()},onDestroy:function(){$(window).off("reisze",this.updateSeparation)}})}),PanlinCap.module("Navigation",function(a,b,c,d){"use strict";var e=d.ItemView.extend({template:Handlebars.compile('{{#each items}}<a href="#{{link}}">{{title}}</a>{{/each}}'),className:"menus"});b.addInitializer(function(){b.reqres.request("menus:fetch",null).then(function(a){b.navRegion.show(new e({collection:new c.Collection(a)}))}),$(".mobile.menu.trigger").click(function(){$("body").toggleClass("push")}),$("#navigation").on("click","a",function(){$("body").removeClass("push")}),$("#dimmer").on("click",function(){$("body").removeClass("push")})})}),PanlinCap.module("Background",function(a,b,c,d){"use strict";var e=d.ItemView.extend({template:Handlebars.compile('<div class="slide homebg-1 order-1"></div><div class="slide homebg-2 order-2"></div><div class="slide homebg-3 order-3"></div>'),className:"slides home",onRender:function(){var a=this;this.handler=setInterval(function(){var b=a.$(".slide.order-3"),c=a.$(".slide.order-2");c.animate({left:"-=100%"},{easing:"swing",duration:500}),b.animate({left:"-=100%"},{easing:"swing",duration:500,complete:function(){var b=a.$(".order-3").detach();b.insertBefore(a.$(".slide.order-1")),a.$(".slide").each(function(a){$(this).removeClass("order-1 order-2 order-3").addClass("order-"+(a+1)).removeAttr("style")})}})},7e3)},onDestroy:function(){clearInterval(this.handler)}}),f=d.ItemView.extend({template:Handlebars.compile('<div class="slide"></div><div class="revealbg {{ cls }}"></div>'),initialize:function(a){this.listenTo(b.vent,"reveal:active",this.revealView,this),this.listenTo(b.vent,"reveal:hide",this.hideView,this),this.cfg=a},serializeData:function(){return this.cfg.actived?{cls:"active"}:{}},hideView:function(){this.$(".revealbg").removeClass("active")},revealView:function(){this.$(".revealbg").addClass("active")}});b.commands.setHandler("showBackground",function(a){switch(a){case"home":b.bgRegion.show(new e);break;case"about":case"invest":b.bgRegion.show(new f({className:["slides",a].join(" "),actived:$(".revealbg").hasClass("active")}));break;case"team":case"found":case"news":case"contact":case"cases":b.bgRegion.show(new f({className:["slides",a].join(" ")}))}})}),function(a){"use strict";a.reqres.setHandler("news:fetch",function(){return $.get("/api/article?type=invested")}),a.reqres.setHandler("company-news:fetch",function(){return $.get("/api/article?type=company")}),a.reqres.setHandler("news:detail",function(a){return $.get("/api/article/"+a+".json")}),a.reqres.setHandler("cases:fetch",function(){return $.get("/api/cases")}),a.reqres.setHandler("submenu:fetch",function(a){return $.get("/api/submenus/"+a)}),a.reqres.setHandler("declaration:fetch",function(a){return $.get("/api/declaration/"+a)}),a.reqres.setHandler("founds:fetch",function(){return $.get("/api/founds")}),a.reqres.setHandler("topics:fetch",function(){return $.get("/api/home.json")}),a.reqres.setHandler("members:fetch",function(){return $.get("/api/members")})}(PanlinCap),PanlinCap.module("PanlinCap.Home",function(a,b,c,d){"use strict";var e=d.ItemView.extend({template:PanlinCapTpl["templates/home.hbs"],className:"topics"}),f={showHome:function(){b.reqres.request("topics:fetch").then(function(a){var d=new c.Collection(a);b.bodyRegion.show(new e({collection:d}))}),b.subRegion.empty(),b.execute("showBackground","home")}};a.Controller=f}),PanlinCap.module("PanlinCap.Reveal",function(a,b,c){"use strict";var d=b.module("PanlinCap.Layout"),e={showRevealPage:function(a,e,f){return b.execute("showBackground",e),a?void b.reqres.request("declaration:fetch",a).then(function(a){a.back=f,b.bodyRegion.show(new d.RevealView({model:new c.Model(a)})),b.vent.trigger("reveal:active")}):(b.bodyRegion.empty(),void b.vent.trigger("reveal:hide"))}};a.Controller=e}),PanlinCap.module("PanlinCap.Case",function(a,b,c,d,e,f){"use strict";var g=b.module("PanlinCap.Layout"),h=d.ItemView.extend({template:Handlebars.compile('<div class="company-logo"><div class="logo"></div><p>{{name}}</p></div>'),className:"company column",onRender:function(){var a=this.model;this.$el.on("click",function(){var c=new i({model:a});b.dialogRegion.show(c)}),this.$(".logo").css("background-image","url("+this.model.get("logo")+")")}}),i=d.ItemView.extend({template:PanlinCapTpl["templates/case/case.hbs"],className:"panlin dialog",onShow:function(){this.$el.bPopup({closeClass:"close",opacity:.3,positionStyle:"fixed",amsl:0})}}),j=d.CompositeView.extend({template:Handlebars.compile('{{#if area}}<h4>{{area}}</h4>{{/if}}<div class="companys"></div>'),childView:h,childViewContainer:".companys",className:"area",tagName:"section",initialize:function(){this.collection=new c.Collection(this.model.get("brands"))}}),k=g.ScrollView.extend({childView:j,className:"cases main"}),l={showCases:function(){var a=b.reqres.request("cases:fetch");a.then(function(a){var d=f.chain(a).groupBy("area").map(function(a,b){return{area:b,brands:a}}).value(),e=new c.Collection(d);b.bodyRegion.show(new k({collection:e}))}),b.execute("showBackground","cases")}};a.Controller=l}),PanlinCap.module("PanlinCap.Team",function(a,b,c,d){"use strict";var e=b.module("PanlinCap.Layout"),f=d.ItemView.extend({template:PanlinCapTpl["templates/team/memberdialog.hbs"],className:"panlin dialog",onShow:function(){this.$el.bPopup({closeClass:"close",opacity:.3,amsl:0})}}),g=d.ItemView.extend({template:PanlinCapTpl["templates/team/member.hbs"],className:"panlin member"}),h=d.ItemView.extend({template:PanlinCapTpl["templates/team/team.hbs"],className:"person",onRender:function(){var a=this.model;b.isMobile()||this.$el.click(function(c){c.preventDefault(),b.dialogRegion.show(new f({model:a}))})}}),i=e.ScrollView.extend({childView:h,className:"teams main"}),j={duration:300,easing:"swing"},k=function(){return{showTeam:function(a,d){b.reqres.request("members:fetch").then(function(e){var f=new c.Collection(e);if(b.bodyRegion.show(new i({collection:f})),d){var h=f.get(d);b.bodyRegion.show(new g({model:h}))}else if("partner"===a)$(".page").animate({scrollTop:0},j);else if("members"===a){var k=$(".page .pos-member:first")[0],l=$(k).offset().top-$(".page").offset().top;$(".page").animate({scrollTop:l},j)}}),b.execute("showBackground","team")}}}();a.Controller=k}),PanlinCap.module("PanlinCap.Found",function(a,b,c,d,e,f){"use strict";var g=d.ItemView.extend({template:Handlebars.compile('<div class="inner"><h3>{{issue}}</h3><h4>{{name}}</h4></div>'),className:"found",onRender:function(){var a=this.model;this.$el.on("click",function(){var c=new i({model:a});b.dialogRegion.show(c)})}}),h=d.CollectionView.extend({childView:g,className:"founds"}),i=d.ItemView.extend({template:PanlinCapTpl["templates/found-detail.hbs"],className:"panlin dialog",onShow:function(){this.$el.bPopup({closeClass:"close",opacity:.3,positionStyle:"fixed",amsl:0})}}),j={showFounds:function(){b.subRegion.empty();var a=b.reqres.request("founds:fetch"),d=["rgb(180,6,12)","rgb(199,99,103)","rgb(178,53,55)","rgb(208,145,148)"];a.then(function(a){f.each(a,function(a){var b=a.portfolio,c=a.status;if("building"===c&&(a.statusMsg="正在募集成立中"),b){var e=b.split(",");a.portfolio=f.map(e,function(a,b){var c=a.split(":");return{area:c[0],percentage:parseInt(c[1]),color:d[b]}})}});var e=new c.Collection(a);b.bodyRegion.show(new h({collection:e}))}),b.execute("showBackground","found")}};a.Controller=j}),PanlinCap.module("PanlinCap.News",function(a,b,c,d){"use strict";var e=b.module("PanlinCap.Layout"),f=d.ItemView.extend({template:PanlinCapTpl["templates/news/news.hbs"],tagName:"li"}),g=e.ScrollView.extend({template:PanlinCapTpl["templates/news/pages.hbs"],childView:f,className:"main-container news",childViewContainer:"ul.news",initialize:function(){this.listenTo(this.collection,"reset",this.render)},templateHelpers:function(){var a=this.collection.state;return{hasPrev:this.collection.hasPreviousPage(),hasNext:this.collection.hasNextPage(),currentPage:a.currentPage,totalPage:a.totalPages,pageSize:a.pageSize,items:this.collection.toJSON()}},events:{"click a.first":function(a){a.preventDefault(),this.collection.getFirstPage({success:function(){$(".page").scrollTop(0)},reset:!0})},"click a.prev":function(a){a.preventDefault(),this.collection.hasPreviousPage()&&this.collection.getPreviousPage({success:function(){$(".page").scrollTop(0)},reset:!0})},"click a.next":function(a){a.preventDefault(),this.collection.hasNextPage()&&this.collection.getNextPage({success:function(){$(".page").scrollTop(0)},reset:!0})},"click a.last":function(a){a.preventDefault(),this.collection.getLastPage({success:function(){$(".page").scrollTop(0)},reset:!0})}}}),h=d.ItemView.extend({template:PanlinCapTpl["templates/news/detail.hbs"],className:"main-container news"}),i=c.PageableCollection.extend({url:"/api/article?type=company",state:{currentPage:1,pageSize:10}}),j=c.PageableCollection.extend({url:"/api/article?type=invested"}),k={showNews:function(a,d){if(b.execute("showBackground","news"),d){var e=b.reqres.request("news:detail",d);e.then(function(a){b.bodyRegion.show(new h({model:new c.Model(a)}))})}else if("company"===a){var f=new i;b.bodyRegion.show(new g({collection:f})),f.fetch({reset:!0})}else if("invested"===a){var k=new j;b.bodyRegion.show(new g({collection:k})),k.fetch({reset:!0})}else b.bodyRegion.empty()}};a.Controller=k}),PanlinCap.module("PanlinCap.Contact",function(a,b,c,d){"use strict";var e=d.ItemView.extend({template:PanlinCapTpl["templates/business-plan.hbs"],className:"main-container plan"}),f=d.ItemView.extend({template:Handlebars.compile("{{{body}}}"),className:"main-container plan"}),g={showContacts:function(a,d){b.execute("showBackground","contact");var g=d||a;g?"plan"===g?b.bodyRegion.show(new e):b.reqres.request("declaration:fetch",g).then(function(a){var d=new c.Model(a);b.bodyRegion.show(new f({model:d}))}):b.bodyRegion.empty()}};a.Controller=g}),PanlinCap.module("PanlinCap.Route",function(a,b,c,d){"use strict";b.addInitializer(function(){var a=b.module("PanlinCap.Home").Controller,c=b.module("PanlinCap.Reveal").Controller,e=b.module("PanlinCap.Team").Controller,f=b.module("PanlinCap.Found").Controller,g=b.module("PanlinCap.Case").Controller,h=b.module("PanlinCap.News").Controller,i=b.module("PanlinCap.Contact").Controller,j={showAbout:function(a){return c.showRevealPage(a,"about","#/about")},showInvestment:function(a){return c.showRevealPage(a,"invest","#/investment")},showTeam:e.showTeam.bind(e),showFounds:f.showFounds.bind(f),showCases:g.showCases.bind(g),showNews:h.showNews.bind(h),showContacts:i.showContacts.bind(i),showHome:a.showHome.bind(a)},k=new d.AppRouter({appRoutes:{"(/)":"showHome","about(/:subpage)":"showAbout","investment(/:subpage)":"showInvestment","team(/:subpage)(/:id)":"showTeam","founds(/)":"showFounds","cases(/)":"showCases","news(/:subpage)(/:id)":"showNews","contacts(/:subpage)(/:id)":"showContacts"},controller:j});k.on("route",function(){$(".page").scrollTop(0)})})});