import axios from "axios";
// import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TasksPage() {
  const path = '/sample_api/hello'
  const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return 'loading...';

  return (
    <>
      <h1>Tasks Page</h1>
      <TaskList/>
    </>
  );
}

export default TasksPage;