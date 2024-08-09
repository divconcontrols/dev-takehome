<script setup>
import { onMounted } from 'vue'
import { useAppStore } from '../store/app.store'

const props = defineProps(['msg'])
const store = useAppStore()

onMounted(() => {
  store.fetchTodos()
})
</script>

<template>
  <section id="todos">
    <h1>Todos</h1>
    <q-list bordered separator>
      <q-item v-for="todo in store.unDoneTodos" tag="label" clickable v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="todo.completed"/>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body-1 text-left">{{  todo.todo }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-for="todo in store.doneTodos" tag="label" clickable v-ripple>
        <q-item-section avatar>
          <q-checkbox v-model="todo.completed"/>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-body-1 text-left">{{  todo.todo }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </section>
</template>

<style scoped>
section {
  max-width: 60vw;
  margin: 0 auto;
}

h1 {
  margin: .5em 0;
}
</style>