<template><div id="app">



<img alt="Vue logo" src="./assets/logo.png" />
<Login />
<Register />
  <Posts />
</div>
</template>

<script>
import Login from './components/LoginForm.vue';
import Register from './components/RegisterForm.vue';
import Posts from './components/PostsForm.vue';

export default {
  name: 'App',
  components: {
    Login,
    Register,
    Posts
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>