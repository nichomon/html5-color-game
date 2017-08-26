var ColorModel = Backbone.Model.extend({

  addColor: function() {
    this.trigger('addColor', this);
  },

  removeColor: function() {
    this.trigger('removeColor', this);
  }

});
