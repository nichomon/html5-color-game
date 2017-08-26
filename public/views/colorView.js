var colorView = Backbone.View.extend({

  className: 'colorSquare',

  template: _.template('<div style="width: 100px;height: 100px"><%=backgroundColor%></div>'),

  render: function() {
    console.log(this.model.attributes)
    var element = this.$el.html(this.template(this.model.attributes))
    $(element).css('background-color', this.model.attributes.backgroundColor)
    return element;
  }
});
