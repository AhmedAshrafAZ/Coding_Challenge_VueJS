<template lang="html">
  <div>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Edit your task</v-card-title>

        <v-card-text>
          <v-text-field
            class="col-md-2"
            v-model="editedTodo"
            label="Todo"
            :placeholder="todo.text"
            solo
          />
        </v-card-text>

        <v-card-actions>
          <v-btn color="red darken-4" dark text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" dark text @click="editTodo()">
            Edit
          </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 :id="this.todo.id" class="headline mb-0">
            {{ this.todo.text }}
          </h3>
        </div>
      </v-card-title>
      <v-card-actions :show="!sourceIsFinishedList">
        <v-btn class="darken-1" @click.stop="dialog = true" color="primary">
          <v-icon left>mdi-pencil</v-icon>Edit
        </v-btn>
        <v-btn class="lighten-1" color="success" @click="completeTodo()">
          <v-icon left>mdi-check-circle</v-icon>Done
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedTodo: "",
      dialog: false
    };
  },
  props: {
    todo: {
      type: Object,
      default: () => {
        return { id: "", text: "" };
      }
    }
  },
  methods: {
    completeTodo() {
      this.$store.commit("completeTodo", this.todo.id);
    },
    editTodo() {
      this.$store.commit("editTodo", {
        id: this.todo.id,
        newTodo: this.editedTodo
      });
      this.dialog = false;
    }
  }
};
</script>
