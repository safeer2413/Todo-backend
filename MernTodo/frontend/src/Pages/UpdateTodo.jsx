import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ScaleLoader } from "react-spinners";
import { useGetTodoQuery, useGetTodosQuery, useUpdateTodoMutation } from '../Slices/todoApiSlice';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

function UpdateTodo() {
  const { userInfo } = useSelector((state) => state.auth);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: todo, isLoading, refetch } = useGetTodoQuery( id );
  const { refetch: todosRefetch } = useGetTodosQuery({
    userId: userInfo?._id,
  });
  const [updateTodo] = useUpdateTodoMutation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);

  const updateTodoHandler = async (e) => {
    e.preventDefault()
    try {
      await updateTodo({ title, description, status, id }).unwrap();
      toast.success('Updated Successfully');
      refetch();
      todosRefetch();

      setTitle("");
      setDescription("");
      setStatus(false);

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error('Failed to update');
    }
  };
  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setStatus(todo.status);
    }
  }, [todo]);

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <ScaleLoader color="rgb(29, 12, 91)" />
        </div>

      ) : (
        <div className="todo-wrapper">
          <h1 className="app-title">Todo List</h1>
          <form className="todo-form" onSubmit={updateTodoHandler}>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="todo-input"
              required
            />
            <textarea
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="todo-textarea"
              required
            ></textarea>

            <select value={status?.toString()}
              onChange={(e) => setStatus(e.target.value === "true")}>

              <option value="false">Pending</option>
              <option value="true">Completed</option>
            </select>

            <button type="submit" className="todo-button">{isLoading ? 'Loading...' : 'Update'} </button>

          </form>
        </div>

      )}
    </>
  )
}

export default UpdateTodo