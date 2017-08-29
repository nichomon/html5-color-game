var GameEndModel = Backbone.Model.extend({

  newGame: function() {
    this.trigger('newGame', this);
  }

});
