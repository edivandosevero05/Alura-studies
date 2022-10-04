import Button from "../Button";
import Watch from "./Watch";
import style from "./Timer.module.scss";
import { ITask } from "../../Types/Task";
import { useEffect, useState } from "react";
import { timeToSecconds } from "../../common/utils/time";

interface TimerWatchProps {
  selected: ITask | undefined;
  terminateTask: () => void;
}

function TimerWatch({ selected, terminateTask }: TimerWatchProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) setTime(timeToSecconds(selected.time));
  }, [selected]);

  function countdown(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return countdown(count - 1);
      }
      terminateTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha uma tarefa e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => countdown(time)}>Começar!</Button>
    </div>
  );
}

export default TimerWatch;
