import { useState } from "react";
import "./style.scss";
function TodoItem({ text }) {
  const [done, setDone] = useState(false);
  function handleClick() {
    setDone(!done);
  }
  return (
    <li className={done ? "todoItem done" : "todoItem"} onClick={handleClick}>
      <span className="todoItem_checkbox"></span>
      <span className="todoItem_text">{text}</span>
    </li>
  );
}
export default TodoItem;
