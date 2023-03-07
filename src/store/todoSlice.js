import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    filterStatus: null,
  },
  reducers: {
    AddTodo(state, action) {
      console.log(state, action);
      state.todos.push({
        id: uuid(),
        title: "newTodo",
        status: false,
      });
    },
    DeleteTodo(state, action) {},
    ToggleStatusTodo(state, action) {},
    FilterTodo(state, action) {},
    ClearFilterStatus(state, action) {},
  },
});

export const { AddTodo } = todoSlice.actions;

export default todoSlice.reducer;
