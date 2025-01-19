import CompletedButton from "./CompletedButton";
import DeleteButton from "./DeleteButton";
import { useEffect } from "react";
import axios from "axios";

export default function List({ todos = { todos }, setTodos = { setTodos } }) {
  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then(function (response) {
        setTodos(response.data);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
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
