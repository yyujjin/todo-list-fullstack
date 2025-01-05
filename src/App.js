import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <h1>To-Do List</h1>

      <div id="todo-container">
        <AddTodo />
        <ul id="todo-list">
          <List />
        </ul>
      </div>
    </>
  );
}

function AddTodo() {
  const [todo, setTodo] = useState("");

  return (
    <>
      <input
        type="text"
        id="todo-input"
        placeholder="할 일을 입력하세요"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <AddButton todo={todo} setTodo={setTodo} />
    </>
  );
}

function AddButton({ todo, setTodo }) {
  const sendTodo = () => {
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: todo }),
    })
      .then((res) => res.json())

      .catch((error) => console.error("에러 발생:", error));
    setTodo("");
  };

  return (
    <button id="add-btn" onClick={sendTodo}>
      할 일 추가
    </button>
  );
}

function List() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);
  if (todos.length === 0) {
    return <p style={{ backgroundColor: "white" }}>"할 일을 추가하세요!</p>;
  }
  return todos.map((todo) => (
    <li key={todo.id}>
      {todo.completed ? <s>{todo.title}</s> : todo.title}
      <div className="button-container">
        <CompletedButton
          id={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
        <DeleteButton id={todo.id} todos={todos} setTodos={setTodos} />
      </div>
    </li>
  ));
}

function CompletedButton({ id, todo, todos, setTodos }) {
  const updateState = () => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !todo.completed }),
    })
      .then((response) => response.json())
      .then((json) => {
        setTodos(
          todos.map((t) =>
            t.id === json.id ? { ...t, completed: json.completed } : t
          )
        );
      })
      .catch((error) => console.error("에러 발생:", error));
  };

  return <button onClick={updateState}>완료</button>;
}

function DeleteButton({ id, todos, setTodos }) {
  const deleteTodo = () => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => console.error("에러 발생:", error));
  };

  return <button onClick={deleteTodo}>삭제</button>;
}
export default App;
