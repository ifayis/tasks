import React, { useState } from 'react';

function Todolist() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="card p-4 shadow">
      <form onSubmit={addTask} className="mb-3 d-flex gap-2">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter a new task"
        />
        <button className="btn btn-primary" type="submit">
          Add Task
        </button>
      </form>

      <ul className="list-group">
        {tasks.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
