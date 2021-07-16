<template>
  <table class="facilitator-section facilitator-events">
    <tr>
      <td class="left" colspan="16">
        <h4>
          Events
        </h4>
        <i v-if="showEvents" @click="setShowEvents(false)" title="collapse" class="fas fa-caret-up toggle" />
        <i v-if="!showEvents" @click="setShowEvents(true)" title="expand" class="fas fa-caret-down toggle" />
      </td>
    </tr>
    <tr v-if="showEvents">
      <td>
        Game
      </td>
      <td>
        <select id="editing-game-select" @change="setEditingGame()">
          <option value="">
            -- Select --
          </option>
          <option v-for="(game, index) in games" :key="index" :value="game.id" :selected="game.id == editingGame.id">
            {{ game.name }}
          </option>
        </select>
      </td>
    </tr>
    <tr v-if="showEvents" class="header">
      <td>
        Events
      </td>
      <td>
        <table class="events-table">
          <thead>
            <tr>
              <th>
                Title
              </th>
              <th>
                Request
              </th>
              <th>
                Requirements
              </th>
              <th>
                Background
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(event, index) in editingGame.events" :key="index">
              <td>
                {{ event.title }}
              </td>
              <td>
                {{ event.request }}
              </td>
              <td>
                {{ event.requirements }}
              </td>
              <td>
                {{ event.background }}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </table>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

import bus from '../../socket.js'

export default {
  data() {
    return {
      showEvents: false,
      id: null
    }
  },
  computed: {
    editingGame() {
      return this.$store.getters.getEditingGame
    },
    games() {
      return this.$store.getters.getGames
    }
  },
  methods: {
    setShowEvents(val) {
      this.showEvents = val
    },
    setEditingGame() {
      const id = document.getElementById('editing-game-select').value
      this.$store.dispatch('updateEditingGame', id)
    }
  }
}
</script>

<style lang="scss">
  .facilitator-events {

    .events-table {
      border: none;

      th {
        text-align: center;
        padding: 3px 8px
      }

      td {
        vertical-align: middle;
      }
    }
  }
</style>
