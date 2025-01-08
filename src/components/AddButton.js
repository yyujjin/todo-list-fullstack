export default function AddButton({ todo, setTodo, setTodos }) {
  const sendTodo = () => {
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: todo }),
    })
      .then((res) => res.json())
      //여기여기
      .then((json) => {
        setTodos((todos) => [...todos, json]);
      })
      .catch((error) => console.error("에러 발생:", error));
    setTodo("");
  };

  return (
    <button id="add-btn" onClick={sendTodo}>
      할 일 추가
    </button>
  );
}
