<template>
  <div class="card" :id="'card-' + card.id">
    <h5>
      {{ card.id}}: {{ card.title }}
      ({{ card.complexity }})
    </h5>
    <div v-if="card.depInt1 || card.depInt3 || card.depInt3">
      <span v-if="card.depInt1">{{ card.dep1 }}</span>
      <span v-if="card.depInt2">{{ card.dep2 }}</span>
      <span v-if="card.depInt3">{{ card.dep3 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'card'
  ]
}
</script>


<style lang="scss">
  .card {
    margin: 6px;
    border: 1px solid;
    color: #2c3e50;
  }
</style>
