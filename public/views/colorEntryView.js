var ColorEntryView = Backbone.View.extend({

  className: '.color-entry',

  initialize: function() {
    this.render();
  },

  template: _.template('<h5>type a color in:  </h5><input id="input-box" type="text">'),

  events: {
    'change input#input-box': 'checkValue'
  },

  checkValue: function () {

    var input = document.getElementById('input-box').value;
    this.collection.findWhere({backgroundColor: input}).removeColor();
    $('#input-box').val('');
  },


  render: function() {
    return this.$el.html(this.template());
  }
})
