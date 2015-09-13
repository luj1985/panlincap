PanlinCap.module('PanlinCap.News', function(News, PanlinCap, Backbone, Marionette) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  var NewsView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/news/news.hbs'],
    tagName : 'li'
  });

  var NewsCollectionView = Layout.ScrollView.extend({
    template : PanlinCapTpl['templates/news/pages.hbs'],
    childView : NewsView,
    className : 'main-container news',
    childViewContainer : 'ul.news',
    initialize : function() {
      this.listenTo(this.collection, 'reset', this.render);
    },
    templateHelpers : function() {
      var state = this.collection.state;
      return {
        hasPrev : this.collection.hasPreviousPage(),
        hasNext : this.collection.hasNextPage(),
        currentPage : state.currentPage,
        totalPage : state.totalPages,
        pageSize : state.pageSize,
        items : this.collection.toJSON()
      };
    },
    events : {
      'click a.first' : function(e) {
        e.preventDefault();
        this.collection.getFirstPage({
          success : function() { $('.page').scrollTop(0); },
          reset : true
        });
      },
      'click a.prev' : function(e) {
        e.preventDefault();
        if (this.collection.hasPreviousPage()) {
          this.collection.getPreviousPage({
            success : function() { $('.page').scrollTop(0); },
            reset : true
          });  
        }
      },
      'click a.next' : function(e) {
        e.preventDefault();
        if (this.collection.hasNextPage()) {
          this.collection.getNextPage({
            success : function() { $('.page').scrollTop(0); },
            reset : true
          });
        }
      },
      'click a.last' : function(e) {
        e.preventDefault();
        this.collection.getLastPage({
          success : function() { $('.page').scrollTop(0); },
          reset : true
        });
      }
    }
  });

  var NewsDetailView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/news/detail.hbs'],
    className : 'main-container news'
  });
  
  var NewsLayoutView = Layout.SidebarLayoutView.extend({});

  var CompanyNewsCollection = Backbone.PageableCollection.extend({
    url : '/api/article?type=company',
    state : {
      currentPage : 1,
      pageSize : 10
    }
  });

  var InvestedCompanyNewsCollection = Backbone.PageableCollection.extend({
    url : '/api/article?type=invested'
  });

  var newsController = {
    initLayout : function() {
      if (!this.layout || (this.layout && this.layout.isDestroyed)) {
        this.layout = new NewsLayoutView({className : 'sidebar-layout content'});
        PanlinCap.bodyRegion.show(this.layout);
        PanlinCap.execute('showBackground', 'news');
      }
      return this.layout;
    },
    showNews: function(subpage, id) {
      var layout = this.initLayout();
      layout.getRegion('main').empty();

      if (id) {
        var promise = PanlinCap.reqres.request('news:detail', id);
        promise.then(function(data) {
          layout.main.show(new NewsDetailView({ model : new Backbone.Model(data) }));
        });
      } else {
        if (subpage === 'company') {
          var companyNews = new CompanyNewsCollection();
          layout.main.show(new NewsCollectionView({ collection : companyNews }));
          companyNews.fetch({ reset : true });
        } else if (subpage === 'invested') {
          var investedNews = new InvestedCompanyNewsCollection();
          layout.main.show(new NewsCollectionView({ collection : investedNews }));
          investedNews.fetch({ reset : true });
        }
      }
    }
  };

  News.Controller = newsController;
});
