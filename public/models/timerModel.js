var TimerModel = Backbone.Model.extend({

  startTimer: function(that) {
    var that = this
    function runTimer(that) {

      setTimeout(function() {
        var counter = that.get('counter')
        if (counter > 0) {
          runTimer(that);
          that.counterChange();
        } else {
          that.endTimer();
          return;
        }
      }, 1000)

    }
    runTimer(that);
  },

  counterChange: function() {
    this.trigger('counterChange', this);
  },

  endTimer: function() {
    this.trigger('endTimer', this);
    console.log('timer ended');
  }
});
