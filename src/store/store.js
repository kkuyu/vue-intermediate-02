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
  }
});
