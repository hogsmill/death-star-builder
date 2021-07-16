<template>
  <table class="facilitator-section facilitator-roles">
    <tr>
      <td class="left" colspan="16">
        <h4>
          Roles
        </h4>
        <i v-if="showRoles" @click="setShowRoles(false)" title="collapse" class="fas fa-caret-up toggle" />
        <i v-if="!showRoles" @click="setShowRoles(true)" title="expand" class="fas fa-caret-down toggle" />
      </td>
    </tr>
    <tr v-if="showRoles">
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
    <tr v-if="showRoles" class="header">
      <td>
        Roles
      </td>
      <td>
        <table class="roles-table">
          <thead>
            <tr>
              <th>
                Num
              </th>
              <th>
                Type
              </th>
              <th>
                Name
              </th>
              <th>
                Real Name
              </th>
              <th>
                Face
              </th>
              <th>
                As
              </th>
              <th>
                Can
              </th>
              <th>
                Want
              </th>
              <th>
                So
              </th>
              <th>
                Logo
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(role, index) in editingGame.roles" :key="index">
              <td>
                {{ role.num }}
              </td>
              <td>
                {{ role.Type }}
              </td>
              <td>
                {{ role.Name }}
              </td>
              <td>
                {{ role.RealName }}
              </td>
              <td>
                {{ role.Face }}
              </td>
              <td>
                {{ role.As }}
              </td>
              <td>
                <ul>
                  <li v-for="(ability, cindex) in role.can" :key="cindex">
                    {{ ability }}
                  </li>
                </ul>
              </td>
              <td>
                {{ role.want }}
              </td>
              <td>
                {{ role.so }}
              </td>
              <td>
                {{ role.logo }}
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
      showRoles: false,
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
    setShowRoles(val) {
      this.showRoles = val
    },
    setEditingGame() {
      const id = document.getElementById('editing-game-select').value
      this.$store.dispatch('updateEditingGame', id)
    }
  }
}
</script>

<style lang="scss">
  .facilitator-roles {

    .roles-table {
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
