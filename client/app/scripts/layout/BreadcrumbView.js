PanlinCap.module('PanlinCap.Layout', function(Layout, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Breadcrumb = Backbone.Model.extend({
    defaults:{ text : '', link : '' } 
  });

  var BreadcrumbList = Backbone.Collection.extend({
    model : Breadcrumb
  });

  var BreadcrumbView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '<a class="section" href="/#">首页</a>' +
      '{{#each items}}' +
      ' <i class="fa fa-chevron-right"></i> ' +
      '<a class="section" href="#{{link}}">{{text}}</a>' +
      '{{/each}}'
    ),
    className : 'ui breadcrumb'
  });

  Layout.BreadcrumbView = BreadcrumbView;

  var mappings = [
    { link : '/about' ,                   text : '关于我们' }, 
    { link : '/about/panlin',             text : '关于磐霖' },
    { link : '/about/advantage',          text : '我们的优势' },
    { link : '/investment',               text : '投资理念' }, 
    { link : '/investment/principle',     text : '投资核心原则' },
    { link : '/investment/strategy',      text : '投资策略' }, 
    { link : '/investment/price',         text : '价值提升机制'},
    { link : '/team',                     text : '核心团队' },
    { link : '/cases',                    text : '投资组合' },
    { link : '/news',                     text : '新闻中心' }, 
    { link : '/news/invested ',           text : '被投公司新闻' },
    { link : '/news/company ',            text : '公司新闻' },
    { link : '/contacts' ,                text : '联系我们' }, 
    { link : '/contacts/hire',            text : '招贤纳士' },
    { link : '/contacts/hire/accouting',  text : '会计' },
    { link : '/contacts/hire/accouting',  text : '行政助理' },
    { link : '/contacts/address',         text : '公司地址' },
    { link : '/contacts/plan',            text : '商业计划书' }
  ];

  PanlinCap.addInitializer(function() {
    Backbone.history.on('route', function(ctx, name, args) {
      var fragment = this.getFragment() || '';
      var parts = fragment.split('/'), i, length;
      var breadcrumbs = [];
      for (i = 0, length = parts.length; i < length; i++) {
        var path = parts.slice(0, i + 1);
        path.unshift('');
        var entry = _.findWhere(mappings, { link : path.join('/') });
        if (entry) {
          breadcrumbs.push(entry); 
        }
      }

      if (breadcrumbs.length === 0) {
        PanlinCap.breadcrumbRegion.empty();
      } else {
        PanlinCap.breadcrumbRegion.show(new Layout.BreadcrumbView({
          collection : new Backbone.Collection(breadcrumbs)
        }));
      }
    });
  });
});