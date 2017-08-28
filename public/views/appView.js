var AppView = Backbone.View.extend({

  el: 'body',

  initialize: function() {
    var randomColorsCollection = {collection: this.model.get('randomColorsCollection')}

    this.timerView = new TimerView({collection: this.model.get('colorQueueCollection')});
    this.colorGridView = new ColorGridView(randomColorsCollection);
    this.colorEntryView = new ColorEntryView(randomColorsCollection);

    this.render();

    this.model.get('randomColorsCollection').on('removeColor', function(thing) {
      this.colorGridView.render()
    }, this);

  },


  render: function() {
    return this.$el.html([this.colorEntryView.$el, this.timerView.$el, this.colorGridView.$el]);
  }

});
