
const { v4: uuidv4 } = require('uuid')

const initiativeFuns = require('./initiatives.js')
const eventFuns = require('./events.js')
const backlogFuns = require('./backlog.js')

module.exports = {

  newGame: function(name, protected) {
    const game = {
      id: uuidv4(),
      name: name,
      protected: protected
    }
    game.initiatives = initiativeFuns.newInitiatives()
    game.events = eventFuns.newEvents()
    game.backlog = backlogFuns.newBacklog()

    return game
  }
}
