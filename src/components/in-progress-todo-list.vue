<template lang="html">
  <div
    class="inProgressContainer">
    <v-card
      class="inProgressWrapper">
      <v-card-title
        class="inProgressHead">
        <div dark>
          <v-toolbar-title>In Progress Tasks</v-toolbar-title>
        </div>
      </v-card-title>

      <v-card-text
        style="margin-top: 10%">
        <div
          v-for="todo in todosInProgress"
          :key="todo.id">
          <TodoItem
            :todo="todo"
            :source-is-finished-list="false"
            class="mb-3" />
        </div>
      </v-card-text>
    </v-card>
    
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

<style scoped>
.inProgressContainer {
  width: 40%;
  position: absolute;
  top: 20%;
  left: 5%;
}
.inProgressWrapper {
  background-color: #0f4c75;
  color: whitesmoke;
  overflow: scroll;
  max-height: 550px;
}
.inProgressHead {
  background-color: #40bfc1;
  position: fixed;
  width: 40%;
  z-index: 99;
  padding-left: 13.5%;
}
</style>
