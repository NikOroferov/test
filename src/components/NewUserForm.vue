<template>
  <form class="user__form" @submit.prevent>
    <my-input
      v-model:value.trim="newUser.name"
      type="text"
      placeholder="Name"
      required
    />
    <my-input
      v-model:value.trim="newUser.email"
      type="email"
      placeholder="Email"
      required
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
    async createUser(newUser) {
      try {
        this.newUser.id = Date.now();

        if (newUser.name && newUser.email) {

          await axios.post('https://jsonplaceholder.typicode.com/users', newUser).then(responce => {
              this.$toast.success(`User ${responce.data.name} is created!`);
            })

            this.newUser = {
              name: '',
              email: '',
              phone: '',
              id: '',
          }

          this.$emit('addUser', newUser)
        }

      } catch (error) {
        this.$toast.error(`Oooops! We have error ${error.message}`);
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