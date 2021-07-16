<template>
  <table class="facilitator-section facilitator-backlog">
    <tr>
      <td class="left" colspan="16">
        <h4>
          Backlog
        </h4>
        <i v-if="showBacklog" @click="setshowBacklog(false)" title="collapse" class="fas fa-caret-up toggle" />
        <i v-if="!showBacklog" @click="setshowBacklog(true)" title="expand" class="fas fa-caret-down toggle" />
      </td>
    </tr>
    <tr v-if="showBacklog">
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
    <tr v-if="showBacklog" class="header">
      <td>
        backlog
      </td>
      <td>
        <table class="backlog-table">
          <thead>
            <tr>
              <th colspan="13" />
              <th colspan="3">
                Deps
              </th>
              <th colspan="3">
                Int Deps
              </th>
            </tr>
            <tr>
              <th>
                Num Cards
              </th>
              <th>
                Epic
              </th>
              <th>
                Card Id
              </th>
              <th>
                Title
              </th>
              <th>
                Complexity
              </th>
              <th>
                Defense
              </th>
              <th>
                Supremacy
              </th>
              <th>
                Notes
              </th>
              <th>
                Lego Build
              </th>
              <th>
                Liv
              </th>
              <th>
                Com
              </th>
              <th>
                Pwr
              </th>
              <th>
                Dec
              </th>
              <th>
                1
              </th>
              <th>
                2
              </th>
              <th>
                3
              </th>
              <th>
                1
              </th>
              <th>
                2
              </th>
              <th>
                3
              </th>
              <th>
                Ctrl Type
              </th>
              <th>
                Ctrl Num
              </th>
              <th>
                Initiative Color
              </th>
              <th>
                ini-logo
              </th>
              <th>
                Need Int
              </th>
              <th>
                sfondo
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(card, index) in editingGame.backlog" :key="index">
              <td>
                {{ card.NumCards }}
              </td>
              <td>
                {{ card.Epic }}
              </td>
              <td class="center">
                {{ card.Card_ID }}
              </td>
              <td>
                {{ card.Title }}
              </td>
              <td class="center">
                {{ card.Complexity }}
              </td>
              <td class="center">
                {{ card.Defence }}
              </td>
              <td class="center">
                {{ card.Supremacy }}
              </td>
              <td class="center">
                {{ card.Notes }}
              </td>
              <td class="center">
                {{ card.LegoBuild }}
              </td>
              <td class="center">
                {{ card.Liv }}
              </td>
              <td class="center">
                {{ card.Com }}
              </td>
              <td class="center">
                {{ card.Pwr }}
              </td>
              <td class="center">
                {{ card.Dec }}
              </td>
              <td class="center">
                {{ card.Dep1 }}
              </td>
              <td class="center">
                {{ card.Dep2 }}
              </td>
              <td class="center">
                {{ card.Dep3 }}
              </td>
              <td class="center">
                {{ card.DepInt1 }}
              </td>
              <td class="center">
                {{ card.DepInt2 }}
              </td>
              <td class="center">
                {{ card.DepInt3 }}
              </td>
              <td class="center">
                {{ card.Ctrl_type }}
              </td>
              <td class="center">
                {{ card.Ctrl_num }}
              </td>
              <td class="center" :style="{ 'background-color': card.InitiativeColor }">
                {{ card.InitiativeColor }}
              </td>
              <td class="center">
                {{ card["ini-logo"] }}
              </td>
              <td class="center">
                {{ card.NeedInt }}
              </td>
              <td class="center">
                {{ card.sfondo }}
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
      showBacklog: false,
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
    setshowBacklog(val) {
      this.showBacklog = val
    },
    setEditingGame() {
      const id = document.getElementById('editing-game-select').value
      this.$store.dispatch('updateEditingGame', id)
    }
  }
}
</script>

<style lang="scss">
  .facilitator-backlog {

    .backlog-table {
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
