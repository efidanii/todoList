import { useDispatch } from "react-redux";
import { useState } from "react";
import { AddTodo } from "../store/todoSlice";

function Add() {
  const [valueInputAdd, setValueAdd] = useState("");
  const dispatch = useDispatch();
  const addNewTodo = () => {
    dispatch(AddTodo(valueInputAdd));
    setValueAdd("");
    setTimeout(
      () =>
        (document.querySelector(".todo-list").scrollTop =
          document.querySelector(".todo-list").scrollHeight)
    );
  };

  return (
    <div className="addTodo">
      <input
        type="text"
        placeholder="Add todo"
        value={valueInputAdd}
        onChange={(e) => setValueAdd(e.target.value)}
      />
      <div className="send-invite-btn" onClick={() => dispatch(addNewTodo)}>
        Добавить
      </div>
    </div>
  );
}

export default Add;
