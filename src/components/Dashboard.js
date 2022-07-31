import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <div className="container pt-3 dashboard-main">
        <div className="dashboard">
          <h4> Welcome to Dashboard !</h4>
          <div className="dashboard-btn-section">
            <Link to="/member" className="task-btn">
              <button
                type="button"
                className="btn btn-outline-secondary"
                name="member"
              >
                Member
              </button>
            </Link>
            <Link to="/task" className="task-btn">
              <button
                type="button"
                className="btn btn-outline-secondary"
                name="task"
              >
                Task
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
