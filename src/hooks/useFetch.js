import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "https://jsonplaceholder.typicode.com/todos";
export default function UseFetch() {
  useEffect(() => {
    axios(baseUrl)
      .then((response) => response.data)
      .then((data) => {
        setTodo(data);
      });
  }, []);
  const [todo, setTodo] = useState([]);
  return todo;
}
