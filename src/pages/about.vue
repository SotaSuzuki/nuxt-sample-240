<template>
  <section class="container">
    <div>
      <logo />
    </div>

    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button type="button" @click="remove({ todo })">remove</button>
      </li>
      <li>
        <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
      </li>
    </ul>

    <div>
      <button @click="increment">increment</button>
      <button @click="decrement">decrement</button>
      <p>{{ count }}</p>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    Logo
  },

  computed: {
    todos() {
      return this.$store.state.todo.list
    },
    count() {
      return this.$store.state.cookies.count
    }
  },

  methods: {
    addTodo(e) {
      this.$store.commit('todo/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todo/toggle',
      remove: 'todo/remove',
      increment: 'cookies/increment',
      decrement: 'cookies/decrement'
    })
  }
}
</script>

<style lang="css" scoped></style>
