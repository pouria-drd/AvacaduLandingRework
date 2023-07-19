import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },

    {
      path: "/register-order",
      name: "register-order",
      component: () => import("../views/RegisterOrderView.vue"),
    },

    {
      path: "/register-avacadu",
      name: "register-avacadu",
      component: () => import("../views/RegisterAvacaduView.vue"),
    },
  ],
});

export default router;
