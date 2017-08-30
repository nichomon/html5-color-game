var AppModel = Backbone.Model.extend({
  initialize: function() {
    this.set('gameStartModel', new GameStartModel());
    this.set('gameEndModel', new GameEndModel());
    this.set('randomColorsCollection', new RandomColorsCollection());
    this.set('colorQueueCollection', new ColorQueueCollection());
    this.set('timerModel', new TimerModel({counter: 1}));
    this.set('highScoresCollection', new HighScoresCollection());


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


//when timer ends
    this.get('timerModel').on('endTimer', function(timer) {
      //gather score
      window.sessionDetails.score = this.get('colorQueueCollection').length;
      //invoke send score
      this.get('highScoresCollection').sendScore(window.sessionDetails);
      //reset counter
      this.get('timerModel').set({counter: 1});
    }, this);

  }


});
