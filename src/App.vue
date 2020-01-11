<template>
  <v-app style="background-color: rgb(40, 47, 75)">
    <v-toolbar 
      app 
      style="background-color: #0f4c75; padding-left: 45%; color: #bbe1fa; font-size: 27px;">
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <v-content>
      <v-layout 
        align-center
        fill-height
        justify-center>
        <v-flex xs6>
          <TodoForm />
          <InProgressTodoList />
          <FinishedTodoList />
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import TodoForm from "@/components/todo-form";
import InProgressTodoList from "@/components/in-progress-todo-list";
import FinishedTodoList from "@/components/finished-todo-list";

export default {
  name: "App",
  components: {
    TodoForm,
    InProgressTodoList,
    FinishedTodoList
  },
  data() {
    return {
      title: "Vue Todos"
    };
  }
};
</script>
