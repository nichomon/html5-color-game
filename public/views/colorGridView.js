var colorGridView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.append(

      this.collection.map(function(color) {
        return new colorView({model: color}).render();
      })

    );
  }
});
