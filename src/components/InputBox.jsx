import React, { useState, useEffect } from "react";

export default function InputBox({
  setTask,
  addTodo,
  clearComplete,
  clearAll,
  todos,
}) {
  function handleAddButton() {
    addTodo();
    setTask("");
  }
  return (
    <>
      <div className="inputBox">
        <input type="text" value={todos} onChange={(e) => setTask(e.target.value)} />
        <button onClick={handleAddButton}>Add</button>
        <button onClick={clearComplete}>Clear Completed</button>
        <button onClick={clearAll}>Clear All</button>
      </div>
    </>
  );
}
