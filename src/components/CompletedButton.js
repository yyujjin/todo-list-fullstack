import axios from "axios";

export default function CompletedButton({ id, todo, todos, setTodos }) {
  const updateState = () => {
    axios
      .patch(`http://localhost:8080/todos/${id}`, {
        completed: !todo.completed,
      })
      .then(function (response) {
        setTodos(
          todos.map((t) =>
            t.id === response.data.id
              ? { ...t, completed: response.data.completed }
              : t
          )
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return <button onClick={updateState}>완료</button>;
}
