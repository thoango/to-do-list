import { useState } from "react";
import "./style.scss";
function TodoInput() {
  const [value, setValue] = useState("");
  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      console.log(value);
    }
  }
  return (
    <div className="todoInput_wrap">
      <input
        type="text"
        placeholder="Enter task, press Enter to save."
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}
export default TodoInput;
