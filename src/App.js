import React, { useState } from "react";
import "./App.css"

const App = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  function generateId() {
    return Math.floor(Math.random() * 100);
  }

  const handleSubmit = () => {
    setTodo((prevTodo) => {
      return prevTodo.concat({
        text: input,
        id: generateId(),
      });
    });
    setInput("");
  };

  const removeTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New To-do"
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul className="todo-list">
        {todo.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
