var AppView = Backbone.View.extend({


  initialize: function() {
    this.colorGridView = new colorGridView({collection: this.model.get('colorsCollection')});
    // this.colorView = new colorView({model: this.model.get('colorModel')});
  },


  render: function() {
    return this.$el.html(
      this.colorGridView.$el
    );

  }

});
