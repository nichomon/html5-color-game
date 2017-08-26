var appModel = Backbone.Model.extend({
  initialize: function() {
    this.set('colorsCollection', new ColorsCollection());
  }
});
