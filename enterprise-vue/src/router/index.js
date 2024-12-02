import { createRouter, createWebHistory } from 'vue-router';
import LoginScreen from '@/components/LoginScreen.vue';
import DashboardScreen from '@/components/DashboardScreen.vue';
// We'll add the Dashboard component later

const routes = [
  {
    path: '/',
    name: 'LoginScreen',
    component: LoginScreen
  },
  {
    path: '/dashboard',
    name: 'DashboardScreen',
    component: DashboardScreen,
    props: route => ({ username: route.query.username })// Pass the username as a prop 
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
