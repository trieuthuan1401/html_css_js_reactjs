<template>
  <div>
    <form @submit.prevent="addNewTodo()">
      <input type="text" v-model="newTodo" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    addNewTodo() {
      this.$store.dispatch("addNewTodo", this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>

<style scoped></style>
