import { createContext, useState, useEffect } from "react";
import { task as data } from "../data/tasks";


export const TaskContext = createContext();

export function TaskContextProvaider(props) {
  const [tasks, setTask] = useState([]);

  const createTask = (task) => {
    setTask([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  function deleteTask(taskId) {
    setTask(tasks.filter((task) => task.id !== taskId));
  }

  //cuando carga el componente es la idea del useEffect
  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
