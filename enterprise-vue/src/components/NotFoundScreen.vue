<template>
    <div class="not-found-container">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <router-link to="/">Go Back to Home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundScreen'
  };
  </script>
  
  <style scoped>
  .not-found-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }
  </style>
  