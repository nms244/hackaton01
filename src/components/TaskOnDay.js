export function TaskOnDay(props) {
  const time = props.is_index ? props.task.required_time : 'time/day';
  return(
    <li>
      {props.task.name} : {props.task.content} {props.task.required_time}

    </li>
  );
}
