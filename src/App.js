import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h1>To-Do List</h1>

      <div id="todo-container">
        <AddTodo setTodos={setTodos} />
        <ul id="todo-list">
          <List todos={todos} setTodos={setTodos} />
        </ul>
      </div>
    </>
  );
}

//처음에 데이터 다 가져옴
//추가하면 완료된데이터 받아서 여기 배열에 업뎃함
//다시 조회하지 않음

export default App;
