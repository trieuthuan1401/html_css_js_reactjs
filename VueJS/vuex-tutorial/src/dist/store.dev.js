"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    todos: [{
      id: (0, _uuid.v4)(),
      title: 'Vuejs1',
      completed: false
    }, {
      id: (0, _uuid.v4)(),
      title: 'Vuejs2',
      completed: false
    }, {
      id: (0, _uuid.v4)(),
      title: 'Vuejs3',
      completed: false
    }]
  },
  getters: {
    completedTodos: function completedTodos(state) {
      return state.todos.filter(function (todo) {
        return todo.completed === true;
      }).length;
    },
    pendingTodos: function pendingTodos(state) {
      return state.todos.filter(function (todo) {
        return todo.completed === false;
      }).length;
    }
  },
  //? Chỉ có mutation mới có thể thay đổi được các state
  mutations: {
    NEW_TODO: function NEW_TODO(state, todoItem) {
      state.todos.push({
        id: (0, _uuid.v4)(),
        title: todoItem,
        completed: false
      });
    },
    DELETE_TODO: function DELETE_TODO(state, todoItem) {
      state.todos = _toConsumableArray(state.todos).filter(function (todo) {
        return todo.id !== todoItem.id;
      });
    },
    TOGGLE_TODO_STATUS: function TOGGLE_TODO_STATUS(state, todoItem) {
      todoItem.completed = !todoItem.completed;
    }
  },
  //? Bên actions sẽ gửi Commit lên và Muatations sẽ thực hiện chỉ thị đó
  actions: {
    addNewTodo: function addNewTodo(_ref, todoItem) {
      var commit = _ref.commit;
      commit('NEW_TODO', todoItem);
    },
    deleteTodo: function deleteTodo(_ref2, todoItem) {
      var commit = _ref2.commit;
      commit('DELETE_TODO', todoItem);
    },
    toggleTodoStatus: function toggleTodoStatus(_ref3, todoItem) {
      var commit = _ref3.commit;
      commit('TOGGLE_TODO_STATUS', todoItem);
    }
  }
});

exports["default"] = _default;