this.PanlinCapTpl=this.PanlinCapTpl||{},this.PanlinCapTpl["templates/case/case-group.hbs"]=Handlebars.template({1:function(a,b,c,d){var e;return"<h4>"+this.escapeExpression((e=null!=(e=b.area||(null!=a?a.area:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"area",hash:{},data:d}):e))+"</h4>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e;return(null!=(e=b["if"].call(a,null!=a?a.area:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'<div class="brands"></div>'},useData:!0}),this.PanlinCapTpl["templates/case/case.hbs"]=Handlebars.template({1:function(a,b,c,d){var e,f=b.helperMissing,g="function",h=this.escapeExpression;return'        <a target="_blank" href="'+h((e=null!=(e=b.website||(null!=a?a.website:a))?e:f,typeof e===g?e.call(a,{name:"website",hash:{},data:d}):e))+'">'+h((e=null!=(e=b.website||(null!=a?a.website:a))?e:f,typeof e===g?e.call(a,{name:"website",hash:{},data:d}):e))+"</a>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="content-wrapper">\n  <div class="content-body case">\n    <a href="#" class="close">&times;</a>\n    <div class="case-preview">\n      <img src="'+i((f=null!=(f=b.logo||(null!=a?a.logo:a))?f:g,typeof f===h?f.call(a,{name:"logo",hash:{},data:d}):f))+'" />\n      <h4>'+i((f=null!=(f=b.name||(null!=a?a.name:a))?f:g,typeof f===h?f.call(a,{name:"name",hash:{},data:d}):f))+"</h4>\n"+(null!=(e=b["if"].call(a,null!=a?a.website:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'      <p class="description">'+(null!=(f=null!=(f=b.description||(null!=a?a.description:a))?f:g,e=typeof f===h?f.call(a,{name:"description",hash:{},data:d}):f)?e:"")+"</p>\n    </div>\n  </div>\n</div>"},useData:!0}),this.PanlinCapTpl["templates/case/container.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<div class="main-container cases"></div>\n<div class="vertical pagination">\n  <a href="#" class="scroll up"><i class="fa fa-chevron-circle-up"></i></a>\n  <a href="#" class="scroll down"><i class="fa fa-chevron-circle-down"></i></a>\n</div>'},useData:!0}),this.PanlinCapTpl["templates/contact/plan.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<div class="myplan">\n  <h3>上传您的商业计划书至：</h3>\n\n  <a href="mailto:master@panlincap.com" class="email">master@panlincap.com</a>\n  <input type="button" value="点击复制" id="copy">\n\n  <div class="actions">\n    <input type="button" value="上传" id="upload">\n    <input type="button" value="取消" id="cancel">\n  </div>\n</div>'},useData:!0}),this.PanlinCapTpl["templates/found/dialog.hbs"]=Handlebars.template({1:function(a,b,c,d){var e;return"        <tr><td>投资周期：</td><td>"+this.escapeExpression((e=null!=(e=b.period||(null!=a?a.period:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"period",hash:{},data:d}):e))+"</td></tr>\n"},3:function(a,b,c,d){var e;return"        <tr><td>投资项目：</td><td>"+this.escapeExpression((e=null!=(e=b.company||(null!=a?a.company:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"company",hash:{},data:d}):e))+"</td></tr>\n"},5:function(a,b,c,d){var e;return"        <tr><td></td><td>"+this.escapeExpression((e=null!=(e=b.statusMsg||(null!=a?a.statusMsg:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"statusMsg",hash:{},data:d}):e))+"</td></tr>\n"},7:function(a,b,c,d){var e;return'        <p>投资行业分布：</p>\n        <table class="chart distribution">\n          <tr class="bar">\n'+(null!=(e=b.each.call(a,null!=a?a.portfolio:a,{name:"each",hash:{},fn:this.program(8,d,0),inverse:this.noop,data:d}))?e:"")+'          </tr>\n          <tr class="caption">\n'+(null!=(e=b.each.call(a,null!=a?a.portfolio:a,{name:"each",hash:{},fn:this.program(10,d,0),inverse:this.noop,data:d}))?e:"")+"          </tr>\n        </table>\n"},8:function(a,b,c,d){var e,f=b.helperMissing,g="function",h=this.escapeExpression;return'            <td width="'+h((e=null!=(e=b.percentage||(null!=a?a.percentage:a))?e:f,typeof e===g?e.call(a,{name:"percentage",hash:{},data:d}):e))+'%" style="background-color:'+h((e=null!=(e=b.color||(null!=a?a.color:a))?e:f,typeof e===g?e.call(a,{name:"color",hash:{},data:d}):e))+'">'+h((e=null!=(e=b.percentage||(null!=a?a.percentage:a))?e:f,typeof e===g?e.call(a,{name:"percentage",hash:{},data:d}):e))+"%</td>\n"},10:function(a,b,c,d){var e;return"            <td>"+this.escapeExpression((e=null!=(e=b.area||(null!=a?a.area:a))?e:b.helperMissing,"function"==typeof e?e.call(a,{name:"area",hash:{},data:d}):e))+"</td>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="content-wrapper">\n  <div class="content-body found">\n    <a href="#" class="close">&times;</a>\n    <h3>'+i((f=null!=(f=b.issue||(null!=a?a.issue:a))?f:g,typeof f===h?f.call(a,{name:"issue",hash:{},data:d}):f))+"</h3>\n    <h4>"+i((f=null!=(f=b.name||(null!=a?a.name:a))?f:g,typeof f===h?f.call(a,{name:"name",hash:{},data:d}):f))+'</h4>\n    <div class="found-wrapper">\n      <table class="content-column-left">\n        <tr><td>基金名称：</td><td>'+i((f=null!=(f=b.name||(null!=a?a.name:a))?f:g,typeof f===h?f.call(a,{name:"name",hash:{},data:d}):f))+"</td></tr>\n"+(null!=(e=b["if"].call(a,null!=a?a.period:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+"\n"+(null!=(e=b["if"].call(a,null!=a?a.company:a,{name:"if",hash:{},fn:this.program(3,d,0),inverse:this.noop,data:d}))?e:"")+"\n"+(null!=(e=b["if"].call(a,null!=a?a.statusMsg:a,{name:"if",hash:{},fn:this.program(5,d,0),inverse:this.noop,data:d}))?e:"")+'      </table>\n\n      <div class="content-column-right">\n'+(null!=(e=b["if"].call(a,null!=a?a.portfolio:a,{name:"if",hash:{},fn:this.program(7,d,0),inverse:this.noop,data:d}))?e:"")+"      </div>\n    </div>\n  </div>\n</div>"},useData:!0}),this.PanlinCapTpl["templates/home/home.hbs"]=Handlebars.template({1:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="topic topic-'+i((f=null!=(f=b.index||d&&d.index)?f:g,typeof f===h?f.call(a,{name:"index",hash:{},data:d}):f))+'">\n  <div class="inner">\n    <h2 class="header">'+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:g,typeof f===h?f.call(a,{name:"title",hash:{},data:d}):f))+'</h2>\n    <div class="content">'+(null!=(f=null!=(f=b.description||(null!=a?a.description:a))?f:g,e=typeof f===h?f.call(a,{name:"description",hash:{},data:d}):f)?e:"")+'</div>\n    <a href="'+i((f=null!=(f=b.link||(null!=a?a.link:a))?f:g,typeof f===h?f.call(a,{name:"link",hash:{},data:d}):f))+'" class="more"> + 更多</a>\n  </div>\n</div>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e;return null!=(e=b.each.call(a,null!=a?a.items:a,{name:"each",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:""},useData:!0}),this.PanlinCapTpl["templates/news/detail.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="detail">\n<h3>'+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:g,typeof f===h?f.call(a,{name:"title",hash:{},data:d}):f))+"</h3>\n<h4>发布时间: "+i((f=null!=(f=b.date||(null!=a?a.date:a))?f:g,typeof f===h?f.call(a,{name:"date",hash:{},data:d}):f))+' 已经浏览[<span class="count">'+i((f=null!=(f=b.count||(null!=a?a.count:a))?f:g,typeof f===h?f.call(a,{name:"count",hash:{},data:d}):f))+"</span>]次</h4>\n<div>\n"+(null!=(f=null!=(f=b.body||(null!=a?a.body:a))?f:g,e=typeof f===h?f.call(a,{name:"body",hash:{},data:d}):f)?e:"")+"\n</div>\n</div>"},useData:!0}),this.PanlinCapTpl["templates/news/news.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<h4><a href="#/news/'+i((f=null!=(f=b.category||(null!=a?a.category:a))?f:g,typeof f===h?f.call(a,{name:"category",hash:{},data:d}):f))+"/"+i((f=null!=(f=b.id||(null!=a?a.id:a))?f:g,typeof f===h?f.call(a,{name:"id",hash:{},data:d}):f))+'">'+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:g,typeof f===h?f.call(a,{name:"title",hash:{},data:d}):f))+"</a></h4>\n<p>"+(null!=(f=null!=(f=b.descriptions||(null!=a?a.descriptions:a))?f:g,e=typeof f===h?f.call(a,{name:"descriptions",hash:{},data:d}):f)?e:"")},useData:!0}),this.PanlinCapTpl["templates/news/pages.hbs"]=Handlebars.template({1:function(a,b,c,d){return'    <a href="#" class="first">首页</a>\n    <a href="#" class="prev">上一页</a>\n'},3:function(a,b,c,d){return'    <span class="first disabled">首页</span>\n    <span class="prev disabled">上一页</span>\n'},5:function(a,b,c,d){return'  <a href="#" class="next">下一页</a>\n  <a href="#" class="last">尾页</a>\n'},7:function(a,b,c,d){return'  <span class="next disabled">下一页</span>\n  <span class="last disabled">尾页</span>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<ul class="news"></ul>\n<div class="pagination">\n'+(null!=(e=b["if"].call(a,null!=a?a.hasPrev:a,{name:"if",hash:{},fn:this.program(1,d,0),inverse:this.program(3,d,0),data:d}))?e:"")+'  <span class="current">第 '+i((f=null!=(f=b.currentPage||(null!=a?a.currentPage:a))?f:g,typeof f===h?f.call(a,{name:"currentPage",hash:{},data:d}):f))+" / "+i((f=null!=(f=b.totalPage||(null!=a?a.totalPage:a))?f:g,typeof f===h?f.call(a,{name:"totalPage",hash:{},data:d}):f))+" 页</span>\n"+(null!=(e=b["if"].call(a,null!=a?a.hasNext:a,{name:"if",hash:{},fn:this.program(5,d,0),inverse:this.program(7,d,0),data:d}))?e:"")+'</div>\n<div class="vertical pagination">\n  <a href="#" class="scroll up"><i class="fa fa-chevron-circle-up"></i></a>\n  <a href="#" class="scroll down"><i class="fa fa-chevron-circle-down"></i></a>\n</div>\n'},useData:!0}),this.PanlinCapTpl["templates/news/searchnews.hbs"]=Handlebars.template({1:function(a,b,c,d){var e,f=b.helperMissing,g="function",h=this.escapeExpression;return'<li><a href="'+h((e=null!=(e=b.link||(null!=a?a.link:a))?e:f,typeof e===g?e.call(a,{name:"link",hash:{},data:d}):e))+'">'+h((e=null!=(e=b.text||(null!=a?a.text:a))?e:f,typeof e===g?e.call(a,{name:"text",hash:{},data:d}):e))+"</a></li>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e;return'<ul class="brief">\n'+(null!=(e=b.each.call(a,null!=a?a.items:a,{name:"each",hash:{},fn:this.program(1,d,0),inverse:this.noop,data:d}))?e:"")+'</ul>\n<input type="search" placeholder="关键字检索">\n'},useData:!0}),this.PanlinCapTpl["templates/revealbg.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<div class="slide"></div>\n<div class="revealbg"></div>'},useData:!0}),this.PanlinCapTpl["templates/team/container.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){return'<div class="teams"></div>\n<div class="vertical pagination">\n  <a href="#" class="scroll up"><i class="fa fa-chevron-circle-up"></i></a>\n  <a href="#" class="scroll down"><i class="fa fa-chevron-circle-down"></i></a>\n</div>'},useData:!0}),this.PanlinCapTpl["templates/team/member.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f,g=b.helperMissing,h="function",i=this.escapeExpression;return'<div class="content-wrapper">\n  <div class="content-body member">\n    <a href="#" class="close">&times;</a>\n    <img class="avatar" src="'+i((f=null!=(f=b.avatar||(null!=a?a.avatar:a))?f:g,typeof f===h?f.call(a,{name:"avatar",hash:{},data:d}):f))+'" />\n    <div class="description">\n      <h4 class="ui header">'+i((f=null!=(f=b.name||(null!=a?a.name:a))?f:g,typeof f===h?f.call(a,{name:"name",hash:{},data:d}):f))+"  "+i((f=null!=(f=b.suffix||(null!=a?a.suffix:a))?f:g,typeof f===h?f.call(a,{name:"suffix",hash:{},data:d}):f))+"</h4>\n      <p>"+i((f=null!=(f=b.title||(null!=a?a.title:a))?f:g,typeof f===h?f.call(a,{name:"title",hash:{},data:d}):f))+"</p>\n      "+(null!=(f=null!=(f=b.description||(null!=a?a.description:a))?f:g,e=typeof f===h?f.call(a,{name:"description",hash:{},data:d}):f)?e:"")+"\n    </div>\n  </div>\n</div>\n"},useData:!0}),this.PanlinCapTpl["templates/team/team.hbs"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f=b.helperMissing,g="function",h=this.escapeExpression;return'<img src="'+h((e=null!=(e=b.avatar||(null!=a?a.avatar:a))?e:f,typeof e===g?e.call(a,{name:"avatar",hash:{},data:d}):e))+'" />\n<div class="member">\n  <h4>'+h((e=null!=(e=b.name||(null!=a?a.name:a))?e:f,typeof e===g?e.call(a,{name:"name",hash:{},data:d}):e))+"</h4>\n</div>"},useData:!0}),PanlinCap.module("PanlinCap.Layout",function(a,b,c,d){"use strict";a.SidebarLayoutView=d.LayoutView.extend({template:Handlebars.compile('<main id="main"></main>'),className:"sidebar-layout",regions:{main:"#main"}}),a.MainRegionController=d.Controller.extend({initializeLayout:function(c){var d=this.getOption("background");return(!this.layout||this.layout&&this.layout.isDestroyed)&&(this.layout=new a.SidebarLayoutView(c),b.bodyRegion.show(this.layout),d&&b.execute("showBackground",d)),this.layout}})}),PanlinCap.module("PanlinCap.Layout",function(a,b,c,d){"use strict";a.ScrollView=d.CompositeView.extend({onRender:function(){function a(){d.animate({scrollTop:"-=50"},"normal","linear",a)}function b(){d.animate({scrollTop:"+=50"},"normal","linear",b)}function c(){d.stop()}var d=$(".page");this.$(".scroll.up").mousedown(a).mouseup(c),this.$(".scroll.down").mousedown(b).mouseup(c)},events:{"click .scroll.up":function(a){a.preventDefault()},"click .scroll.down":function(a){a.preventDefault()}}})}),PanlinCap.module("PanlinCap.Layout",function(a,b,c,d){"use strict";var e=c.Model.extend({defaults:{text:"",link:""}}),f=(c.Collection.extend({model:e}),d.ItemView.extend({template:Handlebars.compile('<a class="section" href="/#">首页</a>{{#each items}} <i class="fa fa-chevron-right"></i> <a class="section" href="#{{link}}">{{title}}</a>{{/each}}'),className:"ui breadcrumb"}));a.BreadcrumbView=f,b.addInitializer(function(){c.history.on("route",function(d,e,f){var g=this.getFragment()||"";b.reqres.request("breadcrumb:fetch",g).then(function(d){0===d.length?b.breadcrumbRegion.empty():b.breadcrumbRegion.show(new a.BreadcrumbView({collection:new c.Collection(d)}))}).fail(function(){b.breadcrumbRegion.empty()})})})}),PanlinCap.module("PanlinCap.Layout",function(a,b,c,d){"use strict";a.SubMenuView=d.ItemView.extend({template:Handlebars.compile('{{#each items}}<li><a href="#{{link}}">{{title}}</a></li>{{/each}}'),tagName:"ul",className:"brief"}),b.addInitializer(function(){c.history.on("route",function(d,e,f){var g=this.getFragment()||"",h=b.reqres.request("submenus:fetch",g);h.then(function(d){d&&d.length>0?b.subRegion.show(new a.SubMenuView({collection:new c.Collection(d)})):b.subRegion.empty()}).fail(function(){b.subRegion.empty()})})})}),PanlinCap.module("PanlinCap.Layout",function(a,b,c,d){"use strict";a.RevealView=d.ItemView.extend({template:Handlebars.compile('{{{body}}}<a href="{{back}}" class="close">  <i class="fa fa-angle-double-left"></i> 收起</a>'),className:"reveal",initialize:function(){this.listenTo(b.vent,"reveal:active",this.revealView,this),this.listenTo(b.vent,"reveal:hide",this.hideView,this)},hideView:function(){this.$el.removeClass("active")},revealView:function(){this.$el.addClass("active")}})}),function(a){"use strict";a.addRegions({navRegion:"#navigation",bodyRegion:"#body",dialogRegion:"#dialog",subRegion:"#submenu",breadcrumbRegion:"#breadcrumb",bgRegion:"#background"}),a.on("start",function(){Backbone.history.start({pushState:!1}),Backbone.Intercept.start()})}(PanlinCap),PanlinCap.module("PanlinCap.Menu",function(a,b,c,d){"use strict";function e(a,b){var c=a.findWhere({link:b});if(c){for(;c.get("parent");)c=a.get(c.get("parent"));return c}var d=_.lastIndexOf(b,"/");return d>0?(b=b.slice(0,d),e(a,b)):null}var f=new c.Collection,g=f.fetch({url:"/api/menus"});b.reqres.setHandler("menus:fetch",function(a){var b=$.Deferred();return g.then(function(c){var d=_.filter(c,function(b){return b.parent==a});b.resolve(d)}),b}),b.reqres.setHandler("submenus:fetch",function(a){var b=$.Deferred();return g.then(function(c){var d="/"===a[0]?a:"/"+a,g=e(f,d);g?b.resolve(f.where({parent:g.id})):b.reject()}),b}),b.reqres.setHandler("breadcrumb:fetch",function(a){var b,c,d=$.Deferred(),e=[];return g.then(function(){var g=a.split("/");for(b=0,c=g.length;c>b;b++){var h=g.slice(0,b+1);h.unshift("");var i=f.findWhere({link:h.join("/")});i&&_.indexOf(["/","/founds"],i.get("link"))<0&&e.push(i)}d.resolve(e)}),d})}),PanlinCap.module("Share",function(a,b,c,d){"use strict";var e=960;a.SplitView=d.ItemView.extend({toggleReveal:function(){this.$(".reveal").toggleClass("active")},triggers:{"click .topic.detail":"expand","click .close":"expand"}}),a.SplitBgView=d.ItemView.extend({updateSeparation:function(){var a=$(window).width(),b=$(window).height(),c=this.$(".left"),d=this.$(".right"),f=(a-e)/2,g=f+160;c.css("clip","rect(0px,"+g+"px,"+b+"px,0px)"),d.css("clip","rect(0px,"+a+"px,"+b+"px,"+g+"px)")},toggleSplit:function(){this.$(".right").toggleClass("split")},initialize:function(){$(window).on("resize",this.updateSeparation)},onRender:function(){this.updateSeparation()},onDestroy:function(){$(window).off("reisze",this.updateSeparation)}})}),PanlinCap.module("Navigation",function(a,b,c,d){"use strict";var e=d.ItemView.extend({template:Handlebars.compile('{{#each items}}<a href="#{{link}}">{{title}}</a>{{/each}}'),className:"wrapper"});b.addInitializer(function(){var a=b.reqres.request("menus:fetch");a.then(function(a){b.navRegion.show(new e({collection:new c.Collection(a)}))}),$(".mobile.menu.trigger").click(function(){$("body").toggleClass("push")}),$("#navigation").on("click","a",function(){$("body").removeClass("push")}),$("#dimmer").on("click",function(){$("body").removeClass("push")})})}),PanlinCap.module("Background",function(a,b,c,d){"use strict";var e=d.ItemView.extend({template:Handlebars.compile('<div class="slide homebg-1 order-1"></div><div class="slide homebg-2 order-2"></div><div class="slide homebg-3 order-3"></div>'),className:"slides home",onRender:function(){var a=this;this.handler=setInterval(function(){var b=a.$(".slide.order-3"),c=a.$(".slide.order-2");c.animate({left:"-=100%"},{easing:"swing",duration:500}),b.animate({left:"-=100%"},{easing:"swing",duration:500,complete:function(){var b=a.$(".order-3").detach();b.insertBefore(a.$(".slide.order-1")),a.$(".slide").each(function(a){$(this).removeClass("order-1 order-2 order-3").addClass("order-"+(a+1)).removeAttr("style")})}})},7e3)},onDestroy:function(){clearInterval(this.handler)}}),f=d.ItemView.extend({template:PanlinCapTpl["templates/revealbg.hbs"],initialize:function(){this.listenTo(b.vent,"reveal:active",this.revealView,this),this.listenTo(b.vent,"reveal:hide",this.hideView,this)},hideView:function(){this.$(".revealbg").removeClass("active")},revealView:function(){this.$(".revealbg").addClass("active")}});b.commands.setHandler("showBackground",function(a){switch(a){case"home":b.bgRegion.show(new e);break;case"about":case"invest":case"team":case"found":case"news":case"contact":case"cases":var c=["slides",a].join(" ");b.bgRegion.show(new f({className:c}))}})}),function(a,b,c){"use strict";a.reqres.setHandler("news:fetch",function(){return $.get("/api/article?type=invested")}),a.reqres.setHandler("company-news:fetch",function(){return $.get("/api/article?type=company")}),a.reqres.setHandler("news:detail",function(a){return $.get("/api/article/"+a+".json")}),a.reqres.setHandler("cases:fetch",function(){return $.get("/api/cases")}),a.reqres.setHandler("submenu:fetch",function(a){return $.get("/api/submenus/"+a)}),a.reqres.setHandler("declaration:fetch",function(a){return $.get("/api/declaration/"+a)}),a.reqres.setHandler("founds:fetch",function(){return $.get("/api/founds")}),a.reqres.setHandler("topics:fetch",function(){return $.get("/api/home.json")}),a.reqres.setHandler("members:fetch",function(){return $.get("/api/members")})}(PanlinCap,Marionette,Backbone),PanlinCap.module("Home",function(a,b,c,d){"use strict";var e=d.ItemView.extend({template:PanlinCapTpl["templates/home/home.hbs"],className:"topics"}),f={showHome:function(){var a=b.reqres.request("topics:fetch");a.then(function(a){var d=new c.Collection(a);b.bodyRegion.show(new e({collection:d}))}),b.subRegion.empty(),b.execute("showBackground","home")}};b.addInitializer(function(){var a=new d.AppRouter({appRoutes:{"(/)":"showHome"},controller:f});a.on("route",function(a,b){$(".page").scrollTop(0)})})}),PanlinCap.module("PanlinCap.Reveal",function(a,b,c,d){"use strict";var e=b.module("PanlinCap.Layout"),f=e.MainRegionController.extend({showRevealPage:function(a,d,f){var g=this.initializeLayout();return g.getRegion("main").empty(),b.execute("showBackground",d),a?void b.reqres.request("declaration:fetch",a).then(function(a){a.back=f,g.main.show(new e.RevealView({model:new c.Model(a)})),b.vent.trigger("reveal:active")}):void b.vent.trigger("reveal:hide")}});a.Controller=new f}),PanlinCap.module("PanlinCap.Case",function(a,b,c,d){"use strict";var e=b.module("PanlinCap.Layout"),f=d.ItemView.extend({template:Handlebars.compile('<div class="brand-logo"><div class="logo"></div><p>{{name}}</p></div>'),className:"brand column",onRender:function(){var a=this.model;this.$el.on("click",function(){var c=new g({model:a});b.dialogRegion.show(c)}),this.$(".logo").css("background-image","url("+this.model.get("logo")+")")}}),g=d.ItemView.extend({template:PanlinCapTpl["templates/case/case.hbs"],className:"panlin dialog",onShow:function(){this.$el.bPopup({closeClass:"close",opacity:.3,positionStyle:"fixed",amsl:0})}}),h=d.CompositeView.extend({template:PanlinCapTpl["templates/case/case-group.hbs"],childView:f,childViewContainer:".brands",className:"case-group",tagName:"section",initialize:function(){this.collection=new c.Collection(this.model.get("brands"))}}),i=e.ScrollView.extend({template:PanlinCapTpl["templates/case/container.hbs"],childView:h,childViewContainer:".main-container.cases"}),j=e.SidebarLayoutView.extend({onBeforeShow:function(){var a=this,d=b.reqres.request("cases:fetch");d.then(function(b){var d=_.chain(b).groupBy("area").map(function(a,b){return{area:b,brands:a}}).value(),e=new c.Collection(d);a.main.show(new i({collection:e}))})}}),k={showCases:function(){b.bodyRegion.show(new j({className:"sidebar-layout content"})),b.execute("showBackground","cases")}};a.Controller=k}),PanlinCap.module("PanlinCap.Team",function(a,b,c,d){"use strict";var e=b.module("PanlinCap.Layout"),f=d.ItemView.extend({template:PanlinCapTpl["templates/team/member.hbs"],className:"panlin dialog",onShow:function(){this.$el.bPopup({closeClass:"close",opacity:.3,positionStyle:"fixed",amsl:0})}}),g=d.ItemView.extend({template:PanlinCapTpl["templates/team/team.hbs"],className:"person",onRender:function(){var a=this.model;this.$el.click(function(){b.dialogRegion.show(new f({model:a}))})}}),h=e.ScrollView.extend({template:PanlinCapTpl["templates/team/container.hbs"],childView:g,childViewContainer:".teams"}),i=function(){return{showTeam:function(a){b.reqres.request("members:fetch").then(function(a){var d=new c.Collection(a);b.bodyRegion.show(new h({collection:d}))}),b.execute("showBackground","team"),"partner"===a?$(".page").animate({scrollTop:0},{duration:300,easing:"swing"}):"members"===a&&$(".page").animate({scrollTop:640},{duration:300,easing:"swing"})}}}();a.Controller=i}),PanlinCap.module("PanlinCap.Found",function(a,b,c,d){"use strict";var e=d.ItemView.extend({template:Handlebars.compile('<div class="inner"><h3>{{issue}}</h3><h4>{{name}}</h4></div>'),className:"found",onRender:function(){var a=this.model;this.$el.on("click",function(){var c=new g({model:a});b.dialogRegion.show(c)})}}),f=d.CollectionView.extend({childView:e,className:"founds"}),g=d.ItemView.extend({template:PanlinCapTpl["templates/found/dialog.hbs"],className:"panlin dialog",onShow:function(){this.$el.bPopup({closeClass:"close",opacity:.3,positionStyle:"fixed",amsl:0})}}),h={showFounds:function(){b.subRegion.empty();var a=b.reqres.request("founds:fetch"),d=["rgb(180,6,12)","rgb(199,99,103)","rgb(178,53,55)","rgb(208,145,148)"];a.then(function(a){var e=(_.map(a,function(a){var b=a.portfolio,c=a.status;if("building"===c&&(a.statusMsg="正在募集成立中"),b){var e=b.split(",");a.portfolio=_.map(e,function(a,b){var c=a.split(":");return{area:c[0],percentage:parseInt(c[1]),color:d[b]}})}}),new c.Collection(a));b.bodyRegion.show(new f({collection:e}))}),b.execute("showBackground","found")}};a.Controller=h}),PanlinCap.module("PanlinCap.News",function(a,b,c,d){"use strict";var e=b.module("PanlinCap.Layout"),f=d.ItemView.extend({template:PanlinCapTpl["templates/news/news.hbs"],tagName:"li"}),g=e.ScrollView.extend({template:PanlinCapTpl["templates/news/pages.hbs"],childView:f,className:"main-container news",childViewContainer:"ul.news",initialize:function(){this.listenTo(this.collection,"reset",this.render)},templateHelpers:function(){var a=this.collection.state;return{hasPrev:this.collection.hasPreviousPage(),hasNext:this.collection.hasNextPage(),currentPage:a.currentPage,totalPage:a.totalPages,pageSize:a.pageSize,items:this.collection.toJSON()}},events:{"click a.first":function(a){a.preventDefault(),this.collection.getFirstPage({success:function(){$(".page").scrollTop(0)},reset:!0})},"click a.prev":function(a){a.preventDefault(),this.collection.hasPreviousPage()&&this.collection.getPreviousPage({success:function(){$(".page").scrollTop(0)},reset:!0})},"click a.next":function(a){a.preventDefault(),this.collection.hasNextPage()&&this.collection.getNextPage({success:function(){$(".page").scrollTop(0)},reset:!0})},"click a.last":function(a){a.preventDefault(),this.collection.getLastPage({success:function(){$(".page").scrollTop(0)},reset:!0})}}}),h=(d.ItemView.extend({template:PanlinCapTpl["templates/news/searchnews.hbs"]}),d.ItemView.extend({template:PanlinCapTpl["templates/news/detail.hbs"],className:"main-container news"})),i=e.SidebarLayoutView.extend({}),j=c.PageableCollection.extend({url:"/api/article?type=company",state:{currentPage:1,pageSize:10}}),k=c.PageableCollection.extend({url:"/api/article?type=invested"}),l={initLayout:function(){return(!this.layout||this.layout&&this.layout.isDestroyed)&&(this.layout=new i({className:"sidebar-layout content"}),b.bodyRegion.show(this.layout),b.execute("showBackground","news")),this.layout},showNews:function(a,d){var e=this.initLayout();if(e.getRegion("main").empty(),d){var f=b.reqres.request("news:detail",d);f.then(function(a){e.main.show(new h({model:new c.Model(a)}))})}else if("company"===a){var i=new j;e.main.show(new g({collection:i})),i.fetch({reset:!0})}else if("invested"===a){var i=new k;e.main.show(new g({collection:i})),i.fetch({reset:!0})}}};a.Controller=l}),PanlinCap.module("PanlinCap.Contact",function(a,b,c,d){"use strict";var e=b.module("PanlinCap.Layout"),f=(d.ItemView.extend({template:PanlinCapTpl["templates/contact/plan.hbs"],className:"main-container plan"}),d.ItemView.extend({template:Handlebars.compile("{{{body}}}"),className:"main-container plan"})),g=e.MainRegionController.extend({background:"contact",showContacts:function(a,d){var e=this.initializeLayout({className:"sidebar-layout content"});e.getRegion("main").empty();var g=d||a;b.reqres.request("declaration:fetch",g).then(function(a){var b=new c.Model(a);e.main.show(new f({model:b}))})}});a.Controller=new g}),PanlinCap.module("PanlinCap.Route",function(a,b,c,d){"use strict";b.addInitializer(function(){var a=b.module("PanlinCap.Reveal").Controller,c=b.module("PanlinCap.Team").Controller,e=b.module("PanlinCap.Found").Controller,f=b.module("PanlinCap.Case").Controller,g=b.module("PanlinCap.News").Controller,h=b.module("PanlinCap.Contact").Controller,i={showAbout:function(b){return a.showRevealPage(b,"about","#/about")},showInvestment:function(b){return a.showRevealPage(b,"invest","#/investment")},showTeam:function(a){return c.showTeam(a)},showFounds:function(){return e.showFounds()},showCases:function(){return f.showCases()},showNews:function(a,b){return g.showNews(a,b)},showContacts:function(a,b){return h.showContacts(a,b)}},j=new d.AppRouter({appRoutes:{"about(/:subpage)":"showAbout","investment(/:subpage)":"showInvestment","team(/:subpage)":"showTeam","founds(/)":"showFounds","cases(/)":"showCases","news(/:subpage)(/:id)":"showNews","contacts(/:subpage)(/:id)":"showContacts"},controller:i});j.on("route",function(a,b){$(".page").scrollTop(0)})})});