import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateTask(props) {
  let { id } = useParams();
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignTo: "",
    date: "",
  });
  const taskList = localStorage.getItem("TaskArray");

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [id]);

  const getData = () => {
    if (taskList) {
      const taskArray = JSON.parse(taskList);
      let result = taskArray.find((item) => item.id === Number(id));
      setFormData(result);
    }
  };

  const memberArray = localStorage.getItem("MemberArray");
  const memberList = JSON.parse(memberArray);
  const date = new Date();

  const update = (e) => {
    e.preventDefault();
    let task = {
      title: e.target.elements.title.value,
      description: e.target.elements.description.value,
      assignTo: formData.assignTo || memberList[0]?.id, //
      date: date.toISOString().substring(0, 10),
    };

    let updatedArray = [];
    if (taskList) {
      const taskArray = JSON.parse(taskList);

      updatedArray = taskArray.map((item, index) => {
        if (item.id === Number(id)) {
          let temItem = { ...item, ...task };
          return temItem;
        } else return item;
      });

      localStorage.setItem("TaskArray", JSON.stringify(updatedArray));
      navigate(-1);
    }
  };

  const selected = (e) => {
    console.log("cll");
    console.log(e.target.value);
    setFormData({ ...formData, assignTo: e.target.value });
  };

  return (
    <div>
      <div className="form-block">
        {formData && (
          <form className="form" onSubmit={update}>
            <h3>Update Task</h3>
            <div className="form-group">
              <input
                name="title"
                type="text"
                placeholder="title"
                className="form-control"
                required
                defaultValue={formData.title}
              />
            </div>
            <div className="form-group">
              <input
                name="description"
                type="text"
                placeholder="description"
                className="form-control"
                defaultValue={formData.description}
              />
            </div>
            <div className="form-group">
              {memberArray && (
                <select
                  className="form-control"
                  name="member"
                  defaultValue={formData.assignTo}
                  value={formData.assignTo || memberList[0].name}
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
              Update
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
