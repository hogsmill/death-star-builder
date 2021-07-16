<template>
  <table class="facilitator-section facilitator-games">
    <tr>
      <td class="left" colspan="16">
        <h4>
          Games ({{ games.length }})
        </h4>
        <i v-if="showGames" @click="setShowGames(false)" title="collapse" class="fas fa-caret-up toggle" />
        <i v-if="!showGames" @click="setShowGames(true)" title="expand" class="fas fa-caret-down toggle" />
      </td>
    </tr>
    <tr v-if="showGames">
      <td colspan="2" class="add-game">
        <input type="text" id="add-new-game">
        <button id="add-new" class="btn btn-sm btn-site-primary add-new" @click="addGame()">
          Add New Game
        </button>
      </td>
    </tr>
    <tr v-if="showGames" class="header">
      <td>
        Games
      </td>
      <td>
        <table class="games-table">
          <thead>
            <tr>
              <th>
                Game Name
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(game, index) in games" :key="index">
              <td>
                {{ game.name }}
              </td>
              <td>
                <button class="btn btn-sm btn-site-primary" @click="deleteGame(game)" :disabled="game.protected || game.name == gameName">
                  Delete
                </button>
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

import stringFuns from '../../lib/stringFuns.js'

export default {
  data() {
    return {
      showGames: false
    }
  },
  computed: {
    gameName() {
      return this.$store.getters.getGameName
    },
    games() {
      return this.$store.getters.getGames
    }
  },
  created() {
    bus.$on('addGameError', (data) => {
      alert(data.error)
    })
  },
  methods: {
    setShowGames(val) {
      this.showGames = val
      if (val) {
         bus.$emit('sendGetGames', {appType: this.appType})
      }
    },
    idSafe(game) {
      return stringFuns.idSafe(game.gameName)
    },
    addGame() {
      const game = document.getElementById('add-new-game').value
      bus.$emit('sendAddGame', {name: game})
    },
    deleteGame(game) {
      if (confirm('Delete ' + game.name + '?')) {
        bus.$emit('sendDeleteGame', {id: game.id})
      }
    }
  }
}
</script>

<style lang="scss">
  .facilitator-games {

     .add-game {
       text-align: center;

       #add-new-game {
         width: 200px;
         text-align: left;
       }

      .add-new {
        margin-left: 4px;
      }
    }

    .games-table {
      border: none;

      th {
        text-align: center;
        padding: 3px 8px
      }
    }
  }
</style>
