<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__item">
        <my-button
          @click="$router.push('/')"
          class="nav__button"
        >Home</my-button>
      </li>
      <li class="navbar__item">
        <my-button
          @click="$router.push('/users')"
          class="nav__button"
        >Users list</my-button>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.navbar{
  padding: 20px;

  border: 2px solid burlywood;
  box-shadow: 2px 2px 4px goldenrod;
}

.navbar__list{
  height: 50px;

  display: flex;
  align-items: center;
}

.nav__button{
  margin-right: 15px;
}
</style>