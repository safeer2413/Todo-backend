import React from 'react';
import './TodoCard.css';
import { useNavigate } from 'react-router-dom';

function TodoCard({ todo, deleteTodo }) {
  const navigate = useNavigate()
  return (
    <>
    <div className="todo-card">
      <div className="todo-content">
        <h3 className="todo-title">{todo.title}</h3>
        <p className="todo-desc">{todo.desc}</p>
      </div>
      <button className="delete-btn" onClick={() => deleteTodo(todo._id)}>
        ❌ Delete
      </button>
      <button className="update-btn" onClick={()=>navigate(/${todo._id})}>
        🔄update
      </button>
    </div>
    </>
  );
}

