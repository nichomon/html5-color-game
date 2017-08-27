var AppModel = Backbone.Model.extend({
  initialize: function() {
    this.set('randomColorsCollection', new RandomColorsCollection());


    this.get('randomColorsCollection').on('removeColor', function(color) {
      this.get('randomColorsCollection').removeColor(color);
    }, this);
  }
});
