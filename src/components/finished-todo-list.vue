<template lang="html">
  <div class="finishedContainer">
    <v-card class="finishedWrapper">
      <v-card-title 
        class="finishedHead" 
        fixed-header>
        <div
          dark
        >
          <v-toolbar-title>Finished Tasks</v-toolbar-title>
        </div>
      </v-card-title>

      <v-card-text style="margin-top: 10%">
        <div 
          v-for="todo in todosFinished" 
          :key="todo.id">
          <TodoItem 
            :todo="todo" 
            :source-is-finished-list="true" 
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
    ...mapGetters(["todosFinished"])
  }
};
</script>

<style scoped>
.finishedContainer {
  width: 40%;
  position: absolute;
  top: 20%;
  right: 5%;
}
.finishedWrapper {
  background-color: #0f4c75;
  color: whitesmoke;
  overflow: scroll;
  max-height: 550px;
}
.finishedHead {
  background-color: #40bfc1;
  position: fixed;
  width: 40%;
  z-index: 99;
  padding-left: 16%;
}
</style>