const addOneItem = (state, todoItem) => {
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
};

const removeOneItem = (state, { todoItem, index }) => {
  localStorage.removeItem("todo_" + todoItem.timestamp);
  state.todoItems.splice(index, 1);
};

const toggleOneItem = (state, { todoItem, index }) => {
  state.todoItems[index].completed = !state.todoItems[index].completed;
  localStorage.removeItem("todo_" + todoItem.timestamp);
  localStorage.setItem("todo_" + todoItem.timestamp, JSON.stringify(todoItem));
};

const clearAllItem = state => {
  localStorage.clear();
  state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItem };
