var AppModel = Backbone.Model.extend({
  initialize: function() {
    this.set('colorsCollection', new ColorsCollection());
  }
});
