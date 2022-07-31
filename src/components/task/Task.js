import React from "react";
import { useNavigate, Link } from "react-router-dom";

import Table from "react-bootstrap/Table";

export default function Task() {
  const navigate = useNavigate();
  const transitToTask = () => {
    navigate("/createTask");
  };
  const isExist = localStorage.getItem("TaskArray");
  const tasks = isExist ? JSON.parse(isExist) : null;

  /**
   * Fetch data for task assign member name
   * @param {*} id
   * @returns assign member name
   */
  const findName = (id) => {
    const MemberList = localStorage.getItem("MemberArray");
    const MemberArray = JSON.parse(MemberList);
    let name = MemberArray.find((item) => item.id === id)?.name;
    return name;
  };
  return (
    <div>
      <div className="common-container">
        <div className="sub-title">
          <h3>Task List </h3>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={transitToTask}
          >
            Create Task
          </button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>assignTo</th>
              <th>description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks &&
              tasks.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/updateTask/${item.id}`}>{item.title}</Link>
                  </td>
                  <td>{findName(item.assignTo)}</td>
                  <td>{item.description}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
