import { useState } from "react";
import TheHeader from "../TheHeader";
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
      setTodoList(removeItem(todoList, id));
    }
  }
  function handleDeleteItem(id) {
    if (id) {
      setTodoList(removeItem(todoList, id));
    }
  }
  function removeItem(prevList, id) {
    return prevList.filter((item) => item.id !== id);
  }
  function handleInputBlur(event, id) {
    const editedItem = {
      id,
      text: event.target.value,
    };
    setTodoList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return editedItem;
        }
        return item;
      })
    );
  }
  return (
    <div className="todoBoard">
      <TheHeader></TheHeader>
      <TodoInput
        value={newInput}
        onInputEnter={handleKeyPress}
        onInputChange={handleChange}
      ></TodoInput>
      <TodoList
        todoList={todoList}
        onCheckClick={handleCheckClick}
        onItemDelete={handleDeleteItem}
        onInputBlur={handleInputBlur}
      ></TodoList>
    </div>
  );
}
export default TodoBoard;
