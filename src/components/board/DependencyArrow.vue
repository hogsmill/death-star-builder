<template>
  <svg height="10000" width="10000">
    <defs>
      <marker id="markerArrow" markerWidth="13" markerHeight="13" refX="2" refY="6" orient="auto">
        <path d="M2,2 L2,11 L10,6 L2,2" style="fill: #000000;" />
      </marker>
    </defs>
    <!-- <line :x1="from.x" :y1="from.y" :x2="to.x" :y2="to.y" class="arrow" /> -->
    <line x1=672 y1=335 x2=397 y2=310 class="arrow" />
  </svg>
</template>

<script>
export default {
  props: [
    'from',
    'to'
  ],
  created() {
    console.log(this.from, this.to)
  }
}
</script>

<style lang="scss">
  svg {
    position: absolute;
    border: 1px solid;
    top: 0;
    left: 0;

    .arrow {
      stroke: rgb(0,0,0);
      stroke-width: 2;
      marker-end: url(#markerArrow)
    }
  }
</style>
