var TimerModel = Backbone.Model.extend({
  initialize: function() {
    this.startTimer();
  },

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
    console.log('timer ended')
  }
});



  //  var counter = 0;
  //     var timer = function () {
  //         setTimeout(function () {
  //         counter++;
  //         timer();
  //       }, 1000);
  //
  //       $('.target-div').html(counter)
  //     }
  //     timer();
