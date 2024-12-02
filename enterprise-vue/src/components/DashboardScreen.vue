<template>
    <div class="dashboard-container container">
      <h2>Welcome, {{ userName }}!</h2>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import { getUser, logout } from '@/auth';
  
  export default {
    name: 'DashboardScreen',
    data() {
      return {
        userName: ''
      };
    },
    async created() {
      try {
        const user = await getUser();
        this.userName = user.name || user.nickname || user.email; // Fallback to nickname or email if name is not available
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    },
    methods: {
      logout
    }
  };
  </script>
  
<style scoped>
 .dashboard-container {
     text-align: center;
 }
</style>
  
