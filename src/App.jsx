import React, { useEffect, useState } from "react";

import Search from "./components/Search";
import Add from "./components/Add";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="appWrapper">
        <h1>Todo List</h1>
        <Search />
        <TodoList />
        <Add />
      </div>
    </div>
  );
}

export default App;
