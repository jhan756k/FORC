import React from "react";
import "../Style/Sticknav.css";

const Sticknav = () => {
  async function campaignClick() {
    let pos = await document.querySelector(".camp").offsetTop;
    window.scrollTo({
      top: pos - 90,
      behavior: "smooth",
    });
  };

  return (
    <div className="stick">
      <div className="items">
        <div className="iwrap">
          <a href="/" className="item">
            About
          </a>
        </div>
        <div className="iwrap">
          <button
            className="item"
            onClick={() => (campaignClick())}>
            Campaign
          </button>
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
