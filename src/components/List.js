import CompletedButton from "./CompletedButton";
import DeleteButton from "./DeleteButton";
import { useEffect } from "react";

export default function List({ todos = { todos }, setTodos = { setTodos } }) {
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
