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

  Sidebar.SidebarView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/layout/sidebar.hbs'],
    tagName : 'ul',
    className : 'brief',
    events : {
      'click li' : function() {
        PanlinCap.vent.trigger('reveal');
      }
    }
  });

  Sidebar.SideMenuView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/layout/sidelinks.hbs'],
    tagName : 'ul',
    className : 'brief'
  });

  Sidebar.RevealView = Marionette.ItemView.extend({
    initialize : function() {
      this.listenTo(PanlinCap.vent, 'reveal', this.revealView, this);
    },
    revealView : function () {
      this.$el.toggleClass('active');
    },
    events : {
      'click a.close' : function() {
        PanlinCap.vent.trigger('reveal');
      }
    },
    template : PanlinCapTpl['templates/layout/reveal.hbs'],
    className : 'reveal'
  });

  Sidebar.BreadcrumbView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/layout/breadcrumb.hbs'],
    className : 'ui breadcrumb'
  });
});