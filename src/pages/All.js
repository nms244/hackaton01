// import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Day } from "../components/Day.js";

function Result(props) {
  const taskTimes = props.tasks.map(task => {
    return task.task_required_time;
  });
  const sumTime = taskTimes.reduce(function(sum, element){
    return sum + element;
  }, 0);
  return(
    <div>
      <h1>進捗</h1>
      <progress id="myProgress" value="20" max="100">0%</progress>
      合計{sumTime}分
    </div>
  );
}

function All(props) {
  const path = '/api/tasks/filter/week/1'
  const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
  const [tasks, setTasks] = useState(null);
  const [weekday, setWeekday] = useState('月');
  useEffect(() => {
    axios.get(url).then((response) => {
      setTasks(response.data);
    });
  }, []);
  if (!tasks) return 'loading...';

  let allTasks = [];
  for(let key in tasks) {
    allTasks.push(tasks[key]);
  }

  let timeOnTask = {};
  allTasks.map(tasksOnDay => {
    tasksOnDay.map(task => {
      timeOnTask[String(task.task)] = timeOnTask[String(task.task)] ? timeOnTask[String(task.task)] + task.done_per_day : task.done_per_day;
    })
  });

  return (
    <>
      {/* <Result tasks={tasks['月']} /> */}
      <Day tasks={tasks['月']} timeOnTask={timeOnTask} />
    </>
  );
}

export default All;