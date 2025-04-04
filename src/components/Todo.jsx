import React from "react";

export default function Todo({ todo, toggleIsComplete }) {
  return (
    <div className="todo">
      <input
        type="checkbox"
        onChange={() => toggleIsComplete(todo.id)}
        checked={todo.isComplete}
      />
      <h2>{todo.task}</h2>
    </div>
  );
}
