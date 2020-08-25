<template>
  <div id="app">
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
