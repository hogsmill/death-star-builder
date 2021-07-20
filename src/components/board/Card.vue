<template>
  <div class="card">
    <h5>
      {{ card.title }}
      ({{ card.complexity }})
    </h5>
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
