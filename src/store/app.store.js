import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    setState(state) {
      state.todos = [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false },
      ];
    },
  },
  actions: {
    fetchTodos(context) {
      // TODO: replace this with an API call to 'https://dummyjson.com/todos'
      context.commit('setState');
    },
  },
  getters: {
    doneTodos: (state) => [...state.todos].filter((todo) => todo.done) || [],
  },
});

export default store;
