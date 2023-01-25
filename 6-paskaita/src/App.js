import React from "react";
import "./App.scss";
import SearchFilter from "./components/SearchFilter";
import ShoppingListApp from "./components/ShoppingListApp";
import TodoApp from "./components/TodoApp";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contacts from "./pages/Contacts";
import CarPage from "./pages/CarPage";
import Weather from "./pages/Weather/Weather";

const App = () => {
  return (
    <Routes>
      <Route path="/shopping" element={<ShoppingListApp />}></Route>
      <Route path="/todo" element={<TodoApp />}></Route>
      <Route path="/search" element={<SearchFilter />}></Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/contacts" element={<Contacts />}></Route>
      <Route path="/weather" element={<Weather />}></Route>
      <Route path="/cars/:id" element={<CarPage />}></Route>
    </Routes>
  );
};

export default App;
