var HighScoreView = Backbone.View.extend({

  className: 'high-score',

  template: _.template('<tr><td> <%=rank%> </td><td> <%=userName%> </td><td> <%=score%> </td></tr>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    console.log(this.model.attributes)
    return this.$el.html(this.template(this.model.attributes) )
  }

});
