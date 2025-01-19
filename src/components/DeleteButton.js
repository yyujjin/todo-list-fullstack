import axios from "axios";

export default function DeleteButton({ id, todos, setTodos }) {
  const deleteTodo = () => {
    axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then(function (response) {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log(error);
      })
      .finally(function () {
        // 항상 실행되는 영역
      });
  };

  return <button onClick={deleteTodo}>삭제</button>;
}
