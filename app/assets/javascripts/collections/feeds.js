NewsReader.Collections.Feeds = Backbone.Collection.extend({

  model: NewsReader.Models.Feed,
  url: "/api/feeds",

  getOrFetch: function(id){
    var feed = this.get(id);
    var collection = this;
    if (!feed){
      feed = new NewsReader.Models.Feed({id: id});
      feed.fetch({
        success: function(){
          collection.add(feed);
        }
      });
    } else {
      feed.fetch();
    }

    return feed;
  }

});
