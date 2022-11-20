<template>
  <section>
    <ul class="user">
      <li class="user__data">
        Name: {{ user.name }}
      </li>
      <li class="user__data">
        Username: {{ user.username }}
      </li>
      <li class="user__data">
        Email: {{ user.email }}
      </li>
      <li class="user__data">
        Street: {{ userAdress.street }}
      </li>
      <li class="user__data">
        Suite: {{ userAdress.suite }}
      </li>
      <li class="user__data">
        Zipcode: {{ userAdress.zipcode }}
      </li>
    </ul>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
        user: {},
        userAdress: {},
      }
    },
  methods: {
      async fetchUserById(id) {
      try {
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        this.user = responce.data;
        this.userAdress = responce.data.address;
      } catch (error) {
        this.$toast.error(`Oooops! User with id ${id} is not found on server`);
      }

    }
  },
  mounted() {
    this.fetchUserById(this.$route.params.id)
  }
  }
</script>

<style scoped>


.user__data{
  margin-bottom: 10px;
}

.user__adress{
  display: flex;
}
</style>