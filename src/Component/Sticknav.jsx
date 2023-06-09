import React from "react";
import "../Style/Sticknav.css";

const Sticknav = () => {
  async function campaignClick() {

    if (window.location.pathname !=="/") {
      window.location.href = "/?s=1";
    } else{
      window.scrollTo({
        top: document.querySelector(".camp").offsetTop - 90,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="stick">
      <div className="items">
        <div className="iwrap">
          <a href="/about" className="item">
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
          <a href="/join" className="item">
            Join Us
          </a>
        </div>
        <div className="iwrap">
          <a href="/donate" className="item">
            Donate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sticknav;
