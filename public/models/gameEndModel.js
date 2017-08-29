var GameEndModel = Backbone.Model.extend({

  gameEnd: function() {
    this.trigger('gameEnd', this);
  },

  newGame: function() {
    this.trigger('newGame', this);
  }

});
