import TodoItem from "../TodoItem";
import "./style.scss";
function TodoList({ todoList, onCheckClick, onItemDelete }) {
  const todoItemList = [];
  todoList.forEach((todoItem) => {
    todoItemList.push(
      <TodoItem
        text={todoItem.text}
        key={todoItem.id}
        itemId={todoItem.id}
        onCheckClick={onCheckClick}
        onItemDelete={onItemDelete}
      ></TodoItem>
    );
  });
  return <ul className="todoList">{todoItemList}</ul>;
}
export default TodoList;
