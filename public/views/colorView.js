var colorView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  el: '.color-grid',

  template: _.template('<span><div style="background-color: blanchedalmond;width: 100px;height: 100px"></div></span>'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
