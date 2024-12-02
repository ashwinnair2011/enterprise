<template>
  <div class="login-container card">
    <h2>Login</h2>
    <button @click="login">Login with Auth0</button>
  </div>
</template>

<script>
import { login } from '@/auth';

export default {
  name: 'LoginScreen',
  methods: {
    login
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  text-align: center;
}
</style>
