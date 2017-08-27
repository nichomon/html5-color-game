var AppView = Backbone.View.extend({

  el: 'body',

  initialize: function() {
    var coll = {collection: this.model.get('randomColorsCollection')}

    this.colorGridView = new ColorGridView(coll);
    this.colorEntryView = new ColorEntryView(coll);

    this.render();

    this.model.get('randomColorsCollection').on('removeColor', function(thing) {
      this.colorGridView.render()
    }, this);

  },


  render: function() {
    return this.$el.html([this.colorEntryView.$el, this.colorGridView.$el]);
  }

});
