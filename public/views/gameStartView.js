var GameStartView = Backbone.View.extend({
  className: 'game-start',

  initialize: function() {
    this.render();
  },

  template: _.template(
                        ['<h1 class="awesome-title">',
                        'How many ridiculous html5 colornames can you enter in 30 seconds???',
                        '</h1>',
                        '<h5>',
                          'Enter your name:  ',
                        '</h5>',
                        '<input id="name-input-box" type="text" autofocus="autofocus"> ',
                        '<button type:"button">',
                          'START',
                        '</button>'].join(' ')
                      ),

    events: {
      'change input#name-input-box': 'submitNameAndStartGame'
    },

  submitNameAndStartGame: function() {
      var input = document.getElementById('name-input-box').value;
      this.model.enterUser(input);
      this.model.gameStart();
  },

  render: function() {
    return this.$el.html(this.template());
  }

});
