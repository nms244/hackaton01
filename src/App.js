import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "./pages/Root.js";
import TasksPage from "./pages/Tasks.js";

function Header() {
  return(
    <p>header</p>
  );
}

function Footer() {
  return(
    <p>footer</p>
  );
}
export function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path={`/`} element={<RootPage />}/>
        <Route path={`/tasks`} element={<TasksPage />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

