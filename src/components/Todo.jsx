import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";

export default function Todo(props) {
  const todo = useFetch();

  return (
    <div className="App" role="checkbox" aria-checked>
      {todo.map((data) => (
        <h4>
          {data.title}{" "}
          <input
            type="checkbox"
            checked={data[props.newCountTodo]}
            onClick={props.checked}
          />{" "}
        </h4>
      ))}
    </div>
  );
}

Todo.propTypes = {
  newCountTodo: PropTypes.string,
  checked: PropTypes.func,
};
