<template>
  <div>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done..."
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <ul class="todo__list">
      <li class="todo__item" v-for="todo in todos" :key="todo.id">
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
      </li>
    </ul>
  </div>
</template>

<script>
//?HÀM TRIM DÙNG ĐỂ CẮT KHOẢNG TRẮNG Ở ĐẦU VÀ Ở CUỐI
import { v4 as uuidv4 } from "uuid";
export default {
  name: "todoList",
  data() {
    return {
      newTodo: "",
      beforeEditCache: "",
      todos: [
        { id: 1, title: "VueJS 1", completed: false, editing: false },
        { id: 2, title: "VueJS 2", completed: false, editing: false },
        { id: 3, title: "VueJS 3", completed: false, editing: false },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) return;
      this.todos = [
        { id: uuidv4(), title: this.newTodo, completed: false, editing: false },
        ...this.todos,
      ];
      this.newTodo = "";
    },

    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    editTodo(todo) {
      this.beforeEditCache = todo.title;
      todo.editing = true;
    },

    doneEdit(todo) {
      if (todo.title.trim().length === 0) {
        todo.title = this.beforeEditCache;
      }
      todo.editing = false;
    },

    cancelEdit(todo) {
      todo.title = this.beforeEditCache;
      todo.editing = false;
    },
  },
};
</script>

<style lang="scss">
.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 15px;
  margin-bottom: 16px;
  font-family: "Poppins", sans-serif;
  border: none;
  &:focus {
    border-bottom: 1px solid #eee;
    outline: none;
  }
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  width: 100%;
  cursor: pointer;
  user-select: none;
}

.todo__item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}
.todo-item-left {
  display: flex;
  align-items: center;
  width: 100%;
}

.todo-item-label {
  padding: 10px;
  border: 1px solid #fff;
  margin-left: 12px;
}
.todo-item-edit {
  font-size: 24px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: "Poppins", sans-serif;
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
}
.completed {
  text-decoration: line-through;
  color: gray;
}
.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}
button {
  font-size: 14px;
  background-color: white;
  appearance: none;
  &:hover {
    background: lightgreen;
  }
  &:focus {
    outline: none;
  }
}
.active {
  background: lightgreen;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
