<template>
  <input
    :value="value"
    @input="updateInput"
    class="input"
  >
</template>

<script>
export default {
  name: "my-input",
  props: {
    value: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  border: 2px solid burlywood;
  padding: 10px 15px;
  margin-bottom: 10px;
}
</style>