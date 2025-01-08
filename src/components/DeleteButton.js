export default function DeleteButton({ id, todos, setTodos }) {
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
