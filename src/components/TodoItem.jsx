import { useDispatch } from "react-redux";
import { DeleteTodo, ToggleStatusTodo } from "../store/todoSlice";

function TodoItem({ item }) {
  const dispatch = useDispatch();

  return (
    <li key={item.id}>
      <div className="todo-name">{item.title}</div>
      <div className="todo-btns">
        <input
          onChange={() => dispatch(ToggleStatusTodo(item.id))}
          checked={item.status ? "checked" : ""}
          type="radio"
          aria-label="Checkbox for following text input"
        ></input>
        <svg
          onClick={() => dispatch(DeleteTodo(item.id))}
          className="closeBtn"
          width="15px"
          height="15px"
          viewBox="0 0 24 24"
          fill="#453021"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
            fill="#453021"
          />
        </svg>
      </div>
    </li>
  );
}

export default TodoItem;
