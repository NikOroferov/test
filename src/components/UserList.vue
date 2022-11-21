<template>
  <div>
    <div
      class="users__list"
      v-if="users.length > 0">
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
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {UserItem},
  props: {
    users: {
      type: Array,
      required: true,
    },
  }
}
</script>

<style scoped>
.error{
  color: brown;
}
</style>