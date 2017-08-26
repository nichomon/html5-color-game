var appView = Backbone.View.extend({
  initialize: function() {
    this.colorGridView = new colorGridView({collection: this.model.get('colorsCollection')});
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});
