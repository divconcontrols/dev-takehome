<template>
  <div>
    <h1>Todos</h1>
    <ul>
      <li v-for="todo in doneTodos">{{ todo }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import store from '../store/app.store';
export default {
  data: () => ({}),
  mounted() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(['fetchTodos']),
  },
  computed: {
    ...mapGetters(['doneTodos']),
  },
};
</script>