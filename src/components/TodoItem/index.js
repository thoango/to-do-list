import { useState } from "react";
import OptionBoard from "../OptionBoard";
import "./style.scss";
function TodoItem({ text, itemId, onCheckClick, onItemDelete, onInputBlur }) {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState(text);
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
      <OptionBoard itemId={itemId} onItemDelete={onItemDelete}></OptionBoard>
    </li>
  );
}
export default TodoItem;
