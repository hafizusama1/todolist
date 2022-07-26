import React, { useState } from "react";

function Todo({ todos, removeTodo, updateTodo }) {
  const [todoToUpdate, setTodoToUpdate] = useState(null);

  return todos.map((todo) => {
    if (todoToUpdate === todo.id) {
      return (
        <ShowEdit
          todo={todo}
          setTodoToUpdate={setTodoToUpdate}
          updateTodo={updateTodo}
        />
      );
    }

    return (
      <ShowText
        todo={todo}
        removeTodo={removeTodo}
        setTodoToUpdate={setTodoToUpdate}
      />
    );
  });
}

const ShowText = ({ todo, removeTodo, setTodoToUpdate }) => {
  return (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={todo.id}
    >
      <div key={todo.id}>{todo.text}</div>
      <div className="icons">
        <button onClick={() => removeTodo(todo.id)} className="delete-btn">
          Delete
        </button>

        <button
          onClick={() => {
            setTodoToUpdate(todo.id);
          }}
          className="edit-btn"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

const ShowEdit = ({ todo, updateTodo, setTodoToUpdate }) => {
  const [input, setInput] = useState(todo.text);

  return (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={todo.id}
    >
      <input
        autoFocus
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        name="edit text"
        className="todo-input edit"
        style={{ color: "white" }}
      />
      <div className="icons">
        <button
          onClick={() => {
            updateTodo({ ...todo, text: input });
            setTodoToUpdate(null);
          }}
          className="edit-btn"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Todo;
