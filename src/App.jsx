import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import Search from "./components/Search";
import Add from "./components/Add";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { AddTodo } from "./store/todoSlice";

function App() {
  const dispatch = useDispatch();
  const [todos, setTodo] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    if (valueInputAdd.trim()) {
      setTodo([
        ...todos,
        {
          id: uuid(),
          title: valueInputAdd,
          status: false,
        },
      ]);
      setValueAdd("");

      setTimeout(
        () =>
          (document.querySelector(".todo-list").scrollTop =
            document.querySelector(".todo-list").scrollHeight)
      );
    }
  }
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

  function ToggleStatusTodo(id) {
    let newTodo = [...todos];
    let index = newTodo.findIndex((e) => e.id === id);

    newTodo[index].status = !newTodo[index].status;

    setTodo(newTodo);
  }
  function DeleteTodo(id) {
    let newTodo = [...todos].filter((e) => e.id !== id);

    setTodo(newTodo);
  }

  return (
    <div className="App">
      <div className="appWrapper">
        <h1>Todo List</h1>
        <Search
          valueInputSearch={valueInputSearch}
          setValueSearch={setValueSearch}
          filterStatus={filterStatus}
          ClearFilterStatus={ClearFilterStatus}
          setFilter={setFilter}
        />
        <TodoList />
        <Add
          valueInputAdd={valueInputAdd}
          setValueAdd={setValueAdd}
          AddTodo={AddTodo}
        />
      </div>
    </div>
  );
}

export default App;
