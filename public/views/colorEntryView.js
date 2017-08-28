var ColorEntryView = Backbone.View.extend({

  className: 'top-row color-entry',

  initialize: function() {
    this.render();
  },

  template: _.template('<h5>Type a color in:  </h5><input id="input-box" type="text">'),

  events: {
    'change input#input-box': 'checkValueSubmitted'
  },

  checkValueSubmitted: function() {
    var input = document.getElementById('input-box').value;
    this.collection.findWhere({backgroundColor: input}).removeColor();
    $('#input-box').val('');
  },


  render: function() {
    return this.$el.html(this.template());
  }
})
