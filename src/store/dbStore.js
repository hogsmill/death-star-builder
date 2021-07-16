
const { v4: uuidv4 } = require('uuid')

const gameFuns = require('./lib/games.js')

function _loadGames(db, io, debugOn) {

  if (debugOn) { console.log('loadGames') }

  db.gamesCollection.find().toArray(function(err, games) {
    if (err) throw err
    io.emit('loadGames',  games)
  })
}

function _addGame(db, io, data, debugOn) {

  if (debugOn) { console.log('addGame', data) }

  db.gamesCollection.insertOne(data, function(err, res) {
    if (err) throw err
    _loadGames(db, io, debugOn)
  })
}

module.exports = {

  checkSystem: function(db, io, debugOn) {

    if (debugOn) { console.log('checkSystem') }

    const name = 'Demo'
    db.gamesCollection.findOne({name: name}, function(err, res) {
      if (err) throw err
      if (res) {
        _loadGames(db, io, debugOn)
      } else {
        const game = gameFuns.newGame(name, true)
        _addGame(db, io, game, debugOn)
      }
    })
  },

  addGame: function(db, io, data, debugOn) {

    if (debugOn) { console.log('addGame', data) }

    db.gamesCollection.findOne({name: data.name}, function(err, res) {
      if (err) throw err
      if (res) {
        io.emit('addGameError', {id: data.id, error: 'Game exists'})
      } else {
        const game = gameFuns.newGame(data.name, false)
        _addGame(db, io, game, debugOn)
      }
    })
  },

  deleteGame: function(db, io, data, debugOn) {

    if (debugOn) { console.log('deleteGame', data) }

    db.gamesCollection.deleteOne({id: data.id}, function(err, res) {
      if (err) throw err
      _loadGames(db, io, debugOn)
    })
  }

}
