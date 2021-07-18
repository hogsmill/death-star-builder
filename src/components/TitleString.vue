<template>
  <h2>
    {{ title() }}
  </h2>
</template>

<script>
export default {
  computed: {
    initiative() {
      return this.$store.getters.getInitiative
    },
    myName() {
      return this.$store.getters.getMyName
    },
    role() {
      console.log('role', this.$store.getters.getRole)
      return this.$store.getters.getRole
    }
  },
  methods: {
    title() {
      const strs = []
      if (this.initiative.id) {
        strs.push(this.initiative.epic)
      }
      if (this.myName.name) {
        strs.push(this.myName.name)
      }
      if (this.role.name || this.role.role) {
        strs.push(this.role.name ? this.role.name : this.role.role)
      }
      return strs.join (' - ')
    }
  }
}
</script>
