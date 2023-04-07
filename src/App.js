
import "./App.css";
import { useState, } from "react";
import { TaskModel } from "./task_model";
function App() {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState("");

  const saveTask = () => {

    const task = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      taskName: newTask,
      completed: false,



    }

    const newTasks = [...tasks, task];
    setTasks(newTasks);




  }

  const handleChange = (event) => {
    setNewTask(event.target.value);


  };

  const deleteItem = (index) => {
    const updatedTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)];

    setTasks(updatedTasks);

  };

  const complete = (index) => {

    setTasks(
      tasks.map((task) => {

        if (task.id === index) {
          return { ...task, completed: true }
        }
        else return task;
      })

    )

  }

  return (
    <div className="App">
      <center>
        <br />
        <br />

        <input onChange={handleChange} />
        <br />
        <br />

        <button onClick={saveTask}> Add Task </button>
        <br />
        <br />

        {tasks.map((task, index) => {
          return <TaskModel name={task.taskName} id={task.id} deleteItem={deleteItem} complete={complete} completed={task.completed} />;
        })}

      </center>
    </div>
  );
}

export default App;
