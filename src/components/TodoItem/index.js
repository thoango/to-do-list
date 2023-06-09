import moreIcon from "../../images/icon-more.png";
import "./style.scss";
function TodoItem({ text, itemId, onCheckClick }) {
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
