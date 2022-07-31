import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreateMember() {
  let navigate = useNavigate();

  /**
   * New member create
   * @param {*} e
   */

  const storeMember = (e) => {
    e.preventDefault();
    // Get the member array list in local storage
    let isExist = localStorage.getItem("MemberArray");
    let member = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
    };

    if (isExist) {
      let MemberArray = JSON.parse(isExist);
      MemberArray.push({ ...member, id: MemberArray.length + 1 });
      localStorage.setItem("MemberArray", JSON.stringify(MemberArray));
    } else {
      let MemberArray = [];
      MemberArray.push({ ...member, id: 1 });
      localStorage.setItem("MemberArray", JSON.stringify(MemberArray));
    }

    navigate(-1);
  };

  return (
    <div>
      <div className="form-block">
        <form className="form" onSubmit={storeMember}>
          <h3>Create Member</h3>
          <div className="form-group">
            <input
              type="name"
              className="form-control"
              id="name"
              placeholder="Member name"
              name="name"
              required
            />
          </div>
          <div className="form-group ">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Member Email"
              name="email"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
