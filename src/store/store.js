import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getContext(state, context) {
  return context == 'switching' ? state.switching : state.noSwitching
}

export const store = new Vuex.Store({
  state: {
    thisGame: 'Death Star Builder',
    session: null,
    userName: '',
    admin: false,
    connections: 0,
    connectionError: null,
    localStorageStatus: true,
    currentTab: 'game',
    walkThrough: false,
    editingGame: {},
    gameId: null,
    initiativeId: null,
    myName: {},
    role: {},
    games: [],
    game: {},
    initiative: {}
  },
  getters: {
    thisGame: (state) => {
      return state.thisGame
    },
    getSession: (state) => {
      return state.session
    },
    getUserName: (state) => {
      return state.userName
    },
    getAdmin: (state) => {
      return state.admin
    },
    lsSuffix: (state) => {
      return 'ds'
    },
    getCurrentTab: (state) => {
      return state.currentTab
    },
    getWalkThrough: (state) => {
      return state.walkThrough
    },
    getEditingGame: (state) => {
      return state.editingGame
    },
    getGames: (state) => {
      return state.games
    },
    getGame: (state) => {
      return state.game
    },
    getGameId: (state) => {
      return state.gameId
    },
    getInitiative: (state) => {
      return state.initiative
    },
    getInitiativeId: (state) => {
      return state.initiativeId
    },
    getMyName: (state) => {
      return state.myName
    },
    getRole: (state) => {
      return state.role
    },
    getGameName: (state) => {
      return state.gameName
    },
    getConnections: (state) => {
      return state.connections
    },
    getConnectionError: (state) => {
      return state.connectionError
    },
    getLocalStorageStatus: (state) => {
      return state.localStorageStatus
    },
    getLastAccessed: (state) => {
      return state.lastaccess
    }
  },
  mutations: {
    updateLogin: (state, payload) => {
      state.session = payload.session
      state.userName = payload.userName
      state.admin = payload.loggedInAsAdmin
    },
    updateAdmin: (state, payload) => {
      state.admin = payload
    },
    updateCurrentTab: (state, payload) => {
      state.currentTab = payload
    },
    updateWalkThrough: (state, payload) => {
      state.walkThrough = payload
    },
    updateEditingGame: (state, payload) => {
      const editingGame = state.games.find((g) => {
        return g.id == payload
      })
      state.editingGame = editingGame ? editingGame : {}
    },
    updateGames: (state, payload) => {
      state.games = payload
    },
    updateGame: (state, payload) => {
      state.game = payload
    },
    updateGameId: (state, payload) => {
      state.gameId = payload
      const game = state.games.find((g) => {
        return g.id = state.gameId
      })
      state.game = game ? game : {}
      if (state.game.id) {
        const roles = []
        let i
        for (i = 0; i < state.game.fixedRoles.length; i++) {
          roles.push(state.game.fixedRoles[i])
        }
        for (i = 0; i < state.game.roles.length; i++) {
          if (!state.game.roles[i].setRoles) {
            roles.push(state.game.roles[i])
          }
        }
        state.game.gameRoles = roles
      }
    },
    updateMyGame: (state, payload) => {
      state.initiativeId = payload.initiativeId
      const initiative = state.game.initiatives.find((i) => {
        return i.id == state.initiativeId
      })
      state.initiative = initiative ? initiative : {}
      state.myName = payload.myName
      const role = state.game.gameRoles.find((r) => {
        return r.name ? r.name == payload.role : r.role == payload.role
      })
      state.role = role ? role : {}
    },
    updateMyName: (state, payload) => {
      state.myName = payload
    },
    updateRole: (state, payload) => {
      state.role = payload
    },
    updateConnections: (state, payload) => {
      state.connections = payload
    },
    updateConnectionError: (state, payload) => {
      state.connectionError = payload
    },
    localStorageStatus: (state, payload) => {
      state.localStorageStatus = payload
    }
  },
  actions: {
    updateLogin: ({ commit }, payload) => {
      commit('updateLogin', payload)
    },
    updateUserName: ({ commit }, payload) => {
      commit('updateUserName', payload)
    },
    updateAdmin: ({ commit }, payload) => {
      commit('updateAdmin', payload)
    },
    updateCurrentTab: ({ commit }, payload) => {
      commit('updateCurrentTab', payload)
    },
    updateWalkThrough: ({ commit }, payload) => {
      commit('updateWalkThrough', payload)
    },
    updateEditingGame: ({ commit }, payload) => {
      commit('updateEditingGame', payload)
    },
    updateGames: ({ commit }, payload) => {
      commit('updateGames', payload)
    },
    updateGame: ({ commit }, payload) => {
      commit('updateGame', payload)
    },
    updateGameId: ({ commit }, payload) => {
      commit('updateGameId', payload)
    },
    updateMyGame: ({ commit }, payload) => {
      commit('updateMyGame', payload)
    },
    updateConnections: ({ commit }, payload) => {
      commit('updateConnections', payload)
    },
    updateConnectionError: ({ commit }, payload) => {
      commit('updateConnectionError', payload)
    },
    localStorageStatus: ({ commit }, payload) => {
      commit('localStorageStatus', payload)
    }
  }
})
