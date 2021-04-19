<template>
  <div id="app">
    <TodoHeader />
    <TodoInput />
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeTodoItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    />
    <TodoFooter v-on:clearAll="clearAllItem" />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data() {
    return { todoItems: [] };
  },
  methods: {
    removeOneItem(todoItem, index) {
      localStorage.removeItem("todo_" + todoItem.timestamp);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem("todo_" + todoItem.timestamp);
      localStorage.setItem(
        "todo_" + todoItem.timestamp,
        JSON.stringify(todoItem)
      );
    },
    clearAllItem() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
