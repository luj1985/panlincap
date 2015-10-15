PanlinCap.module('PanlinCap.News', function(News, PanlinCap, Backbone, Marionette, $, _) {
  'use strict';

  var Layout = PanlinCap.module('PanlinCap.Layout');

  var NewsView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/news/news.hbs'],
    tagName : 'li'
  });

  var NewsCollectionView = Layout.ScrollView.extend({
    template : PanlinCapTpl['templates/news/pages.hbs'],
    childView : NewsView,
    className : 'main news',
    childViewContainer : 'ul.news',
    initialize : function() {
      this.listenTo(this.collection, 'reset', this.render);
    },
    templateHelpers : function() {
      var state = this.collection.state;
      return {
        category : this.collection.category,
        hasPrev : this.collection.hasPreviousPage(),
        hasNext : this.collection.hasNextPage(),
        firstPage : state.firstPage,
        prevPage : state.currentPage - 1,
        currentPage : state.currentPage,
        nextPage : state.currentPage + 1,
        lastPage : state.lastPage,
        totalPage : state.totalPages,
        pageSize : state.pageSize,
        items : this.collection.toJSON()
      };
    }
  });

  var NewsDetailView = Marionette.ItemView.extend({
    template : PanlinCapTpl['templates/news/detail.hbs'],
    className : 'main news'
  });

  var CompanyNewsCollection = Backbone.PageableCollection.extend({
    url : '/api/article?type=company',
    category : 'company',
    state : {
      currentPage : 1,
      pageSize : 10
    }
  });

  var InvestedCompanyNewsCollection = Backbone.PageableCollection.extend({
    url : '/api/article?type=invested',
    category : 'invested',
    state : {
      currentPage : 1,
      pageSize : 10
    }
  });

  function parseQueryString(queryString){
    var params = {};
    if(queryString) {
      var pairs = decodeURI(queryString).split(/&/g);
      _.each(pairs, function(pair) {
        var kv = pair.split('=');
        if (kv.length === 2) {
          params[kv[0]] = kv[1];
        }
      });
    }
    return params;
  }


  var companyNews = new CompanyNewsCollection();
  var investedNews = new InvestedCompanyNewsCollection();

  var newsController = {
    showNews: function(subpage, id, params) {
      PanlinCap.subRegion.empty();
      PanlinCap.execute('showBackground', 'news');
      if (id) {
        var promise = PanlinCap.reqres.request('news:detail', id);
        promise.then(function(data) {
          PanlinCap.bodyRegion.show(new NewsDetailView({ model : new Backbone.Model(data) }));
        });
      } else {
        var qs = parseQueryString(params || '');
        var page = parseInt(qs.page) || 1;

        if (subpage === 'company') {
          PanlinCap.bodyRegion.show(new NewsCollectionView({ collection : companyNews }));
          companyNews.getPage(page, { reset : true });
        } else if (subpage === 'invested') {
          PanlinCap.bodyRegion.show(new NewsCollectionView({ collection : investedNews }));
          investedNews.getPage(page, { reset : true });
        } else {
          PanlinCap.bodyRegion.empty();
        }
      }
    }
  };

  News.Controller = newsController;
});
