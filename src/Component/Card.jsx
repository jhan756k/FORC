import React from "react";
import "../Style/Card.css";

const Card = ({ img, date, title, text }) => {
  return (
    <div>
      <a href="/" className="wrap">
        <div className="card">
          <div className="cardimg">
            <img src={img} alt="news" />
          </div>
          <div className="carddate">{date}</div>
          <div className="cardtitle">{title}</div>
          <div className="cardtext">{text}</div>
        </div>
      </a>
    </div>
  );
};

export default Card;
