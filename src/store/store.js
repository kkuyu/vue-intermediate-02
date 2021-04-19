import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    console.log("created");
    let arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf("todo_") === -1) continue;
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return arr.sort((a, b) => {
      return a.timestamp - b.timestamp;
    });
  }
};

export const store = new Vuex.Store({
  state: {
    headerText: "TODO it!",
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      const date = new Date();
      const dateStr = `Date:
          ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}
          ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      const obj = {
        time: dateStr,
        timestamp: date.getTime(),
        completed: false,
        item: todoItem
      };
      localStorage.setItem("todo_" + obj.timestamp, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, { todoItem, index }) {
      localStorage.removeItem("todo_" + todoItem.timestamp);
      state.todoItems.splice(index, 1);
    },
    toggleOneItem(state, { todoItem, index }) {
      state.todoItems[index].completed = !state.todoItems[index].completed;
      localStorage.removeItem("todo_" + todoItem.timestamp);
      localStorage.setItem(
        "todo_" + todoItem.timestamp,
        JSON.stringify(todoItem)
      );
    },
    clearAllItem(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});
