<template>
  <section>

    <div class="users">
      <h1 class="users-title">Users list</h1>

      <my-button
        class="create-user__button"
        @click="toggleModal"
      >Create new user</my-button>

      <user-list
        :users="users"
      />
    </div>

    <my-dialog v-model:show="modalVisible">
      <new-user-form
      @addUser="addUser"
      />
    </my-dialog>

    <div>
      <my-button
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page-number"
        :class="{
          'current-page': pageNumber === page
        }"
        @click="changePage(pageNumber)"
      >{{pageNumber}}</my-button>
    </div>

  </section>
</template>

<script>
import axios from 'axios';
import UserList from '@/components/UserList.vue';
import NewUserForm from '@/components/NewUserForm.vue';

export default {
  components: { UserList, NewUserForm },
  data() {
    return {
      users: [],
      page: 1,
      limit: 5,
      totalPages: 0,
      modalVisible: false,
    }
  },
  methods: {
    async fetchUsers() {
      try {
        const responce = await axios.get('https://jsonplaceholder.typicode.com/users', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });

        this.users = responce.data;
        this.totalPages = Math.ceil(responce.headers['x-total-count'] / this.limit)
      } catch (error) {
        this.$toast.error(`Oooops! Something went wrong :C`);
      }
    },
    changePage(pageNumber) {
      this.page = pageNumber;
      this.fetchUsers();
    },
    toggleModal() {
      this.modalVisible = !this.modalVisible;
    },
    addUser(newUser) {
      this.users.unshift(newUser)
      this.toggleModal();
    }
  },
  mounted() {
    this.fetchUsers()
  }
}
</script>

<style scoped>
.page-number{
  margin-right: 5px;
}
.current-page{
  border: 2px solid rgb(230, 160, 69);
  background-color: ghostwhite;
}

.users-title, .create-user__button{
  margin-bottom: 20px;
}
</style>