import TodoItem from "../TodoItem";
import "./style.scss";
function TodoList() {
  return (
    <ul className="todoList">
      <TodoItem text="Code project"></TodoItem>
      <TodoItem text="Wash dishes"></TodoItem>
    </ul>
  );
}
export default TodoList;
