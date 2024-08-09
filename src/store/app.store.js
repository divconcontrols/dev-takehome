import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => {
      return {
        todos: []
      }
    },
    getters: {
      doneTodos: (state) => [...state.todos].filter(todo => todo.completed).sort((a, b) => {
        const todoA = a.todo.toUpperCase()
        const todoB = b.todo.toUpperCase()
        return (todoA < todoB) ? -1 : (todoA > todoB) ? 1 : 0
      }),
      unDoneTodos: (state) => [...state.todos].filter(todo => !todo.completed).sort((a, b) => {
        const todoA = a.todo.toUpperCase()
        const todoB = b.todo.toUpperCase()
        return (todoA < todoB) ? -1 : (todoA > todoB) ? 1 : 0
      }),
    },
    actions: {
      fetchTodos() {
        fetch('https://dummyjson.com/todos?limit=10')
          .then(res => res.json())
          .then(res => this.todos = res.todos)
      }
    }
  }
);
