<template>
  <div class="login-container">
    <h2>Login</h2>
    <button @click="login">Login with Auth0</button>
  </div>
</template>

<script>
import { login } from '@/auth';

export default {
  name: 'LoginScreen',
  setup() {
    return {
      login
    };
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
