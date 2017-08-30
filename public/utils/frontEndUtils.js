$(window.allTheColors = function() {
  var txtToWrap = $('h1.awesome-title').text().split(' ');
  var newTxt = [];
  for (var i = 0; i < txtToWrap.length; i ++) {
    if (txtToWrap[i] !== '' || txtToWrap[i] !== ' ' || txtToWrap[i] !== '  ') {
      newTxt.push('<span>');
      newTxt.push(txtToWrap[i])
      newTxt.push('</span>');
    }
  }
  $('h1').html(newTxt.join(' '))

  function changeColor() {
    for (var j = 0; j < $('h1').children.length; j ++) {
      $('h1').children().each(function() {
        $(this).css('color' , 'rgb(' + randNum(0,255) + ', ' + randNum(0,255) + ', ' + randNum(0,255) + ')' );
        $('button').css('background-color' , 'rgb(' + randNum(0,255) + ', ' + randNum(0,255) + ', ' + randNum(0,255) + ')' );
      });
    }

    setTimeout(changeColor,1000);
  };

  changeColor();


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  function randNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
})
