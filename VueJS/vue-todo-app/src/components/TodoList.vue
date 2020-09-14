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
      <TodoItem class="todo__item" v-for="todo in todosFiltered" :key="todo.id" :todo="todo">
        <!-- <div class="todo-item-left">
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
        <div class="remove-item" @click="removeTodo(todo.id)">&times;</div>-->
      </TodoItem>

      <div class="extra-container">
        <div>
          <label>
            <input type="checkbox" :checked="anyRemaining" @change="checkAllTodos" />Check All
          </label>
        </div>
        <div>{{remaining}} items left</div>
      </div>

      <div class="extra-container">
        <div>
          <button
            class="extraa extra"
            :class="{ active: filter == 'all' }"
            @click="filter = 'all'"
          >All</button>
          <button
            class="extra"
            :class="{ active: filter == 'active' }"
            @click="filter = 'active'"
          >Active</button>
          <button
            class="extra"
            :class="{ active: filter == 'completed' }"
            @click="filter = 'completed'"
          >Completed</button>
        </div>

        <div>
          <transition name="fade">
            <button
              class="extra"
              v-if="showClearCompletedButton"
              @click="clearCompleted"
            >Clear Completed</button>
          </transition>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
//?HÀM TRIM DÙNG ĐỂ CẮT KHOẢNG TRẮNG Ở ĐẦU VÀ Ở CUỐI
import { v4 as uuidv4 } from "uuid";
export default {
  name: "todoList",
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodo: "",
      beforeEditCache: "",
      filter: "all",
      todos: [
        { id: uuidv4(), title: "VueJS 1", completed: false, editing: false },
        { id: uuidv4(), title: "VueJS 2", completed: false, editing: false },
        { id: uuidv4(), title: "VueJS 3", completed: false, editing: false },
      ],
    };
  },

  computed: {
    remaining() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining === 0;
    },
    todosFiltered() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "active") {
        return this.todos.filter((todo) => !todo.completed);
      } else if (this.filter === "completed") {
        return this.todos.filter((todo) => todo.completed);
      }
      return this.todos;
    },
    showClearCompletedButton() {
      return this.todos.filter((todo) => todo.completed).length > 0;
    },
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
    checkAllTodos() {
      this.todos.forEach((todo) => (todo.completed = event.target.checked));
    },
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
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

button.extra {
  padding: 5px 20px;
  margin-left: 6px;
  border-radius: 9px;
  border: 1px solid #eee;
  text-align: center;
}
button.extraa {
  margin-left: 0;
}
</style>
