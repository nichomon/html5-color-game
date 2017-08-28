var AppModel = Backbone.Model.extend({
  initialize: function() {
    this.set('gameStartModel', new GameStartModel({gameStarted: false}));
    this.set('randomColorsCollection', new RandomColorsCollection());
    this.set('colorQueueCollection', new ColorQueueCollection());
    this.set('timerModel', new TimerModel({counter: 30}));


    this.get('gameStartModel').on('gameStart', function(gameStartModel) {
      console.log('inheaaaaa')
      gameStartModel.set({'gameStarted': true});
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
      console.log(this.get('colorQueueCollection'))
      // this.get('randomColorsCollection').removeColor(color);
    }, this);
  }
});
