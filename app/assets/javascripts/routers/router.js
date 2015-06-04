NewsReader.Routers.Feeds = Backbone.Router.extend({
  routes: {
    "": "index",
    "/feeds/:id": 'show'
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  index: function () {
    NewsReader.feeds.fetch();
    var view = new NewsReader.Views.FeedsIndex({ collection: NewsReader.feeds});
    this.$rootEl.html(view.render().$el);
  }

  // show: function (id) {
  //   var feed = feedsCollection.getOrFetch(id);
  //   feed.fetch(); // API routes
  //   // ... var view = new Pokedex.Views.FeedView({ model: feed })
  //   // ...
  // }
});
