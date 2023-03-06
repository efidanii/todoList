import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import "./index.scss";
import uuid from "react-uuid";

function App() {
  const [todo, setTodo] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const [filterStatus, setFilter] = useState({
    is_active: null,
  });

  function ClearFilterStatus() {
    setFilter({
      is_active: null,
    });
  }

  const [valueInputAdd, setValueAdd] = useState("");

  const [valueInputSearch, setValueSearch] = useState("");

  function AddTodo() {
    if (valueInputAdd) {
      let newTodo = [
        ...todo,
        {
          id: uuid(),
          title: valueInputAdd,
          status: false,
        },
      ];
      setTodo(newTodo);
      setValueAdd("");

      setTimeout(
        () =>
          (document.querySelector(".todo-list").scrollTop =
            document.querySelector(".todo-list").scrollHeight)
      );
    }
  }
  function FilterTodo() {
    let newTodo = [...todo];

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

  function ToggleStatusTodo(id) {
    let newTodo = [...todo];
    let index = newTodo.findIndex((e) => e.id === id);

    newTodo[index].status = !newTodo[index].status;

    setTodo(newTodo);
  }
  function DeleteTodo(id) {
    let newTodo = [...todo].filter((e) => e.id !== id);

    setTodo(newTodo);
  }

  return (
    <div className="App">
      <div className="appWrapper">
        <h1>Todo List</h1>
        <div className="search">
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
          <input
            type="text"
            placeholder="Search todo"
            value={valueInputSearch}
            onChange={(e) => setValueSearch(e.target.value)}
          />
          <div className="btns">
            <button
              type="button"
              className={
                filterStatus.is_active == null
                  ? "btn btn-light btn-active"
                  : "btn btn-light"
              }
              onClick={ClearFilterStatus}
            >
              All
            </button>
            <button
              type="button"
              className={
                filterStatus.is_active === true
                  ? "btn btn-light btn-active"
                  : "btn btn-light"
              }
              onClick={() => setFilter({ is_active: true })}
            >
              Active
            </button>
            <button
              type="button"
              className={
                filterStatus.is_active === false
                  ? "btn btn-light btn-active"
                  : "btn btn-light"
              }
              data-filter="3"
              onClick={() => setFilter({ is_active: false })}
            >
              Done
            </button>
          </div>
        </div>
        <div className="todo-list">
          <TodoList
            todo={FilterTodo()}
            setTodo={setTodo}
            filterStatus={filterStatus}
            ToggleStatusTodo={ToggleStatusTodo}
            DeleteTodo={DeleteTodo}
          />
        </div>
        <div className="addTodo">
          <input
            type="text"
            placeholder="Add todo"
            value={valueInputAdd}
            onChange={(e) => setValueAdd(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                AddTodo();
              }
            }}
          />
          <div className="send-invite-btn" onClick={AddTodo}>
            Добавить
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
