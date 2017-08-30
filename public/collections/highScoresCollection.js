var HighScoresCollection = Backbone.Collection.extend({

  model: GameEndModel,

  initialize() {
    this.genHighScores();
  },

  sendScore: function(sessionDetails) {
    var that = this;
    console.log(sessionDetails)
    $.ajax({
      url: 'http://localhost:1337/sendStats',
      type: 'POST',
      data: sessionDetails,
      ContentType: 'application/json',
      success: function (data) {
        console.log(data)
        that.reset();
        console.log('❤️❤️❤️❤️❤️❤️❤️❤️ highScores.models')
        that.genHighScores(data)
        that.trigger('sendScore');
      },
      error: function (data) {
        that.reset();
        that.genHighScores()
        that.trigger('sendScore');
        console.error('Failed to send message', data);
      }
    });
  },


  genHighScores: function(data) {
    var that = this;

    if (data) {
      this.add(data);
      this.trigger('highScoresLoaded')
    } else {
      $.ajax({
        url: 'http://localhost:1337/getHighScores',
        type: 'GET',
        data: '',
        contentType: 'application/json',
        success: function (data) {
          that.add(data);
          that.trigger('highScoresLoaded');
        },
        error: function (data) {
          that.add([{rank: 1, userName: 'sahDU', score: 1000000}]);
          that.trigger('highScoresLoaded');
        }
      });
    }

  }

})
