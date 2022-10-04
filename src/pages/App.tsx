import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import { ITask } from "../Types/Task";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask) {
    setSelected(taskSelected);
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        selected: taskSelected.id === task.id ? true : false,
      }))
    );
  }

  function terminateTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((tasks) =>
        tasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          } else {
            return task;
          }
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected} terminateTask={terminateTask} />
    </div>
  );
}

export default App;
