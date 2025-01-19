import axios from "axios";

export default function AddButton({ todo, setTodo, setTodos }) {
  const sendTodo = () => {
    axios
      .post("http://localhost:8080/todos", {
        title: todo,
      })
      .then(function (response) {
        setTodos((todos) => [...todos, response.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
    setTodo("");
  };

  return (
    <button id="add-btn" onClick={sendTodo}>
      할 일 추가
    </button>
  );
}
