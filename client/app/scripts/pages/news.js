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
      var model = {
        params : this.collection.params, 
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
      if (state.keyword) {
        model.keyword = encodeURIComponent(state.keyword);
      }
      return model;
    },
    events : {
      'click button.jump' : function() {
        var page = parseInt($('input.num').val()) || 1,
            category = this.collection.category,
            state = this.collection.state;
        page = page < state.firstPage ? state.firstPage : page;
        page = page > state.lastPage ? state.lastPage : page;

        PanlinCap.Router.navigate('/news/' + category + '?page=' + page, { trigger : true });
      }
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

  var SearchNewsCollection = Backbone.PageableCollection.extend({
    parseState: function (resp, queryParams, state, options) {
      var state = Backbone.PageableCollection.prototype.parseState.apply(this, arguments);
      var s1 = resp[0] || {};
      state.keyword = s1.keyword;
      return state;
    },
    url : '/api/article?type=search',
    category : 'search',
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


  // should use "search" event if IE8 is out of scope...
  $(document).on('change', 'input[type="search"]', function(e) {
    var target = e.target,
        value = target.value;
    if (value) {
      PanlinCap.Router.navigate('/news/search?q=' + encodeURIComponent(value), { trigger : true });
    }
  });

  var companyNews = new CompanyNewsCollection();
  var investedNews = new InvestedCompanyNewsCollection();
  var searchNews = new SearchNewsCollection();


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
        } else if (subpage === 'search') {
          PanlinCap.bodyRegion.show(new NewsCollectionView({ collection : searchNews}));
          searchNews.params = qs;
          searchNews.getPage(page, { reset : true, data : {q : qs.q} });
        } else {
          PanlinCap.bodyRegion.empty();
        }
      }
    }
  };

  News.Controller = newsController;
});
