<template lang="html">
  <div>
    <v-text-field
      class="col-md-2"
      v-model="todo.text"
      label="Todo"
      placeholder="What do you have to do?"
      solo
    />

    <v-btn
      class="addButton lighten-1"
      tile
      outlined
      color="primary"
      :disabled="this.todo.text.length == 0"
      @click="addTodo()"
    >
      <v-icon>mdi-plus</v-icon>Add
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      todo: {
        id: "",
        text: ""
      }
    };
  },
  methods: {
    addTodo() {
      this.$store.commit("addTodo", this.todo);
      this.todo = {
        id: "",
        text: ""
      };
    }
  },
  computed: {
    ...mapGetters(["todosInProgress"])
  }
};
</script>
