<template>
  <span>
    <DependencyArrow v-if="card.depInt1" :from="cardCentre(card.id)" :to="cardCentre(card.dep1)" />
    <DependencyArrow v-if="card.depInt2" :from="cardCentre(card.id)" :to="cardCentre(card.dep2)" />
    <DependencyArrow v-if="card.depInt3" :from="cardCentre(card.id)" :to="cardCentre(card.dep3)" />
  </span>
</template>

<script>
import DependencyArrow from './DependencyArrow.vue'

export default {
  components: {
    DependencyArrow
  },
  props: [
    'card'
  ],
  computed: {
    initiative() {
      return this.$store.getters.getInitiative
    },
    game() {
      return this.$store.getters.getGame
    }
  },
  methods: {
    cardCentre(id) {
      const node = document.getElementById('card-' + id)
      const rect = node.getBoundingClientRect()
      return {
        x: parseInt(rect.left + (rect.width / 2)),
        y: parseInt(rect.top + (rect.height /2))
      }
    }
  }
}
</script>
