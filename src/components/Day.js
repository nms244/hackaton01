import { TaskOnDay } from "./TaskOnDay";

export function Day(props) {
  const headline = props.timeOnTask ? 'タスク一覧' : props.weekday + '曜日のタスク' ;
  const is_index = props.timeOnTask ? true : false;
  let time = {};
  props.tasks.map(task => {
    time[String(task.task)] = task.done_per_day;
  })
  const timeOnTask = is_index ? props.timeOnTask : time;

  let progress = null;
  if(is_index) {
    let total_required = props.tasks.reduce(function(sum, element){
      return sum + element.task_required_time;
    }, 0);
    let total_done = 0;
    for(let key in timeOnTask){
      total_done += timeOnTask[key];
    }
    console.log(total_done);
    console.log(total_required);
    progress = '進捗：' + String(Math.round(total_done/total_required*100)) + '%';
  }

  return(
    <div className="tasks">
      <h1>{headline}</h1>
      <div>{progress}</div>
      <ul>
        {props.tasks.map(task => {
            return(<TaskOnDay task={task} sumTime={timeOnTask[task.task]} is_index={is_index} />);
        })}
      </ul>
    </div>
  );
}
