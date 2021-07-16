<template>
  <table class="facilitator-section facilitator-initiatives">
    <tr>
      <td class="left" colspan="16">
        <h4>
          Initiatives
        </h4>
        <i v-if="showInitiatives" @click="setShowInitiatives(false)" title="collapse" class="fas fa-caret-up toggle" />
        <i v-if="!showInitiatives" @click="setShowInitiatives(true)" title="expand" class="fas fa-caret-down toggle" />
      </td>
    </tr>
    <tr v-if="showInitiatives">
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
    <tr v-if="showInitiatives" class="header">
      <td>
        Initiatives
      </td>
      <td>
        <table class="initiatives-table">
          <thead>
            <tr>
              <th>
                Num
              </th>
              <th>
                Epic
              </th>
              <th>
                Code
              </th>
              <th>
                Description
              </th>
              <th>
                Components
              </th>
              <th>
                Complexity
              </th>
              <th>
                Defence
              </th>
              <th>
                Supremacy
              </th>
              <th>
                Color
              </th>
              <th>
                Int1
              </th>
              <th>
                Int2
              </th>
              <th>
                Logo
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(initiative, index) in editingGame.initiatives" :key="index">
              <td class="center">
                {{ initiative.num }}
              </td>
              <td>
                {{ initiative.epic }}
              </td>
              <td class="center">
                {{ initiative.code }}
              </td>
              <td>
                {{ initiative.description }}
              </td>
              <td class="center">
                {{ initiative.components }}
              </td>
              <td class="center">
                {{ initiative.complexity }}
              </td>
              <td class="center">
                {{ initiative.defence }}
              </td>
              <td class="center">
                {{ initiative.supremacy }}
              </td>
              <td :style="{ 'background-color': initiative.initiativeColor }">
                {{ initiative.initiativeColor }}
              </td>
              <td class="center">
                {{ initiative.int1 }}
              </td>
              <td class="center">
                {{ initiative.int2 }}
              </td>
              <td class="center">
                {{ initiative.logo }}
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
      showInitiatives: false,
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
    setShowInitiatives(val) {
      this.showInitiatives = val
    },
    setEditingGame() {
      const id = document.getElementById('editing-game-select').value
      this.$store.dispatch('updateEditingGame', id)
    }
  }
}
</script>

<style lang="scss">
  .facilitator-initiatives {

    .initiatives-table {
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
