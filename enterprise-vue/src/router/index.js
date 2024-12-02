import { createRouter, createWebHistory } from 'vue-router';
import LoginScreen from '@/components/LoginScreen.vue';
import DashboardScreen from '@/components/DashboardScreen.vue';
import { handleRedirectCallback } from '@/auth';

const routes = [
  {
    path: '/',
    name: 'LoginScreen',
    component: LoginScreen
  },
  {
    path: '/dashboard',
    name: 'DashboardScreen',
    component: DashboardScreen
  },
  {
    path: '/callback',
    name: 'Callback',
    component: {
      template: '<div>Loading...</div>',
      async beforeMount() {
        console.log('Before mount in callback route');
        try {
          const { appState } = await handleRedirectCallback();
          console.log('App state after callback:', appState);
          this.$router.replace(appState?.targetUrl || '/dashboard');
        } catch (error) {
          console.error('Callback Error:', error);
          this.$router.replace('/');
        }
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
