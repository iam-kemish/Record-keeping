import React from "react";

const Renderdata = (props) => {
  return (
    <div>
      <div className="cont">
        <h6><strong>Name:</strong> {props.name}</h6>
        <h6><strong>Email:</strong> {props.email}</h6>
        <h6><strong>{props.removeData}</strong> </h6>

      
      </div>
    </div>
  );
};

export default Renderdata;
