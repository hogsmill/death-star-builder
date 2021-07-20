<template>
  <div id="app" class="mb-4">
    <Header />
    <ClearStorage />
    <ConnectionError />
    <WalkThroughView />
    <div v-if="currentTab == 'facilitator'">
      <FacilitatorView />
    </div>
    <div v-if="currentTab == 'game'" class="main">
      <h1>
        Death Star Builder
        <span v-if="game.id">
          ({{ game.name }})
        </span>
      </h1>
      <TitleString />
      <SetGame />
      <Board />
    </div>
  </div>
</template>

<script>
import bus from './socket.js'

import ls from './lib/localStorage.js'
import params from './lib/params.js'

import Header from './components/Header.vue'
import ClearStorage from './components/ClearStorage.vue'
import WalkThroughView from './components/about/WalkThroughView.vue'
import ConnectionError from './components/error/ConnectionError.vue'

import FacilitatorView from './components/FacilitatorView.vue'

import SetGame from './components/SetGame.vue'
import TitleString from './components/TitleString.vue'
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    Header,
    ClearStorage,
    WalkThroughView,
    ConnectionError,
    FacilitatorView,
    SetGame,
    TitleString,
    Board
  },
  computed: {
    admin() {
      return this.$store.getters.getAdmin
    },
    lsSuffix() {
      return this.$store.getters.lsSuffix
    },
    currentTab() {
      return this.$store.getters.getCurrentTab
    },
    game() {
      return this.$store.getters.getGame
    },
    initiative() {
      return this.$store.getters.getInitiative
    },
    myName() {
      return this.$store.getters.getMyName
    },
    role() {
      return this.$store.getters.getRole
    }
  },
  created() {
    bus.$on('connectionError', (data) => {
      this.$store.dispatch('updateConnectionError', data)
    })

    this.$store.dispatch('localStorageStatus', ls.check())

    bus.$emit('sendCheckSystem')

    if (location.hostname == 'localhost' && params.isParam('host')) {
      this.$store.dispatch('updateAdmin', true)
    }

    if (params.getParam('walkThrough')) {
      this.$store.dispatch('updateWalkThrough', true)
    }

    bus.$on('updateConnections', (data) => {
      this.$store.dispatch('updateConnectionError', null)
      this.$store.dispatch('updateConnections', data)
    })

    bus.$on('loadGames', (data) => {
    console.log(data)
      this.$store.dispatch('updateGames', data)
      const gameId = localStorage.getItem('game-' + this.lsSuffix)
      this.$store.dispatch('updateGameId', gameId)
      const initiativeId = localStorage.getItem('initiative-' + this.lsSuffix)
      const myName = JSON.parse(localStorage.getItem('name-' + this.lsSuffix))
      const role = localStorage.getItem('role-' + this.lsSuffix)
      if (gameId && initiativeId) {
        const data = {
          gameId: gameId,
          initiativeId: initiativeId,
          myName: myName,
          role: role
        }
        this.$store.dispatch('updateMyGame', data)
      }
    })
  },
  methods: {
    roleName(role) {
      return role.name ? role.name : role.role
    }
  }
}
</script>

<style lang="scss">
  #app {
    min-height: 850px;
  }
</style>
