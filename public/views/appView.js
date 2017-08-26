var appView = Backbone.View.extend({
  initialize: function() {
    this.colorGridView = new ()
  },

  el: '.color-grid',

  template: _.template("<div>this template</div>"),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});
