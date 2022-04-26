export function TaskOnDay(props) {
  const required_time = props.is_index ? props.task.task_required_time : props.task.required_per_day;
  const done_time     = props.sumTime;
  return(
    <li key={props.task.task}>
      {props.task.task_name} : {props.task.task_content} --- {done_time} / {required_time} 分
    </li>
  );
}
