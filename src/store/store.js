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
    gameName: '',
    games: [],
    koenigs: []
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
      let suffix = ''
      switch (state.appType) {
        case '5 Dysfunctions':
          suffix = 'fd'
          break
        case 'Team Health Check':
          suffix = 'hc'
          break
      }
      return suffix
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
