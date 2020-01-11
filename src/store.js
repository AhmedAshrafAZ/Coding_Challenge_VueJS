import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastTodoID: -1,
    todosInProgress: [],
    todosFinished: [],
    getTodoIndex(taskDone, id) {
      for (
        var i = 0;
        i <
        (taskDone ? this.todosFinished.length : this.todosInProgress.length);
        i++
      )
        if (
          (taskDone ? this.todosFinished[i] : this.todosInProgress[i]).id == id
        )
          return i;
      return -1;
    }
  },
  getters: {
    lastTodoID: state => {
      return state.lastTodoID;
    },
    todosInProgress: state => {
      return state.todosInProgress;
    },
    todosFinished: state => {
      return state.todosFinished;
    }
  },
  mutations: {
    addTodo: (state, todo) => {
      todo.id = ++state.lastTodoID;
      state.todosInProgress.push(todo);
    },

    completeTodo: (state, id) => {
      var index = state.getTodoIndex(false, id);
      state.todosFinished.push(state.todosInProgress[index]);
      state.todosInProgress.splice(index, 1);
    },
    editTodo: (state, { id, newTodo }) => {
      var index = state.getTodoIndex(false, id);
      state.todosInProgress[index].text = newTodo;
    },
    removeTodo: (state, id) => {
      var index = state.getTodoIndex(true, id);
      state.todosFinished.splice(index, 1);
    }
  },
  actions: {}
});
