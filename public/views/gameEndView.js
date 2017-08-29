var GameEndView = Backbone.View.extend({
  className: 'game-end',

  initialize: function() {
    this.render();
  },

  template: _.template('<h1 class="awesome-title">GAME OVER</h1> <button type="button">PLAY AGAIN?</button>'),

  render: function() {
    return this.$el.html(this.template());
  }
});
