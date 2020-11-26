<template>
  <div class="container">
    <div class="countNum">{{ countNum }}</div>
    <div>
      <span>Mutations：</span>
      <button @click="incrementCountM">+</button>
      <button @click="decrementCountM">-</button>
    </div>
    <div>
      <span>Actions　：</span>
      <button @click="incrementCountA">+</button>
      <button @click="decrementCountA">-</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    // ▼ Getters
    countNum() {
      return this.$store.getters['countGetters']
    }
  },
  methods: {
    // ▼ Mutations
    incrementCountM() {
      this.$store.commit('incrementMutations', 1)
    },
    decrementCountM() {
      this.$store.commit('decrementMutations', 1)
    },

    // ▼ Actions
    incrementCountA() {
      this.$store.dispatch('incrementActions', 2)
    },
    decrementCountA() {
      this.$store.dispatch('decrementActions', 2)
    }
  }
}
</script>

<style>
  .container {
    text-align: center;
  }
  .countNum {
    font-weight: bold;
    font-size: 24px;
    margin: 20px auto;
  }
</style>
