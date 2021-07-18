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
    <tr v-if="showRoles">
      <td>
        Roles
      </td>
      <td>
        <select v-if="editingGame.id" id="editing-role-select" @change="setEditingRole()">
          <option value="">
            -- Select --
          </option>
          <option v-for="(role, index) in editingGame.roles" :key="index" :value="role.id" :selected="role.id == editingRole.id">
            {{ role.role }}
          </option>
        </select>
        <div v-if="editingRole.id">
          <p>Capabilities</p>
          <table class="capabilities-table">
            <tr v-for="(capability, cindex) in editingGame.capabilities" :key="cindex">
              <td>
                <i v-if="editingRole.capabilities.indexOf(capability.id) > -1" class="fas fa-check" />
                <i v-if="editingRole.capabilities.indexOf(capability.id) < 0" class="fas fa-times" />
              </td>
              <td>
                {{ capability.capability }}
              </td>
            </tr>
          </table>
        </div>
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
                Player
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
                Want
              </th>
              <th>
                So
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(role, index) in editingGame.roles" :key="index">
              <td>
                {{ role.player }}
              </td>
              <td>
                {{ role.name }}
              </td>
              <td>
                {{ role.realName }}
              </td>
              <td>
                {{ role.face }}
              </td>
              <td>
                {{ role.want }}
              </td>
              <td>
                {{ role.so }}
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
      editingRole: {},
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
    },
    setEditingRole() {
      const id = document.getElementById('editing-role-select').value
      const role = this.editingGame.roles.find((r) => {
        return r.id == id
      })
      this.editingRole = role ? role : {}
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

    .capabilities-table {
      .fas {
        position: relative;
        right: 0;
        width: 16px;

        &.fa-check {
          color: green;
        }

        &.fa-times {
          color: red;
        }
      }
    }
  }
</style>
