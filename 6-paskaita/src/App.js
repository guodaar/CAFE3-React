import React from "react";
import "./App.scss";
import SearchFilter from "./components/SearchFilter";
import ShoppingListApp from "./components/ShoppingListApp";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <div className="App">
      <TodoApp />
      <ShoppingListApp />
      <SearchFilter />
    </div>
  );
};

export default App;
