var AppModel = Backbone.Model.extend({
  initialize: function() {
    this.set('gameStartModel', new GameStartModel());
    this.set('gameEndModel', new GameEndModel());
    this.set('randomColorsCollection', new RandomColorsCollection());
    this.set('colorQueueCollection', new ColorQueueCollection());
    this.set('timerModel', new TimerModel({counter: 30}));


    this.get('gameStartModel').on('gameStart', function(gameStartModel) {
      this.get('timerModel').startTimer();
    }, this);

    this.get('randomColorsCollection').on('removeColor', function(color) {
      this.get('randomColorsCollection').removeColor(color);
      this.get('colorQueueCollection').addColor(color);
    }, this);

    this.get('timerModel').on('counterChange', function(timer) {
      var counter = timer.get('counter');
      counter --;
      timer.set({counter: counter})
    }, this);

    this.get('timerModel').on('endTimer', function(timer) {
      window.sessionDetails.score = this.get('colorQueueCollection').length;
      this.sendScore(window.sessionDetails);
      this.get('gameEndModel').gameEnd();
      this.get('timerModel').set({counter: 30});
    }, this);
  },

  sendScore: function(sessionDetails) {
    var that = this;
    $.ajax({
      url: 'http://localhost:1337/sendStats',
      type: 'POST',
      crossDomain: true,
      data: JSON.stringify([sessionDetails]),
      success: function (data) {

        that.trigger('dataLoad');
        // console.log(data)
      },
      error: function (data) {
        console.error('Failed to send message', data);
      }
    });
  }
});
