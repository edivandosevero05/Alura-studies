import { ITask } from "../../../Types/Task";
import style from "./Item.module.scss";

interface ItemProps extends ITask {
  selectTask: (task: ITask) => void;
}

function Item({ id, task, time, completed, selected, selectTask }: ItemProps) {
  return (
    <li
      className={`${style.item} 
      ${selected ? style.itemSelecionado : ""}
      ${completed ? style.itemCompletado : ""}`}
      onClick={() =>
        !completed &&
        selectTask({
          id,
          task,
          time,
          completed,
          selected,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.concluido} aria-label="Task completed"></span>
      )}
    </li>
  );
}
export default Item;
