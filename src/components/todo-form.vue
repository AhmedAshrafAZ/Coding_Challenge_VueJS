<template lang="html">
  <div>
    <v-text-field
      class="addTodo col-md-2"
      v-model="todo.text"
      label="Todo"
      placeholder="Add your todo..."
      solo
      @keyup.enter="addTodo()"
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

<style scoped>
.addTodo {
  width: 75%;
  position: absolute;
  font-size: 25px;
  top: 7.5%;
  left: 5%;
}
.addButton {
  position: absolute;
  width: 12.5%;
  height: 5%;
  top: 7.5%;
  right: 4.5%;
  text-transform: none;
}
</style>