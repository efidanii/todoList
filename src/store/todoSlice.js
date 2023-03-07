import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    filterStatus: { is_active: null },
    valueInputSearch: "",
  },
  reducers: {
    AddTodo(state, action) {
      state.todos.push({
        id: uuid(),
        title: action.payload,
        status: false,
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    DeleteTodo(state, action) {
      state.todos = [...state.todos].filter((e) => e.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    ToggleStatusTodo(state, action) {
      let index = [...state.todos].findIndex((e) => e.id === action.payload);
      [...state.todos][index].status = ![...state.todos][index].status;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    ClearFilterStatus(state) {
      state.filterStatus.is_active = null;
    },
    SetFilter(state, action) {
      state.filterStatus = action.payload;
    },
    SetSearchValue(state, action) {
      state.valueInputSearch = action.payload;
    },
  },
});

export const {
  AddTodo,
  DeleteTodo,
  ToggleStatusTodo,
  ClearFilterStatus,
  SetFilter,
  SetSearchValue,
} = todoSlice.actions;

export default todoSlice.reducer;
