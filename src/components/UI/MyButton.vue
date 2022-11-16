<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button'
  }
</script>

<style scoped>
.button {
  text-align: ;
  padding: 10px 15px;
  color: burlywood;
  background-color: transparent;
  border: 2px solid burlywood;
  cursor: pointer;
}

.button:hover, .button:focus {
  background-color: ghostwhite;
}
</style>