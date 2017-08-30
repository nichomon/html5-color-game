var colorData = require('./html5-colors.json');
var express = require('express');
var db = require('./db-config');
var bodyParser = require('body-parser');
var Promise = require('bluebird');


var app = express();

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

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

app.get('/getHighScores', function(req, res) {
  getHighScores(req,res)
})

app.post('/sendStats', function(req,res) {
  var userStats = req.body;

  HighScore.where('userName', userStats.userName).fetch()
    .then(function(userExists) {
      if (userExists) {
        if (userExists.attributes.score < userStats.score) {
          userExists.save({'timesPlayed': userExists.get('timesPlayed') + 1, score: userStats.score})
        } else {
          userExists.save({'timesPlayed': userExists.get('timesPlayed') + 1})
        }
      } else {
        new HighScore ({userName: userStats.userName, score: userStats.score, timesPlayed: 1}).save()
      }
    })
    .then(function() {
      console.log('record allegedly updated')
    })
    .catch(function(error) {
      console.log(error)
    });

  res.send(getHighScores())
});

app.listen(1337, function() {
  console.log('listening on port 1337 🤠');
})


//---------------------- utilities ----------------------//

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function getHighScores(req, res) {

new HighScore().orderBy('score','DESC').query(function(queryOptions) {
    queryOptions.limit(10);
  })
  .fetchAll()
  .then(function (results) {
    var highScores = [];
    var header = {rank: '<th>RANK</th>',userName: '<th>PLAYER NAME</th>',score: '<th>SCORE</th>'};
    highScores.push(header);
    for (var i = 0; i < results.length; i++) {
      var newScore = {};
      newScore.rank = i + 1;
      newScore.userName = results.models[i].attributes.userName;
      newScore.score = results.models[i].attributes.score;
      highScores.push(newScore)
    }
    res.send(highScores);
  })


}



//---------------------- DATABASE MODEL ----------------------//
var HighScore = db.Model.extend({
  tableName: 'highScores',
  hasTimestamps: true
});
//---------------------- END DATABASE MODEL ----------------------//
