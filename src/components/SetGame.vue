<template>
  <span>

    <button class="btn btn-sm btn-secondary smaller-font" @click="show()">
      Set Up
    </button>


    <modal name="set-up" :height="385" class="rounded">
      <div class="float-right mr-2 mt-1">
        <button type="button" class="close" @click="hide()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="mt-4">
        <h4>
          Game Set Up
        </h4>
        <table class="setup-table">

          <!-- Game -->

          <tr class="rounded" :class="{ 'error': gameError }">
            <td>Game Name:</td>
            <td>
              <span v-if="gameFromParams()">{{ game.name }}</span>
              <select v-if="!gameFromParams()" id="game-name-select" class="form-control" @change="setGame()">
                <option value=""> -- Select -- </option>
                <option v-for="(g, index) in games" :key="index" :value="g.id" :selected="gameId == g.id">
                  {{ g.name }}
                </option>
              </select>
            </td>
          </tr>

          <!-- Initiatives -->

          <tr :class="{ 'error': initiativeError }">
            <td>Initiative: </td>
            <td>
              <select v-if="gameId" id="initiative-select" class="form-control">
                <option value=""> -- Select -- </option>
                <option v-for="(initiative, index) in game.initiatives" :key="index" :value="initiative.id" :selected="initiative.id == initiativeId">
                  {{ initiative.epic }}
                </option>
              </select>
            </td>
          </tr>

          <!-- My Name -->

          <tr :class="{ 'error': nameError }">
            <td>My Name:</td>
            <td>
              <input type="text" id="my-name" class="form-control" :value="myName.name">
            </td>
          </tr>

          <!-- Role -->

          <tr :class="{ 'error': roleError }">
            <td>My Role: </td>
            <td>
              <select v-if="gameId" id="role-select" class="form-control">
                <option value="">
                  -- Select --
                </option>
                <option v-for="(role, index) in game.gameRoles" :key="index" :selected="role.name ? role.name == myRole.name : role.role == myRole.role">
                  {{ roleName(role) }}
                </option>
              </select>
            </td>
          </tr>

        </table>
        <button class="btn btn-sm btn-primary smaller-font" @click="save()">
          Done
        </button>
      </div>
    </modal>

  </span>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

import bus from '../socket.js'

import params from '../lib/params.js'
import stringFuns from '../lib/stringFuns.js'

export default {
  data() {
    return {
      gameSetFromParams: false,
      gameRoles: [],
      gameError: false,
      initiativeError: false,
      nameError: false,
      roleError: false
    }
  },
  computed: {
    lsSuffix() {
      return this.$store.getters.lsSuffix
    },
    gameId() {
      return this.$store.getters.getGameId
    },
    game() {
      return this.$store.getters.getGame
    },
    initiativeId() {
      return this.$store.getters.getInitiativeId
    },
    myName() {
      return this.$store.getters.getMyName
    },
    myRole() {
      return this.$store.getters.getRole
    },
    games() {
      return this.$store.getters.getGames
    }
  },
  methods: {
    show() {
      bus.$emit('sendGetGames')
      this.$modal.show('set-up')
    },
    hide() {
      this.$modal.hide('set-up')
    },
    gameFromParams() {
      return params.getParam('game')
    },
    setGame() {
      const gameId = document.getElementById('game-name-select').value
      this.$store.dispatch('updateGameId', gameId)
    },
    reset() {
      this.gameError = false
      this.nameError = false
      this.initiativeError = false
      this.roleError = false
    },
    roleName(role) {
      return role.name ? role.name : role.role
    },
    getMyName() {
      let nameData
      const name = stringFuns.sanitize(document.getElementById('my-name').value)
      if (this.myName && this.myName.id) {
        nameData = this.myName
      } else {
        const uuid = uuidv4()
        nameData = {id: uuid, name: ''}
      }
      nameData.name = name
      return nameData
    },
    getMyRole() {
      let myRole = ''
      if (document.getElementById('role-select')) {
        myRole = document.getElementById('role-select').value
      } else {
        myRole = this.myRole
      }
      return myRole
    },
    showErrors(gameId, initiativeId, myName, role) {
      if (! gameId ) { this.gameError = true }
      if (! initiativeId ) { this.initiativeError = true }
      if (! role ) { this.roleError = true }
      if (! myName.name ) { this.nameError = true }
    },
    setLocalStorage(gameId, initiativeId, myName, myRole) {
      localStorage.setItem('game-' + this.lsSuffix, gameId)
      localStorage.setItem('initiative-' + this.lsSuffix, initiativeId)
      localStorage.setItem('name-' + this.lsSuffix, JSON.stringify(myName))
      localStorage.setItem('role-' + this.lsSuffix, myRole)
    },
    save() {
      this.reset()
      const gameId = document.getElementById('game-name-select').value
      const initiativeId = document.getElementById('initiative-select').value
      const myName = this.getMyName()
      const role = document.getElementById('role-select').value
      const data = {
        gameId: gameId,
        initiativeId: initiativeId,
        myName: myName,
        role: role
      }
      this.showErrors(gameId, initiativeId, myName, role)
      if (this.gameError || this.initiativeError || this.nameError || this.roleError) {
        alert('Please set all required fields before saving')
      } else {
        this.setLocalStorage(gameId, initiativeId, myName, role)
        this.$store.dispatch('updateMyGame', data)
        this.hide()
      }
    }
  }
}
</script>

<style lang="scss">

  .setup-table {
    margin: 0 auto 20px auto;
    border: 1px solid #ccc;
    width: initial;

    td {
      height: 45px;
      border: 1px solid #ccc;
      vertical-align: middle;

      div {
        padding: 6px;
        text-align: left;

        &.my-name {
        margin-top: 6px;
        margin-bottom: 6px;
        }

        &.my-name-edit {
          padding-bottom: 0;
        }
      }

      &:nth-child(1) {
        padding: 2px 10px;
      }
      &:nth-child(2) {
        width: 200px; ;
      }

      select {
        padding: 0;
      }

      &.button {
        vertical-align: middle;
        width: 60px;

        button {
          margin: 6px;
        }
      }

      .fas {
        color: #888;
        font-size: x-large;

        &:hover {
          cursor: pointer;
          color: #5a6268
        }
      }
    }

    .error {
      background-color: red;
      color: #fff;
    }
  }

</style>
