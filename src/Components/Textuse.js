import React, { useState } from "react";
import Renderdata from "./Renderdata";

function Textuse() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [data, setData] = useState([]);
  const Adddata = () => {
    if (!name || !email) {
      alert("Enter something first");
      return;
    }
    setData([
      ...data,
      {
        name: name,
        email: email,
      },
    ]);
    setName("");
    setEmail("");
  };
  const removeData =(index) => {
    let arr = data;
    arr.splice(index, 1)
  setData([...arr])
  }

  return (
    <div>
      <div className="row">
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Fullname?"
            aria-label="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Email?"
            aria-label="Last name"
            value={email}
            onChange={(e) => setEmail(e.target.value )}
          />
        </div>
      </div>
      <button type="button" className="btn btn-success my-3" onClick={Adddata}>
        Submit
      </button>

      {data.map((element, index) => {
        return (
          <>
            <Renderdata
              name={element.name}
              email={element.email}
              index={index}
              key={index}
            />
            <button className="btn btn-danger my-3" onClick={()=> removeData(index)}>RemoveData</button>
          </>
        );
      })}
    </div>
  );
}

export default Textuse;
