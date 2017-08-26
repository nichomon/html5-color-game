$(function () {
  // listen for input
  $(document).keypress(function(e) {
    if(e.which == 13) {
      var input = document.getElementById('input-box').value;
      console.log(RandomColorsCollection.findWhere({backgroundColor: input}))

      $('#input-box').val('');
    }
});
})
