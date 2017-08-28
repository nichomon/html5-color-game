var AppView = Backbone.View.extend({

  el: 'body',

  initialize: function() {

    var renderView = ['gameStart', 'game', 'gameEnd']
    var that = this;

    this.timerView = new TimerView({model: this.model.get('timerModel')});
    this.colorGridView = new ColorGridView({collection: this.model.get('randomColorsCollection')});
    this.colorEntryView = new ColorEntryView({collection: this.model.get('randomColorsCollection')});
    this.gameStartView = new GameStartView({model: this.model.get('gameStartModel')});

    this.render(renderView[0]);

    this.model.get('gameStartModel').on('gameStart', function (model) {
      if (model.get('gameStarted')) {
        that.render(renderView[1]);
      }
    })

    this.model.get('randomColorsCollection').on('removeColor', function(thing) {
      this.render(renderView[7]);
      this.colorGridView.render();
    }, this);

    this.model.get('timerModel').on('counterChange', function(thing) {
      this.timerView.render()
    }, this);

  },


  render: function(renderView) {
    if (renderView === 'gameStart') {
        return this.$el.html([this.gameStartView.$el]);
    } else if (renderView === 'game') {
        return this.$el.html([this.colorEntryView.$el, this.timerView.$el, this.colorGridView.$el]);
    } else if (renderView === 'gameEnd') {
        return this.$el.html([this.colorEntryView.$el, this.timerView.$el, this.colorGridView.$el]);
    } else {
        return this.$el.html('whoops!');
    }
  }

});
