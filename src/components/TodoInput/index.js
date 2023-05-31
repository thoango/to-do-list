import "./style.scss";
function TodoInput({ value, onInputEnter, onInputChange }) {
  return (
    <div className="todoInput_wrap">
      <input
        type="text"
        placeholder="Enter task, press Enter to save."
        value={value}
        onChange={onInputChange}
        onKeyPress={onInputEnter}
      />
    </div>
  );
}
export default TodoInput;
