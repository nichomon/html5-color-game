var Songs = Backbone.Collection.extend({

  model: colorModel,
  initialize: function() {
    this.genColorModels();
  },


  genColorModels: function() {
    var that = this;
    $.ajax({
      url: 'http://localhost:1337/getColors',
      type: 'GET',
      data: '',
      contentType: 'application/json',
      success: function (data) {
        // that.add(data.results);
        // that.trigger('dataLoad');
        console.log(data)
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('Failed to send message', data);
      }
    });
  }
  // url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs'

});
