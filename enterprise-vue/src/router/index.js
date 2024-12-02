import { createRouter, createWebHistory } from 'vue-router';
import LoginScreen from '@/components/LoginScreen.vue';
// We'll add the Dashboard component later

const routes = [
  {
    path: '/',
    name: 'LoginScreen',
    component: LoginScreen
  },
  // We'll add the Dashboard route later
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
