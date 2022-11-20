import axios from "axios";
import { ref, onMounted } from "vue";

export default function useUsers(page, limit) {
  const users = ref([]);
  const totalPages = ref(0);

  const fetchUsers = async () => {
    try {
      const responce = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
        {
          params: {
            _page: page,
            _limit: limit,
          },
        }
      );

      totalPages = Math.ceil(responce.headers["x-total-count"] / limit);

      users.value = responce.data;
    } catch (error) {
      // this.$toast.error(`Oooops! Error ${error.message}`);
    }
  };

  onMounted(fetchUsers);

  return {
    users,
    totalPages,
  };
}
