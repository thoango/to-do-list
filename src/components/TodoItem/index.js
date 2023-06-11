import { useState } from "react";
import moreIcon from "../../images/icon-more.png";
import "./style.scss";
function TodoItem({ text, itemId, onCheckClick, onItemDelete, onInputBlur }) {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(text);
  function showOption(event) {
    let element = event.currentTarget;
    let toggleClass = "opened";
    toggleClassName(element, toggleClass);
  }
  function toggleClassName(element, className) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }
  function handleItemEdit() {
    setEditing(true);
  }
  function handleContentChange(event) {
    setContent(event.target.value);
  }
  function handleBlur(event, itemId) {
    setEditing(false);
    onInputBlur(event, itemId);
  }

  return (
    <li className="todoItem">
      <div className="todoItem_leftWrap">
        <span
          className="todoItem_checkbox"
          onClick={() => onCheckClick(itemId)}
        ></span>
        {editing ? (
          <input
            value={content}
            onChange={handleContentChange}
            onBlur={(event) => handleBlur(event, itemId)}
            autoFocus
          ></input>
        ) : (
          <span className="todoItem_text" onClick={handleItemEdit}>
            {text}
          </span>
        )}
      </div>
      <div className="todoItem_option" onClick={showOption}>
        <img src={moreIcon} alt="more icon"></img>
        <div className="todoItem_optionBox">
          <ul className="todoItem_optionList">
            <li
              className="todoItem_optionItem"
              onClick={() => onItemDelete(itemId)}
            >
              <span className="">Delete</span>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
}
export default TodoItem;
