var path = require('path');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, './db/html5-color-game.sqlite')
  },
  useNullAsDefault: true
});
var db = require('bookshelf')(knex);


db.knex.schema.hasTable('highScores').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('highScores', function (link) {
      link.increments('id').primary();
      link.string('userName', 255);
      link.integer('score');
      link.integer('timesPlayed');
      link.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
