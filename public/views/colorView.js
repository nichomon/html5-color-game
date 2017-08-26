var colorView = Backbone.View.extend({



  template: _.template('<span style="width: 100px;height: 100px">something</span>'),

  render: function() {
    console.log(this.model.attributes)
    var element = this.$el.html(this.template())
    $(element).css('background-color', this.model.attributes.backgroundColor)
    return element;
  }
});


/* <span><div style="background-color: blanchedalmond;width: 100px;height: 100px">something</div></span> */
