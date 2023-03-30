import React from "react";
import "../Style/Member.css";

const Member = ({ img, name, position, explain }) => {
  return (
    <div className="mwrap">
      <img src={img} alt="" className="memimg"/>
      <div className="mtext">
        <h1 className="mtit">{name}</h1>
        <h2>{position}</h2>
        <p>{explain}</p>
      </div>
    </div>
  );
};

export default Member;
