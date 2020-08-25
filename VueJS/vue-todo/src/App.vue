<template>
  <div id="app">
    <div class="section">
      <div class="container">
        <Todos
          :todos="todos"
          @addTodo="addTodo"
          @onComplete="onComplete"
          @onDelete="onDelete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "bulma/css/bulma.css";
import Todos from "./components/Todos";
export default {
  name: "App",
  components: {
    Todos,
  },
  data() {
    return {
      todos: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false,
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true,
        },
        {
          userId: 1,
          id: 5,
          title:
            "laboriosam mollitia et enim quasi adipisci quia provident illum",
          completed: false,
        },
        {
          userId: 1,
          id: 6,
          title: "qui ullam ratione quibusdam voluptatem quia omnis",
          completed: false,
        },
      ],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    onComplete(id) {
      this.todos = this.todos.map((todo) =>
        todo.id === id
          ? //assign là thuộc tính ghi đè, nhận vào 2 tham số là giá trị đích và giá trị nguồn
            Object.assign(todo, { completed: !todo.completed })
          : todo
      );
    },

    onDelete(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  background-image: linear-gradient(to right top, #ff4988, #ffc781, #fffefc);
  color: #fff;
}
</style>
