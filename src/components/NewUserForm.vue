<template>
  <form class="user__form" @submit.prevent>
    <my-input
      v-model:value.trim="newUser.name"
      type="text"
      placeholder="Name"
    />
    <my-input
      v-model:value.trim="newUser.email"
      type="email"
      placeholder="Email"
    />
    <my-input
      v-model:value.trim="newUser.phone"
      type="tel"
      placeholder="Phone"
    />
    <my-button
    class="form__button"
      @click="createUser(newUser)"
    >Create new user</my-button>
  </form>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';

  export default {
  data() {
      return {
        newUser: {
          name: '',
          email: '',
          phone: '',
          id: '',
        }
      }
  },
  methods: {
    //  createUser() {
    //   this.newUser.id = Date.now();
    //   // this.$emit('create', this.newUser);
    //   this.newUser = {
    //     name: '',
    //     userName: '',
    //     email: '',
    //     phone: '',
    //     id: '',
    //   }
    // },
    async createUser(newUser) {
      try {
        this.newUser.id = Date.now();

        await axios.post('https://jsonplaceholder.typicode.com/users', newUser)

        this.newUser = {
          name: '',
          email: '',
          phone: '',
          id: '',
        }

      } catch (error) {
        console.log(error);
      }
    },
  }
  }
</script>

<style scoped>
.user__form{
  display: flex;
  flex-direction: column;
}
.form__button {
  align-self: flex-end;
}
</style>