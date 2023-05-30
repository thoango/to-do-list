import TheHeader from "./components/TheHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./scss/default.scss";
import "./App.scss";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="App_container">
        <TheHeader></TheHeader>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
