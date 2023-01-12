import "../App.scss";
import { useState } from "react";

const mockTodos = [
  { id: 1, title: "Learn how to delete" },
  { id: 2, title: "Learn how to use inputs" },
];

function TodoApp() {
  const [todos, setTodos] = useState(mockTodos);
  const [todoText, setTodoText] = useState("");

  const handleDelete = (id) => {
    //1 budas
    // const newTodos = todos.filter((todo) => todo.id !== id);
    // setTodos(newTodos);

    //2 budas
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setTodoText(value);
  };

  const handleAddTodo = () => {
    const title = todoText.trim();
    const alreadyExists = todos.some((todo) => todo.title === title);
    if (title && !alreadyExists) {
      const newTodo = { id: Date.now(), title: title };
      setTodos((preTodos) => [...preTodos, newTodo]);
      setTodoText("");
    }
  };

  return (
    <div className="TodoApp">
      <h1 className="todo-title">Todo list</h1>
      <ul>
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            {todo.title}
            <strong
              className="delete-btn"
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              {" "}
              x
            </strong>
          </li>
        ))}
      </ul>
      <input type="text" value={todoText} onChange={handleChange} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoApp;
