import PropTypes from "prop-types";
import UseFetch from "../hooks/useFetch";

export default function TodoCount(props) {
  const todo = UseFetch();
  const total = todo.length;

  return (
    <div role="heading" aria-level="1">
      <h1>
        {props.count}/{total}
      </h1>
    </div>
  );
}

TodoCount.propTypes = {
  count: PropTypes.number,
};
