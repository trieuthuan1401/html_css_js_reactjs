<template>
  <div class="flex">
    <h1 :class="{ completed: todo.completed }" @click="toggleTodoStatus(todo)">
      {{ todo.title }}
    </h1>
    <button @click="deleteTodo(todo)" class="delete">Delete</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: Object,
  },
  methods: {
    ...mapActions({
      deleteTodo: "deleteTodo",
      toggleTodoStatus: "toggleTodoStatus",
    }),
  },
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin: 0 auto;
  cursor: pointer;
  user-select: none;
}
button.delete {
  width: 200px;
  height: 50px;
}
.completed {
  text-decoration: line-through;
}
</style>
