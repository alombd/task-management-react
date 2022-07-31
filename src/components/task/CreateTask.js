import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateTask() {
  let navigate = useNavigate();
  const [taskObject, setTaskObject] = useState({
    title: "",
    description: "",
    assignTo: "",
    date: "",
  });

  const memberArray = localStorage.getItem("MemberArray");
  const memberList = JSON.parse(memberArray);
  const date = new Date();

  const saveTask = (e) => {
    e.preventDefault();
    let task = {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      assignTo: taskObject.assignTo || memberList[0]?.id, //
      date: date.toISOString().substring(0, 10),
    };

    let isExist = localStorage.getItem("TaskArray");
    if (isExist) {
      let tasks = localStorage.getItem("TaskArray");

      let tasksArray = JSON.parse(tasks);
      tasksArray.push({ ...task, id: tasksArray.length + 1 });
      localStorage.setItem("TaskArray", JSON.stringify(tasksArray));
    } else {
      let tasks = [];
      tasks.push({ ...task, id: 1 });
      localStorage.setItem("TaskArray", JSON.stringify(tasks));
      toast("Task created successfully");
    }

    navigate(-1);
  };

  const selected = (e) => {
    setTaskObject({ ...taskObject, assignTo: e.target.value });
  };

  return (
    <div>
      <div className="form-block">
        <ToastContainer />
        <form className="form" onSubmit={saveTask}>
          <h3>Create Task</h3>
          <div className="form-group">
            <input
              name="title"
              type="text"
              placeholder="title"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              name="description"
              type="text"
              placeholder="description"
              className="form-control"
            />
          </div>
          <div className="form-group">
            {memberArray && (
              <select
                className="form-control"
                name="member"
                value={taskObject.assignTo || memberList[0].name}
                onChange={selected}
              >
                {memberList.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
