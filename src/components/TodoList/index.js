import TodoItem from "../TodoItem";
import "./style.scss";
function TodoList({ todoList, onCheckClick, onItemDelete, onInputBlur }) {
  const todoItemList = [];
  todoList.forEach((todoItem) => {
    todoItemList.push(
      <TodoItem
        text={todoItem.text}
        key={todoItem.id}
        itemId={todoItem.id}
        onCheckClick={onCheckClick}
        onItemDelete={onItemDelete}
        onInputBlur={onInputBlur}
      ></TodoItem>
    );
  });
  return <ul className="todoList">{todoItemList}</ul>;
}
export default TodoList;
