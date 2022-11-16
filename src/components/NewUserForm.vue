<template>
  <form class="create-user">
    <my-input
      placeholder="Name"
    />
    <my-input
      placeholder="Username"
    />
    <my-input
      placeholder="Email"
    />
    <my-input
      placeholder="Phone"
    />
    <my-button>Create new user</my-button>
  </form>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.create-user{
  width: 50px;
  padding: 20px;
}
</style>