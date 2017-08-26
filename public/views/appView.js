var AppView = Backbone.View.extend({
  initialize: function() {
    this.colorGridView = new colorGridView({collection: this.model.get('colorsCollection')});
  },


  render: function() {
    this.$el.html(
      this.colorGridView.$el
    );  
    return this;
  }

});
