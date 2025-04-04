import { useState } from "react";
import InputBox from "./components/InputBox";
import Todos from "./components/Todos";
import { v4 as uuidV4 } from "uuid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState();
  const [isComplete, setIsComplete] = useState(false);

  function addTodo() {
    if (task!='') {
      const newTodos = [
        ...todos,
        { id: uuidV4(), task: task, isComplete: isComplete },
      ];
      setTodos(newTodos);
    }
  }
  function clearAll() {
    setTodos([]);
  }
  function clearComplete() {
    const newTodos = [...todos.filter((e) => e.isComplete == false)];
    setTodos(newTodos);
  }
  function toggleIsComplete(id) {
    const newTodos = todos.map((e) =>
      e.id === id ? { ...e, isComplete: !e.isComplete } : e
    );
    setTodos(newTodos);
  }
  return (
    <div id="body">
      <InputBox
        setTask={setTask}
        addTodo={addTodo}
        clearComplete={clearComplete}
        clearAll={clearAll}
        todos={todos}
      />
      <Todos todos={todos} toggleIsComplete={toggleIsComplete} />
    </div>
  );
}

export default App;
