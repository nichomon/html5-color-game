var ColorEntryView = Backbone.View.extend({

  className: '.color-entry',

  initialize: function() {
    this.render();
  },

  template: _.template('<h5>type a color in:  </h5><input id="input-box" type="text">'),

  render: function() {
    return this.$el.html(this.template());
  }
})
