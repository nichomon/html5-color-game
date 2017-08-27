var AppView = Backbone.View.extend({

  el: 'body',

  initialize: function() {
    this.colorGridView = new ColorGridView({collection: this.model.get('randomColorsCollection')});
    this.colorEntryView = new ColorEntryView({collection: this.model.get('randomColorsCollection')});
    this.render();
  },


  render: function() {
    return this.$el.html([this.colorEntryView.$el, this.colorGridView.$el]);
  }

});
