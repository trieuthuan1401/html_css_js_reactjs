<template>
  <div id="app">
    <Calculator />
  </div>
</template>

<script>
import Calculator from "./components/Calculator";
export default {
  name: "App",
  components: {
    Calculator,
  },
};
</script>

<style>
#app {
  font-family: segoe ui light;
  font-weight: bold;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
