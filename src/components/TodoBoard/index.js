import { useState } from "react";
import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
function TodoBoard() {
  const [newInput, setNewInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  function handleInputEnterKey(event) {
    if (event.key === "Enter") {
      const value = event.target.value;
      setNewInput(value);
      if (value) {
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
  return (
    <div className="todoBoard">
      <TodoInput
        value={newInput}
        onInputEnter={handleInputEnterKey}
        onInputChange={handleChange}
      ></TodoInput>
      <TodoList todoList={todoList}></TodoList>
    </div>
  );
}
export default TodoBoard;
