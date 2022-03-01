import React from "react";
import Task from './Task'

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task 
          key={task.text + task.category}
          category={task.category}
          text={task.text}
          onDeleteTask={onDeleteTask}
        />
        ))}
    </div>
  );
}

export default TaskList;
