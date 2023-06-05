import { useState } from "react";
import trashIcon from "../../images/icon-trash.png";
import "./style.scss";
function TodoItem({ text }) {
  const [done, setDone] = useState(false);
  function handleClick() {
    setDone(!done);
  }
  return (
    <li className={done ? "todoItem done" : "todoItem"} onClick={handleClick}>
      <div className="todoItem_left">
        <span className="todoItem_checkbox"></span>
        <span className="todoItem_text">{text}</span>
      </div>
      <div className="todoItem_right">
        <span className="todoItem_trashIcon">
          <img src={trashIcon} alt="trash icon"></img>
        </span>
      </div>
    </li>
  );
}
export default TodoItem;
