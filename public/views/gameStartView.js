var GameStartView = Backbone.View.extend({
  className: 'game-start',

  initialize: function() {
    this.render();
  },

  template: _.template('<h5>Enter your name:  </h5><input id="name-input-box" type="text" autofocus="autofocus"> <button type:"button">START</button>'),

    events: {
      'change input#name-input-box': 'submitNameAndStartGame'
    },

  submitNameAndStartGame: function() {
      var input = document.getElementById('name-input-box').value;
      this.model.gameStart();
  },

  render: function() {
    return this.$el.html(this.template());
  }

});
