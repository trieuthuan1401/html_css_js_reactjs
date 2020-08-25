<template>
  <div id="app">
    <Navbar />
    <div class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import "bulma/css/bulma.css";
import Navbar from "./components/layout/Navbar";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.colums.is-multiline {
  display: flex;
  flex-wrap: wrap;
}
</style>
