import { createApp } from "vue";
import App from "@/App.vue";
import components from "@/components/UI";
import router from "@/router/router";
import Toaster from "@meforma/vue-toaster";

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

app.use(Toaster).use(router).mount("#app");
