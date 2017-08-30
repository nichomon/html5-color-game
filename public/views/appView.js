var AppView = Backbone.View.extend({

  el: 'body',

  initialize: function() {

    var renderView = ['gameStart', 'game', 'gameEnd']

    this.timerView = new TimerView({model: this.model.get('timerModel')});
    this.colorGridView = new ColorGridView({collection: this.model.get('randomColorsCollection')});
    this.colorEntryView = new ColorEntryView({collection: this.model.get('randomColorsCollection')});
    this.gameStartView = new GameStartView({model: this.model.get('gameStartModel')});
    this.gameEndView = new GameEndView({collection: this.model.get('highScoresCollection')});

    this.render(renderView[0]);

    this.model.get('gameEndModel').on('newGame', function (model) {
        this.render(renderView[0]);
    }, this);

    this.model.get('gameStartModel').on('gameStart', function (model) {
        this.render(renderView[1]);
    }, this);

    this.model.get('highScoresCollection').on('sendScore', function (model) {
        console.log('invoked in appView')
        this.render(renderView[2]);
        window.allTheColors();
    }, this);

    this.model.get('randomColorsCollection').on('removeColor', function(color) {
      if (this.model.get('randomColorsCollection').length === 0) {
        this.render(renderView[2])
      } else {
        this.colorGridView.render();
      }
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
        return this.$el.html([this.gameEndView.$el]);
    } else {
        return this.$el.html('whoops!');
    }
  }

});
