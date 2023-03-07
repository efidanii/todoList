import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList({ ToggleStatusTodo, DeleteTodo }) {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className="todo-list">
      {todos.map((item) => (
        <TodoItem
          item={item}
          ToggleStatusTodo={ToggleStatusTodo}
          DeleteTodo={DeleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
