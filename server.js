var colorData = require('./html5-colors.json');
var express = require('express');

var app = express();

app.use(express.static('./public'));

app.get('/getColors', function(req, res) {
  res.send(colorData);
})

app.get('/getRandomColors', function(req,res) {
  var randomColors = [];
  var randomNums = [];
  while (randomNums.length !== 20) {
    var num = getRandomIntInclusive(0,147)
    if (randomNums.indexOf(num) === -1) {
      randomNums.push(num);
      randomColors.push(colorData[num])
    }
  }
  res.send(randomColors);
})

app.listen(1337, function() {
  console.log('listening on port 1337 🤠');
})


//---------------------- utilities ----------------------//

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
