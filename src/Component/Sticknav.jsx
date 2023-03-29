import React from "react";
import "../Style/Sticknav.css";

const Sticknav = () => {
  return (
    <div className="stick">
      <div className="items">
        <div className="iwrap">
          <a href="/" className="item">
            About
          </a>
        </div>
        <div className="iwrap">
          <a href="/" className="item">
            Campaign
          </a>
        </div>

        <a href="/" className="title">
          FORC
        </a>

        <div className="iwrap">
          <a href="/login" className="item">
            Join Us
          </a>
        </div>
        <div className="iwrap">
          <a href="/register" className="item">
            Donate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sticknav;
