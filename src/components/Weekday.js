function TaskOnWeekday(task) {
  return(
    <li>{task.name} : {task.content}</li>
  );
}

export function Weekday(tasks) {
  return(
    <div className="tasks">
      <ul>
        {tasks.map(task => {
          return(<TaskOnWeekday key={task.id} task={task}/>);
        })}
      </ul>
    </div>
  );
}