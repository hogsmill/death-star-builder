<template>
  <div class="container about">
    <h2>Facilitator View</h2>
    <Games />
    <Roles />
    <Initiatives />
    <Events />
    <Backlog />
  </div>
</template>

<script>
import Games from './facilitator/Games.vue'
import Roles from './facilitator/Roles.vue'
import Initiatives from './facilitator/Initiatives.vue'
import Events from './facilitator/Events.vue'
import Backlog from './facilitator/Backlog.vue'

export default {
  components: {
    Games,
    Roles,
    Initiatives,
    Events,
    Backlog
  }
}
</script>

<style lang="scss">
.facilitator-section {

  width: 100%;
  margin: 12px;
  border: 1px solid #ccc;

  .toggle {
    color: #aaa;
    font-size: xx-large;

    &:hover {
      cursor: pointer;
    }
  }

  .left {
    text-align: left;
  }

  h4 {
    width: 75%;
    display: inline-block;
    text-align: left;
  }

  span, i {
    position: absolute;
    right: 6px;
  }

  td {
    vertical-align: top;
    position: relative;
    padding: 4px;
    text-align: left;
    border: 1px solid #ccc;

    &.center {
      text-align: center;
    }
    &.left-col {
      vertical-align: top;
    }
  }
  input {
    width: 70px;
    height: 24px;
    padding: 2px;
    text-align: right;
    margin: 0 auto;
  }
}
</style>
