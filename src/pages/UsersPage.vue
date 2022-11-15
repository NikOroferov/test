<template>
  <div>
    <user-list :users="users" />
  </div>
</template>

<script>
import axios from 'axios';
import UserList from '@/components/UserList.vue';

export default {
  components: { UserList },
  data() {
    return {
      users: [],
      limit: 5,
    }
  },
  methods: {
    async fetchUsers() {
      try {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users', {
          params: {
            _limit: this.limit,
          }
        });
        console.log(responce.data);

        this.users = responce.data;

        console.log(this.users);
      } catch (error) {

      }
    }
  },
  mounted() {
    this.fetchUsers()
  }
}
</script>

<style scoped>

</style>