<template>
  <div class="todo__item">
    <div class="todo-item-left">
      <input type="checkbox" v-model="todo.completed" />
      <div
        v-if="!todo.editing"
        class="todo-item-label"
        @click="editTodo(todo)"
        :class="{ completed: todo.completed }"
      >{{ todo.title }}</div>
      <input
        class="todo-item-edit"
        v-model="todo.title"
        @keyup.enter="doneEdit(todo)"
        @keyup.esc="cancelEdit(todo)"
        @blur="doneEdit(todo)"
        type="text"
        v-else
      />
    </div>
    <div class="remove-item" @click="removeTodo(todo.id)">&times;</div>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>