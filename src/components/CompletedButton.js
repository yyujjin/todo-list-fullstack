export default function CompletedButton({ id, todo, todos, setTodos }) {
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
