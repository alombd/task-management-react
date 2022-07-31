import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateMember(props) {
  let { id } = useParams();
  let navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const memberList = localStorage.getItem("MemberArray");

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [id]);

  const getData = () => {
    if (memberList) {
      const memberArray = JSON.parse(memberList);
      let result = memberArray.find((item) => item.id === Number(id));
      setFormData(result);
    }
  };

  const update = (e) => {
    e.preventDefault();
    let member = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
    };

    let updatedArray = [];
    if (memberList) {
      const memberArray = JSON.parse(memberList);

      updatedArray = memberArray.map((item, index) => {
        if (item.id === Number(id)) {
          let temItem = { ...item, ...member };
          return temItem;
        } else return item;
      });

      localStorage.setItem("MemberArray", JSON.stringify(updatedArray));
      navigate(-1);
    }
  };
  return (
    <div>
      <div className="form-block">
        {formData && (
          <form className="form" onSubmit={update}>
            <h3>Update Member</h3>
            <div className="form-group">
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="Member name"
                name="name"
                defaultValue={formData.name}
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
                defaultValue={formData.email}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
