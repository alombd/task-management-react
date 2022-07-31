import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

export default function Member() {
  const isExist = localStorage.getItem("MemberArray");
  const members = isExist ? JSON.parse(isExist) : null;

  /**
   * This task is assigned for this member
   * @param {*} id as memberID
   * @returns assignTo count
   */

  const taskCounter = (id) => {
    let count = 0;
    let taskArray = localStorage.getItem("TaskArray");
    if (taskArray) {
      let tasksList = JSON.parse(taskArray);

      tasksList.map((item) => {
        if (id === Number(item.assignTo)) count++;
        return "";
      });
    }

    return count;
  };

  return (
    <div>
      <div className="common-container">
        <div className="sub-title">
          <h3>Member List </h3>
          <Link to="/createMember">
            <button type="button" className="btn btn-outline-success">
              Create Member
            </button>
          </Link>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {members &&
              members.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>
                    <Link to={`/updateMember/${item.id}`}>{item.name}</Link>
                  </td>
                  <td>{item.email}</td>
                  <td>{taskCounter(item.id)}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
