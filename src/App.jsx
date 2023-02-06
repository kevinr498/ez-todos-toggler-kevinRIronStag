import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import TodoCount from "./components/TodoCount";
import UseFetch from "./hooks/useFetch";
function App(props) {
  const todo = UseFetch();
  const initialTodo = todo.map((data) => data.completed);

  const initialCount = todo.filter((data) => data.completed === true);

  function checkedValue(event) {
    setTodo(event.target.checked);
    if (event.target.checked === false) {
      setState(newCount - 1);
    } else setState(newCount + 1);
  }
  const [newCount = initialCount.length, setState] = useState();
  const [completedtodo = initialTodo, setTodo] = useState();

  useEffect(() => {
    document.title = `You clicked ${newCount} times`;
  });
  return (
    <div className="flex flex-col ">
      <TodoCount count={newCount} />
      <Todo checked={checkedValue} newCountTodo={"completed"}></Todo>
    </div>
  );
}
export default App;
