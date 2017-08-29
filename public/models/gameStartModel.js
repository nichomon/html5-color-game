var GameStartModel = Backbone.Model.extend({

  gameStart: function() {
    this.trigger('gameStart', this);
  },

  enterUser: function (userName) {
    window.sessionDetails = {
      userName: userName
    }
  }

});
