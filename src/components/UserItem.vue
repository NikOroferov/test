<template>
  <ul class="user">
    <li class="user__data">
      <strong>{{ user.name }}</strong>
    </li>
    <li class="user__data">
      <strong>Phone:</strong>
      {{ user.phone }}
    </li>
    <li class="user__data">
      <strong>Email: </strong>
      {{ user.email }}
    </li>
  </ul>
</template>

<script>
  export default {
  props: {
      user: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>
.user{
  display: flex;
  flex-direction: column;

  border: 2px solid burlywood;

  padding: 10px 15px;
  margin-bottom: 15px;
  list-style-type: none;
}

.user__data:not(:last-child){
  margin-bottom: 10px;
}
</style>