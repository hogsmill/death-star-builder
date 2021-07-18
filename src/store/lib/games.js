
const { v4: uuidv4 } = require('uuid')

const roleFuns = require('./roles.js')
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
    game.capabilities = roleFuns.capabiities()
    game.roles = roleFuns.roles()
    game.fixedRoles = roleFuns.fixedRoles()
    game.initiatives = initiativeFuns.new()
    game.events = eventFuns.new()
    game.backlog = backlogFuns.new()
    game.members = []

    return game
  }
}
