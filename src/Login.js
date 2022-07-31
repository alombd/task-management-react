import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login(props) {
  const userData = {
    username: "alombd",
    password: "12345",
  };

  const login = (e) => {
    e.preventDefault();

    if (
      e.target.elements.user_name.value === userData.username &&
      e.target.elements.password.value === userData.password
    ) {
      let auth = {
        user_name: e.target.elements.user_name.value,
        password: e.target.elements.password.value,
      };
      localStorage.setItem("auth", JSON.stringify(auth));
      props.fun();
    } else {
      toast("Wrong Credential !");
    }
  };

  return (
    <div>
      <div className="container">
        <ToastContainer />
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">Please Login</h4>
            <div className="image">username: alombd, password: 12345</div>
          </div>
          <div className="body-form">
            <form onSubmit={login}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="user_name"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                />
              </div>
              <button type="submit" className="btn btn-secondary btn-block">
                LOGIN
              </button>
              <div className="message">
                <div>
                  <input type="checkbox" /> Remember ME
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
