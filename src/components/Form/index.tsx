import style from "./Form.module.scss";
import Button from "../Button";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ITask } from "../../Types/Task";

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: FormProps) {
  const [task, setTask] = useState<string>("");
  const [time, setTime] = useState<string>("00:00:00");

  function AddTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTasks((tasks) => [
      ...tasks,
      { id: uuidv4(), task, time, completed: false, selected: false },
    ]);
    setTask("");
    setTime("00:00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={(e) => AddTask(e)}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          id="tarefa"
          name="tarefa"
          value={task}
          placeholder="O que você quer estudar?"
          onChange={(e) => setTask(e.target.value)}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          id="tempo"
          name="tempo"
          value={time}
          step="1"
          min="00:00:00"
          max="01:30:00"
          onChange={(e) => setTime(e.target.value)}
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <Button>Adicionar</Button>
    </form>
  );
}
export default Form;
