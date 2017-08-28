var GameStartModel = Backbone.Model.extend({
  intitialize: function() {

  },

  gameStart: function() {
    this.trigger('gameStart', this);
  }

});
