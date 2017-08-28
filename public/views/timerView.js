var TimerView = Backbone.View.extend({

  className: 'top-row timer',

  initialize: function() {
    this.render();
  },

  template: _.template('<h5>TIMER GOES HERE</h5>'),

  render: function() {
    return this.$el.html(this.template());
  }
})
