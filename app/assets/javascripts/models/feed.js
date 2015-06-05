NewsReader.Models.Feed = Backbone.Model.extend({

  urlRoot: "/api/feeds",

  entries: function () {
    if (this._entries) {
      return this._entries;
    }
    this._entries = new NewsReader.Collections.Entries([], {feed: this});
    return this._entries;
  },

  parse: function (response) {
    if (response.latest_entries) { // response["latest_entries"]
      var entries = response.latest_entries;
      // this._entries = new NewsReader.Collections.Entries(entries);
      this.entries().set(entries)
      delete response.latest_entries;
    }
    return response;
  }

});
