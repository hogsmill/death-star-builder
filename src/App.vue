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
      </h1>
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

export default {
  name: 'App',
  components: {
    Header,
    ClearStorage,
    WalkThroughView,
    ConnectionError,
    FacilitatorView
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
    })
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
