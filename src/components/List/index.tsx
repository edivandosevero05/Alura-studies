import { ITask } from "../../Types/Task";
import Item from "./Item";
import style from "./List.module.scss";

interface ListProps {
  tasks: ITask[];
  selectTask: (task: ITask) => void;
}

function List({ tasks, selectTask }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item key={item.id} selectTask={selectTask} {...item} />
        ))}
      </ul>
    </aside>
  );
}
export default List;
