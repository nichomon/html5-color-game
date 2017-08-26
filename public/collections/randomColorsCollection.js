var RandomColorsCollection = Backbone.Collection.extend({
  model: ColorModel,

  initialize: function() {
    this.genRandomColorModels();
  },

  genRandomColorModels: function() {
    var that = this;
    $.ajax({
      url: 'http://localhost:1337/getRandomColors',
      type: 'GET',
      data: '',
      contentType: 'application/json',
      success: function (data) {
        that.add(data);
        that.trigger('dataLoad');
        // console.log(data)
      },
      error: function (data) {
        console.error('Failed to send message', data);
      }
    });
  }

});
