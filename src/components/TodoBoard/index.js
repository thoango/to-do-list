import { useState } from "react";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
function TodoBoard() {
  const [newInput, setNewInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  function handleKeyPress(event) {
    const {
      key,
      target: { value },
    } = event;
    if (key === "Enter") {
      setNewInput(value);
      if (value.trim()) {
        addTodoItem(value);
        setNewInput("");
      }
    }
  }
  function handleChange(event) {
    setNewInput(event.target.value);
  }
  function addTodoItem(value) {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { id: Date.now(), text: value },
    ]);
  }
  function handleCheckClick(id) {
    if (id) {
      setCompletedList((prevCompletedList) => [
        ...prevCompletedList,
        todoList.find((item) => item.id === id),
      ]);
      setTodoList((prevTodoList) =>
        prevTodoList.filter((todoItem) => todoItem.id !== id)
      );
    }
  }
  function handleDeleteItem(id) {
    if (id) {
      setTodoList((prevTodoList) =>
        prevTodoList.filter((todoItem) => todoItem.id !== id)
      );
    }
  }
  function removeItem() {}
  return (
    <div className="todoBoard">
      <TodoInput
        value={newInput}
        onInputEnter={handleKeyPress}
        onInputChange={handleChange}
      ></TodoInput>
      <TodoList
        todoList={todoList}
        onCheckClick={handleCheckClick}
        onItemDelete={handleDeleteItem}
      ></TodoList>
    </div>
  );
}
export default TodoBoard;
