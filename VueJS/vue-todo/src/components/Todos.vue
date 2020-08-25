<template>
  <div class="columns is-multiline">
    <div class="column is-6 is-offset-3">
      <div class="box">
        <form @submit.prevent="onSubmit">
          <div class="feild">
            <label class="label">Add Your Todo</label>
            <div class="control">
              <input
                type="text"
                placeholder="Enter Your Todo..."
                class="input"
                v-model="title"
              />
              <!-- <button type="submit" class="button mt-2 is-success">Add todo</button> -->
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="column is-6 is-offset-3" v-for="todo in todos" :key="todo.id">
      <div class="box todo_box" @click="onComplete(todo.id)">
        <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
        <button
          class="button is-danger is-small is-pulled-right"
          v-if="todo.completed"
          @click="onDelete(todo.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import shortid from "shortid";
export default {
  name: "todos",
  props: ["todos"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      const newTodo = {
        title: this.title,
        completed: false,
        id: shortid.generate(),
      };
      this.title = "";
      this.$emit("addTodo", newTodo);
    },

    onComplete(id) {
      this.$emit("onComplete", id);
    },

    onDelete(id) {
      this.$emit("onDelete", id);
    },
  },
};
</script>
<style scoped>
span.completed {
  text-decoration: line-through;
}
.todo_box {
  transition: all 0.2s;
}
.todo_box:hover {
  transform: scale(1.2);
  cursor: pointer;
}
.button {
  background-image: linear-gradient(to right top, #ff4988, #ffc781, #fffefc);
  border: none;
  color: #111;
  font-weight: bold;
}
</style>
