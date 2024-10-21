/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";

const routes = [
  { name: "Home", path: "/", component: () => import("@/pages/Home.vue") },
  { path: "/404", component: () => import("@/pages/404.vue") },
  { name: "RGPD", path: "/RGPD", component: () => import("@/pages/RGPD.vue") },
  { name: "Contact", path: "/contact", component: () => import("@/pages/Contact.vue") },
  { name: "RDV", path: "/rdv", component: () => import("@/pages/RDV.vue") },
  { path: "/:catchAll(.*)", redirect: "/404" },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
