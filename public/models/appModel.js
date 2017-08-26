var AppModel = Backbone.Model.extend({
  initialize: function() {
    this.set('randomColorsCollection', new RandomColorsCollection());
  }
});
