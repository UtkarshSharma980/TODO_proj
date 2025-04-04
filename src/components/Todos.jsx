import React from "react";
import Todo from "./Todo";
export default function Todos({ todos, toggleIsComplete }) {
  return (
    <>
      <div className="todos">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleIsComplete={toggleIsComplete}
            />
          );
        })}
      </div>
    </>
  );
}
