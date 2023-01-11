import React from "react";
import "./App.scss";
import ShoppingListApp from "./ShoppingListApp";
import TodoApp from "./TodoApp";

const App = () => {
  return (
    <div className="App">
      <TodoApp />
      <ShoppingListApp />
    </div>
  );
};

export default App;
