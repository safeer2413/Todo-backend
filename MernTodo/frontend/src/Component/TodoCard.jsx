import React from "react";
import "./TodoCard.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function TodoCard({ todos, deleteTodo }) {

  const navigate = useNavigate();

  return (
    <div className="todo-container">
      <h1 className="todo-heading">Your Todos</h1>
      <div className="todo-list">
      {!todos ||todos.length === 0 ? (
          <p className="empty-message message">No todos yet! Add some tasks.</p>
        ) : (
          todos.map((todo) => (
            <div key={todo._id} className="todo-card">
              <h2 className="todo-title">{todo.title}</h2>
              <p className="todo-desc"><b>{todo.description}</b></p>
              <button className="delete-button" onClick={() => navigate(`/${todo._id}`)}><FontAwesomeIcon icon={faPenToSquare} className="delete-icon" /></button>
              <button className="delete-button" onClick={() => deleteTodo(todo._id)}><FontAwesomeIcon icon={faTrash} className="delete-icon" /></button>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default TodoCard;


