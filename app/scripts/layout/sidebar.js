PanlinCap.module('Layout.Sidebar', function(Sidebar, PanlinCap, Backbone, Marionette) {
  'use strict';

  Sidebar.SidebarLayoutView = Marionette.LayoutView.extend({
    template : PanlinCapTpl['templates/layout/sidebarLayout.hbs'],
    className : 'sidebar-layout',
    regions : {
      breadcrumb : '#breadcrumb',
      sidebar : '#sidebar',
      main : '#main'
    }
  });

  Sidebar.SidebarView = Sidebar.SideMenuView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/layout/sidelinks.hbs'],
    tagName : 'ul',
    className : 'brief'
  });

  Sidebar.RevealView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/layout/reveal.hbs'],
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
    template : PanlinCapTpl['templates/layout/breadcrumb.hbs'],
    className : 'ui breadcrumb'
  });
});