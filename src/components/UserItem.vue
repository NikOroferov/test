<template>
  <div class="user">
    <ul
      class="user__info-list"
    >
      <li class="user__info">
        <strong>{{ user.name }}</strong>
      </li>
      <li class="user__info">
        <strong>Phone:</strong>
        {{ user.phone }}
      </li>
      <li class="user__info">
        <strong>Email: </strong>
        {{ user.email }}
      </li>
    </ul>

    <div>
      <my-button
        @click="$router.push(`/users/${user.id}`)"
      >Full information</my-button>
    </div>
  </div>
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
  align-items: center;
  justify-content: space-between;
  border: 2px solid burlywood;

  padding: 10px 15px;
  margin-bottom: 15px;
}


.user__info-list{
  display: flex;
  flex-direction: column;
  list-style-type: none;
}

.user__info:not(:last-child){
  margin-bottom: 10px;
}
</style>