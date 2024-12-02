<template>
    <div class="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome, {{ userName }}!</p>
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
      const user = await getUser();
      this.userName = user.name;
    },
    methods: {
        logout
    }
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  </style>
  