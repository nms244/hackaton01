import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import All from "./pages/All";

function Header(props) {
  // const dateNames = ['月','火','水','木','金','土']

  return(
    <header>
      <a href='/'><h1>WEEK TASK</h1></a>
      <a href='/'>Home</a>
      <a href='/all'>タスク一覧</a>
      <div>今日は{props.today}曜日です</div>
    </header>
  );
}

function Form(props) {
  return(
    <div>
      <form onSubmit={(e) => props.addTask(e)}>
        <div>
          <span>タスク名</span>
          <input type='text' name='name' />
        </div>
        <div>
          <span>内容</span>
          <input type='textarea' name='content' />
        </div>
        <div>
          <span>所要時間</span>
          <input type='number' name='required_time' />
        </div>
        <button type="submit">追加</button>
      </form>
    </div>
  );
}

function Footer() {
  return(
    <div>Footer</div>
  );
}

function getToday() {
  const date = new Date();
  const dayOfWeek = date.getDay() ;
  return [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek] ;
}

export function App() {
  const [today,setToday] = useState(null);
  const [post,setPost] = useState(null);

  useEffect(() => {
    setToday(getToday())
  }, []);

  function addTask(e) {
    e.preventDefault();
    const path = '/api/tasks/'
    let url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
    const params = new FormData(e.currentTarget);
    axios.post(url, {
      name: params.get("name"),
      content: params.get("content"),
      required_time: params.get("required_time"),
      is_done: false,
      student: 1
    }).then((response) => {
      setPost(response.data);
    });
    url = process.env.REACT_APP_API_ORIGIN;
    axios.get(url);
  }

  return (
    <BrowserRouter>
      <Header today={today} />
      <Routes>
        <Route exact path={`/`} element={<Home today={today} />}/>
        <Route path={`/all`} element={<All />}/>
      </Routes>
      <Form addTask={addTask} />
      <Footer />
    </BrowserRouter>
  );
}

