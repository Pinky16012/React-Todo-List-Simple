import { Routes, Route } from "react-router-dom";
import "./App.css";
import TodoList from "./page/todoList/todoList";
import SignUp from "./page/signup/signup";
import Login from "./page/login/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="todolist" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
