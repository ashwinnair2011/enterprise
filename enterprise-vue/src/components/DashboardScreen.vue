<template>
    <div class="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome, {{ username }}!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardScreen',
    props: ['username']
  };
  </script>
  
  <style scoped>
  .dashboard-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  </style>
  