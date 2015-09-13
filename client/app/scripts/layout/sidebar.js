PanlinCap.module('Layout.Sidebar', function(Sidebar, PanlinCap, Backbone, Marionette) {
  'use strict';

  Sidebar.ScrollView = Marionette.CompositeView.extend({
    onRender : function() {
      var $wrapper = $('.page');
      function startScrollUp() {
        $wrapper.animate({scrollTop: '-=50'}, 'normal', 'linear', startScrollUp);
      }
      function startScrollDown() {
        $wrapper.animate({scrollTop: '+=50'}, 'normal', 'linear', startScrollDown); 
      }
      function stopScrolling() {
        $wrapper.stop();
      }
      this.$('.scroll.up').mousedown(startScrollUp).mouseup(stopScrolling);
      this.$('.scroll.down').mousedown(startScrollDown).mouseup(stopScrolling);
    },
    events : {
      'click .scroll.up' : function(e) {
        e.preventDefault();
      },
      'click .scroll.down' : function(e) {
        e.preventDefault();
      }
    }
  });

  Sidebar.SidebarLayoutView = Marionette.LayoutView.extend({
    template : Handlebars.compile(
      '<nav id="breadcrumb"></nav>' +
      '<div class="content-wrapper">' +
      '<main id="main"></main>' +
      '</div>'
    ),
    className : 'sidebar-layout',
    regions : {
      breadcrumb : '#breadcrumb',
      main : '#main'
    }
  });

  Sidebar.SidebarView = Sidebar.SideMenuView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '{{#each items}}' +
      '<li><a href="{{link}}">{{title}}</a></li>' +
      '{{/each}}'
    ),
    tagName : 'ul',
    className : 'brief'
  });

  Sidebar.RevealView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '{{{body}}}' + 
      '<a href="{{back}}" class="close">' + 
      '  <i class="fa fa-angle-double-left"></i> 收起' +
      '</a>'
    ),
    className : 'reveal',
    initialize : function() {
      this.listenTo(PanlinCap.vent, 'reveal:active', this.revealView, this);
      this.listenTo(PanlinCap.vent, 'reveal:hide', this.hideView, this);
    },
    hideView : function() {
      this.$el.removeClass('active');
    },
    revealView : function () {
      this.$el.addClass('active');
    }
  });

  Sidebar.BreadcrumbView = Marionette.ItemView.extend({
    template : Handlebars.compile(
      '<a class="section" href="/#">首页</a>' +
      '{{#each items}}' +
      ' <i class="fa fa-chevron-right"></i> ' +
      '<a class="section" href="{{link}}">{{text}}</a>' +
      '{{/each}}'
    ),
    className : 'ui breadcrumb'
  });

  Sidebar.MainRegionController = Marionette.Controller.extend({
    initializeLayout : function(options) {
      var background = this.getOption('background');
      if (!background) {
        throw new Error('must assign background');
      }
      if (!this.layout || (this.layout && this.layout.isDestroyed)) {
        this.layout = new Sidebar.SidebarLayoutView(options); 
        PanlinCap.bodyRegion.show(this.layout);
        PanlinCap.execute('showBackground', background);
      }
      return this.layout;
    }
  });
});