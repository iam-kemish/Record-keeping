import React from "react";

const Renderdata = (props) => {
  return (
    <div>
      <div className="cont">
        <h5><strong>Name:</strong> {props.name}</h5>
        <h5><strong>Email:</strong> {props.email}</h5>
      </div>
    </div>
  );
};

export default Renderdata;
