var ColorQueueCollection = Backbone.Collection.extend({
  initialize: function() {
    //ajax for sending results after timer to DB
    this.on('addColor', this.addColor, this);
  },

  addColor: function(color) {
    this.add(color);
  }
})
