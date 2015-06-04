window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    NewsReader.feeds = new NewsReader.Collections.Feeds();
    NewsReader.feeds.fetch({ reset: true });

    // $rootEl as router property which points to root controller view
    new NewsReader.Routers.Feeds({
      "$rootEl": $("#content")
    });

    Backbone.history.start();
  }
};


$(document).ready(function(){
  NewsReader.initialize();
});
