<template>
  <div>
    <div>TODO LIST</div>
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Todo from "./Todo";
export default {
  components: {
    Todo,
  },
  //?Computed là hàm chạy trước khi load dữ liệu
  computed: {
    ...mapState({
      todos: "todos",
    }),
  },
};
</script>

<style scoped></style>
