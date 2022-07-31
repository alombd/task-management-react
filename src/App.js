import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import Dashboard from "../src/components/Dashboard";
import { useState } from "react";
import Task from "../src/components/task/Task";
import CreateTask from "../src/components/task/CreateTask";
import Member from "../src/components/member/Member";
import CreateMember from "../src/components/member/CreateMember";
import UpdateMember from "./components/member/UpdateMember";
import UpdateTask from "./components/task/UpdateTask";
import "./style.css";
import TopNav from "./components/Navbar";

function App() {
  const [loginState, setLoginState] = useState(localStorage.getItem("token"));

  let navigate = useNavigate();
  const logTransit = () => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    );
    setLoginState(true);
    navigate("./dashboard");
  };

  return (
    <div className="App">
      {/* Common top nav bar  */}
      {loginState && <TopNav />}

      {/* Route start   */}
      <Routes exact>
        <Route exact path="/" element={<Login fun={logTransit} />} />
        <Route
          exact
          path="dashboard"
          element={loginState ? <Dashboard /> : ""}
        />

        <Route path="task" element={loginState ? <Task /> : ""} />
        <Route path="createTask" element={loginState ? <CreateTask /> : ""} />
        <Route
          path="createMember"
          element={loginState ? <CreateMember /> : ""}
        />
        <Route path="member" element={loginState ? <Member /> : ""} />
        <Route
          path="updateMember/:id"
          element={loginState ? <UpdateMember /> : ""}
        />
        <Route
          path="updateTask/:id"
          element={loginState ? <UpdateTask /> : ""}
        />
      </Routes>
    </div>
  );
}

export default App;
