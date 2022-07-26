import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todo) => {
    if (!todo.text) {
      removeTodo(todo.id);
    }

    setTodos((prev) => prev.map((item) => (item.id === todo.id ? todo : item)));
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  return (
    <div>
      <h1>My Todo List App</h1>
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default TodoList;
