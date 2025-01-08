import AddButton from "./AddButton";
import { useState } from "react";
export default function AddTodo({ setTodos }) {
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
      <AddButton todo={todo} setTodo={setTodo} setTodos={setTodos} />
    </>
  );
}
