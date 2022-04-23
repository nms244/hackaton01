import { TaskOnDay } from "./TaskOnDay";

export function Day(props) {
  const headline = props.weekday ? props.weekday + '曜日のタスク' : 'タスク一覧';
  const is_index = props.weekday ? false : true;
  return(
    <div className="tasks">
      <h2>{headline}</h2>
      <ul>
        {props.tasks.map(task => {
          return(<TaskOnDay key={task.id} task={task} is_index={is_index} />);
        })}
      </ul>
    </div>
  );
}
