<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in this.todoItems"
        v-bind:key="todoItem.timestamp"
        class="shadow"
      >
        <i
          class="fas fa-check checkBtn"
          v-bind:class="{ checkBtnCompleted: todoItem.completed }"
          v-on:click="toggleComplete(todoItem, index)"
        />
        <span class="item" v-bind:class="{ textCompleted: todoItem.completed }">
          <strong class="itemText">{{ todoItem.item }}</strong>
          <em class="itemTime">
            {{ todoItem.time }}
          </em>
        </span>
        <span class="removeBtn" v-on:click="() => removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt " />
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  methods: {
    removeTodo(todoItem, index) {
      console.log("removeTodo", todoItem, index);
      this.$store.commit("removeOneItem", { todoItem, index });
    },
    toggleComplete(todoItem, index) {
      this.$store.commit("toggleOneItem", { todoItem, index });
    }
  },
  computed: {
    todoItems() {
      return this.$store.getters.storedTodoItems;
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: #fff;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
  line-height: 45px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.item {
  padding: 10px 0;
}
.itemText {
  display: block;
  line-height: 1.5;
}
.itemTime {
  font-size: 0.8rem;
  font-style: normal;
  opacity: 0.5;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
