var GameEndView = Backbone.View.extend({
  className: 'game-end',

  initialize: function() {
    this.render();

    this.collection.on('highScoresLoaded', function() {
      this.render();
    }, this)
  },

  template: _.template('<h1 class="awesome-title">GAME OVER</h1> <button type="button">PLAY AGAIN?</button><br><h1>High Scores</h1>'),

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template()).append(
      this.collection.map(function(gameEndModel) {
        console.log('🤷🏿‍ 🤷🏽 ‍🤷🏼‍')
        return new HighScoreView({model: gameEndModel}).render();
      })
    );
  }
});
