var AppModel = Backbone.Model.extend({
  initialize: function() {
    this.set('randomColorsCollection', new RandomColorsCollection());
    this.set('colorQueueCollection', new ColorQueueCollection());
    this.set('timerModel', new TimerModel({counter: 60}));


    this.get('randomColorsCollection').on('removeColor', function(color) {
      this.get('randomColorsCollection').removeColor(color);
    }, this);

    this.get('timerModel').on('counterChange', function(timer) {
      var counter = timer.get('counter');
      counter --;
      timer.set({counter: counter})
      // this.get('randomColorsCollection').removeColor(color);
    }, this);

    // this.get('timerModel').on('counterChange', function(timer) {
    //   console.log(timer.get('counter'))
    //   // this.get('randomColorsCollection').removeColor(color);
    // }, this);
  }
});
