<template>
  <div
    class="users__list"
    v-if="users.length > 0"
  >
    <h1>Users list</h1>
    <user-item
      v-for="user in users"
      :user="user"
      :key="user.id"
    />
  </div>
  <strong
    v-else
    class="error"
  >Users are not found</strong>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {UserItem},
  props: {
      users: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>