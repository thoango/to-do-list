import moreIcon from "../../images/icon-more.png";
import "./style.scss";
function TodoItem({ text, itemId, onCheckClick }) {
  function showOption(event) {
    event.target.className = toggleClassName(event.target.className, "opened");
  }
  function toggleClassName(className, toggleClass) {
    if (className.includes(toggleClass)) {
      className = className.replace(toggleClass, "");
    } else {
      className += ` ${toggleClass}`;
    }
    return className;
  }
  return (
    <li className="todoItem">
      <div className="todoItem_leftWrap">
        <span
          className="todoItem_checkbox"
          onClick={() => onCheckClick(itemId)}
        ></span>
        <span className="todoItem_text">{text}</span>
      </div>
      <div className="todoItem_option" onClick={showOption}>
        <img src={moreIcon} alt="more icon"></img>
        <div className="todoItem_optionBox"></div>
      </div>
    </li>
  );
}
export default TodoItem;
