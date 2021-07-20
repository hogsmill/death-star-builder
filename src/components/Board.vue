<template>
  <div v-if="initiative">
    <div class="titles">
      <div class="title">
        Backlog
      </div>
      <div v-for="(n, index) in 6" :key="index" class="title" :class="{ 'over-commit' : complexity('cycle' + n) > 15 }">
        Cycle {{ n }} ({{ complexity('cycle' + n) }}/15)
      </div>
    </div>
    <div class="board">
      <draggable class="cycle-cards" :list="game.backlog[initiative.epic].backlog" group="backlog" @start="start" @end="end">
        <Card v-for="(card, index) in game.backlog[initiative.epic].backlog" :key="index" :card="card" />
      </draggable>
      <draggable class="cycle-cards" :list="game.backlog[initiative.epic].cycle1" :class="{ 'over-commit' : complexity('cycle1') > 15 }" group="backlog" @start="start" @end="end">
        <Card v-for="(card, index) in game.backlog[initiative.epic].cycle1" :key="index" :card="card" />
      </draggable>
      <draggable class="cycle-cards" :list="game.backlog[initiative.epic].cycle2" :class="{ 'over-commit' : complexity('cycle2') > 15 }" group="backlog" @start="start" @end="end">
        <Card v-for="(card, index) in game.backlog[initiative.epic].cycle2" :key="index" :card="card" />
      </draggable>
      <draggable class="cycle-cards" :list="game.backlog[initiative.epic].cycle3" :class="{ 'over-commit' : complexity('cycle3') > 15 }" group="backlog" @start="start" @end="end">
        <Card v-for="(card, index) in game.backlog[initiative.epic].cycle3" :key="index" :card="card" />
      </draggable>
      <draggable class="cycle-cards" :list="game.backlog[initiative.epic].cycle4" :class="{ 'over-commit' : complexity('cycle4') > 15 }" group="backlog" @start="start" @end="end">
        <Card v-for="(card, index) in game.backlog[initiative.epic].cycle4" :key="index" :card="card" />
      </draggable>
      <draggable class="cycle-cards" :list="game.backlog[initiative.epic].cycle5" :class="{ 'over-commit' : complexity('cycle5') > 15 }" group="backlog" @start="start" @end="end">
        <Card v-for="(card, index) in game.backlog[initiative.epic].cycle5" :key="index" :card="card" />
      </draggable>
      <draggable class="cycle-cards" :list="game.backlog[initiative.epic].cycle6" :class="{ 'over-commit' : complexity('cycle6') > 15 }" group="backlog" @start="start" @end="end">
        <Card v-for="(card, index) in game.backlog[initiative.epic].cycle6" :key="index" :card="card" />
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

import Card from './board/Card.vue'

export default {
  components: {
    draggable,
    Card
  },
  computed: {
    initiative() {
      return this.$store.getters.getInitiative
    },
    game() {
      return this.$store.getters.getGame
    }
  },
  methods: {
    complexity(cycle) {
      let n = 0
      for (let i = 0; i < this.game.backlog[this.initiative.epic][cycle].length; i++) {
        n = n + parseInt(this.game.backlog[this.initiative.epic][cycle][i].complexity)
      }
      return n
    },
    start(e) {
    },
    end(e) {
    }
  }
}
</script>

<style lang="scss">
  .over-commit {
    background-color: red;
    color: #fff;
  }

  .titles {
    width: 90%;
    margin: 0 auto;
    font-weight: bold;

    .title {
      display: inline-block;
      width: 14.2%;
    }
  }

  .board {
    div {
      border: 1px solid;
    }

    min-height: 800px;
    background-color: #eee;
    width: 90%;
    margin: 0 auto;
    vertical-align: top;

    .cycle-cards {
      width: 14.2%;
      display: inline-block;
      min-height: 800px;
      float: left;
    }
  }
</style>
