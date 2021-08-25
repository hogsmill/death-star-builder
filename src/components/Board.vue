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
        <Card v-for="(card, cindex0) in game.backlog[initiative.epic].backlog" :key="cindex0" :card="card" />
      </draggable>
      <draggable class="cycle-cards" :list="game.backlog[initiative.epic].cycle1" :class="{ 'over-commit' : complexity('cycle1') > 15 }" group="backlog" @start="start" @end="end">
        <Card v-for="(card, index1) in game.backlog[initiative.epic].cycle1" :key="index1" :card="card" />
        <DependenciesInternal v-for="(card, dindex1) in game.backlog[initiative.epic].cycle1" :key="dindex1" :card="card" />
      </draggable>
      <draggable class="cycle-cards" :list="game.backlog[initiative.epic].cycle2" :class="{ 'over-commit' : complexity('cycle2') > 15 }" group="backlog" @start="start" @end="end">
        <Card v-for="(card, index2) in game.backlog[initiative.epic].cycle2" :key="index2" :card="card" />
        <DependenciesInternal v-for="(card, dindex2) in game.backlog[initiative.epic].cycle2" :key="dindex2" :card="card" />
      </draggable>
      <draggable class="cycle-cards" :list="game.backlog[initiative.epic].cycle3" :class="{ 'over-commit' : complexity('cycle3') > 15 }" group="backlog" @start="start" @end="end">
        <Card v-for="(card, index3) in game.backlog[initiative.epic].cycle3" :key="index3" :card="card" />
        <DependenciesInternal v-for="(card, dindex3) in game.backlog[initiative.epic].cycle3" :key="dindex3" :card="card" />
      </draggable>
      <draggable class="cycle-cards" :list="game.backlog[initiative.epic].cycle4" :class="{ 'over-commit' : complexity('cycle4') > 15 }" group="backlog" @start="start" @end="end">
        <Card v-for="(card, index4) in game.backlog[initiative.epic].cycle4" :key="index4" :card="card" />
        <DependenciesInternal v-for="(card, dindex4) in game.backlog[initiative.epic].cycle4" :key="dindex4" :card="card" />
      </draggable>
      <draggable class="cycle-cards" :list="game.backlog[initiative.epic].cycle5" :class="{ 'over-commit' : complexity('cycle5') > 15 }" group="backlog" @start="start" @end="end">
        <Card v-for="(card, index5) in game.backlog[initiative.epic].cycle5" :key="index5" :card="card" />
        <DependenciesInternal v-for="(card, dindex5) in game.backlog[initiative.epic].cycle5" :key="dindex5" :card="card" />
      </draggable>
      <draggable class="cycle-cards" :list="game.backlog[initiative.epic].cycle6" :class="{ 'over-commit' : complexity('cycle6') > 15 }" group="backlog" @start="start" @end="end">
        <Card v-for="(card, index6) in game.backlog[initiative.epic].cycle6" :key="index6" :card="card" />
        <DependenciesInternal v-for="(card, dindex6) in game.backlog[initiative.epic].cycle6" :key="dindex6" :card="card" />
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

import Card from './board/Card.vue'
import DependenciesInternal from './board/DependenciesInternal.vue'

export default {
  components: {
    draggable,
    Card,
    DependenciesInternal
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
    start() {

    },
    end() {
      console.log('update db here')
    }
  }
}
</script>

<style lang="scss">
  .titles {
    width: 90%;
    margin: 0 auto;
    font-weight: bold;

    .title {
      display: inline-block;
      width: 14.2%;

      &.over-commit {
        color: red;
      }
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

      &.over-commit {
        background-color: red;
      }
    }
  }
</style>
