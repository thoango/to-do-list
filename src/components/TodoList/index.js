import TodoItem from "../TodoItem";
import "./style.scss";
function TodoList({ todoList }) {
  const todoItemList = [];
  todoList.forEach((todoItem) => {
    todoItemList.push(
      <TodoItem text={todoItem.text} key={todoItem.id}></TodoItem>
    );
  });
  return <ul className="todoList">{todoItemList}</ul>;
}
export default TodoList;
