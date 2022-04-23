// import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Day } from "../components/Day.js";

function Result(props) {
  const taskTimes = props.tasks.map(task => {
    return task.required_time;
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
  const path = '/api/tasks/filter/student/1'
  const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
  const [tasks, setTasks] = useState(null);
  const [weekday, setWeekday] = useState('月');
  useEffect(() => {
    axios.get(url).then((response) => {
      setTasks(response.data);
    });
  }, []);

  if (!tasks) return 'loading...';

  return (
    <>
      <Result tasks={tasks} />
      <Day tasks={tasks} />
    </>
  );
}

export default All;