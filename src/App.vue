<template>
  <nav-bar/>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
  export default {
    components: {NavBar},
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

ul{
  list-style-type: none;
}

.app {
  padding: 20px;
}
</style>