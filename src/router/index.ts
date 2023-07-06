import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import InputFormView from "../views/InputFormView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: AboutView,
    },
    {
      path: "/input",
      name: "input",
      component: InputFormView,
    },
  ],
});

export default router;
