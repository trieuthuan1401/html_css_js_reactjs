<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png" class="logo" />
    <todo-list />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: "Poppins", sans-serif;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;
}
.container {
  max-width: 600px;
  margin: 0 auto;
}
.logo {
  display: block;
  margin: 20px auto;
  height: 75px;
}
</style>
