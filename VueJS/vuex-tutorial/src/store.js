import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        todos: [
            { id: uuidv4(), title: 'Vuejs1', completed: false },
            { id: uuidv4(), title: 'Vuejs2', completed: false },
            { id: uuidv4(), title: 'Vuejs3', completed: false }
        ]
    },
    getters: {
        completedTodos(state) {
            return state.todos.filter(todo => {
                return todo.completed === true
            }).length
        },
        pendingTodos(state) {
            return state.todos.filter(todo => {
                return todo.completed === false
            }).length
        }
    },
    //? Chỉ có mutation mới có thể thay đổi được các state
    mutations: {
        NEW_TODO(state, todoItem) {
            state.todos.push({
                id: uuidv4(),
                title: todoItem,
                completed: false
            })
        },
        DELETE_TODO(state, todoItem) {
            state.todos = [...state.todos].filter(todo => todo.id !== todoItem.id)
        },
        TOGGLE_TODO_STATUS(state, todoItem) {
            todoItem.completed = !todoItem.completed
        }

    },

    //? Bên actions sẽ gửi Commit lên và Muatations sẽ thực hiện chỉ thị đó
    actions: {
        addNewTodo({ commit }, todoItem) {
            commit('NEW_TODO', todoItem)
        },
        deleteTodo({ commit }, todoItem) {
            commit('DELETE_TODO', todoItem)
        },
        toggleTodoStatus({ commit }, todoItem) {
            commit('TOGGLE_TODO_STATUS', todoItem)
        }
    }
})