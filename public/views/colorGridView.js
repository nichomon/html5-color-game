var ColorGridView = Backbone.View.extend({

  className: 'colorGridView',

  initialize: function() {
    this.render();

    this.collection.on('dataLoad', function() {
      this.render();
    }, this);
  },

  render: function() {

    this.$el.append(
      this.collection.map(function(color) {
        return new colorView({model: color}).render();
      })
    );

  }
});
