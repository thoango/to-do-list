import "./style.scss";
function TodoList() {
  return (
    <ul className="todoList">
      <li className="todoList_item">
        <span className="todoList_checkbox"></span>
        <span className="todoList_text">Code project</span>
      </li>
      <li className="todoList_item">
        <span className="todoList_checkbox"></span>
        <span className="todoList_text">Wash dishes</span>
      </li>
    </ul>
  );
}
export default TodoList;
