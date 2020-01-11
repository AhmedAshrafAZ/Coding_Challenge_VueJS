<template lang="html">
  <div>
    <div v-for="todo in todosInProgress" :key="todo.id">
      <TodoItem :todo="todo" class="mb-3" />
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/todo-item";
import { mapGetters } from "vuex";

export default {
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters(["todosInProgress"])
  }
};
</script>
