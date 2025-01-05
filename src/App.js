import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <h1>To-Do List</h1>
      <div id="todo-container">
        <input
          type="text"
          id="todo-input"
          placeholder="할 일을 입력하세요"
        ></input>
        <button id="add-btn">할 일 추가</button>
        <ul id="todo-list"></ul>
      </div>
    </>
  );
}

function List() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);
  return todos.map((todo) => <li key={todo.id}>{todo.title}</li>);
}

export default App;
