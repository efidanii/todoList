import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList({ ToggleStatusTodo, DeleteTodo }) {
  const todos = useSelector((state) => state.todos.todos);
  const filterStatus = useSelector((state) => state.todos.filterStatus);
  const valueInputSearch = useSelector((state) => state.todos.valueInputSearch);

  function FilterTodo() {
    let newTodo = [...todos];

    if (filterStatus.is_active !== null) {
      newTodo = newTodo.filter(
        (oneTodo) => oneTodo.status !== filterStatus.is_active
      );
    }

    if (valueInputSearch !== null) {
      newTodo = newTodo.filter((oneTodo) =>
        oneTodo.title.toLowerCase().includes(valueInputSearch.toLowerCase())
      );
    }

    return newTodo;
  }
  return (
    <div className="todo-list">
      {FilterTodo().map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          ToggleStatusTodo={ToggleStatusTodo}
          DeleteTodo={DeleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
