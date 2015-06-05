NewsReader.Routers.Feeds = Backbone.Router.extend({
  routes: {
    "": "index",
    "feeds/:id": 'feedShow'
  },  // no leading slashes in router routes;

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  index: function () {
    NewsReader.feeds.fetch();
    var view = new NewsReader.Views.FeedsIndex({ collection: NewsReader.feeds});
    this.$rootEl.html(view.render().$el);
  },

  feedShow: function (id) {
    var feed = NewsReader.feeds.get(id);
    feed.fetch();
    var view = new NewsReader.Views.Feed({ model: feed });
    this.$rootEl.html(view.render().$el);
  }
});
