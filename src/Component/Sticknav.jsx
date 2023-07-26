import React from "react";
import "../Style/Sticknav.css";
import { useEffect, useState } from "react";

const Sticknav = () => {
  useEffect(() => {
    if (window.innerWidth < 700) {
      const title = document.querySelector(".title");
      title.style.marginRight = window.innerWidth - 150 + "px";
    }
  }, []);

  async function campaignClick() {
    if (window.location.pathname !== "/") {
      window.location.href = "/?s=1";
    } else {
      window.scrollTo({
        top: document.querySelector(".camp").offsetTop - 90,
        behavior: "smooth",
      });
    }
  }

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <>
      <div className="stick">
        <div className="items">
          <div className="iwrap">
            <a href="/about" className="item">
              About
            </a>
          </div>
          <div className="iwrap">
            <button className="item" onClick={() => campaignClick()}>
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

          <div className="dimscreen" />
          <div className="bnavigation">
            <ul>
              <li>About</li>
              <li>Campaign</li>
              <li>Join Us</li>
              <li>Donate</li>
            </ul>

            <div
              className="burgdiv"
              onClick={() => {
                setHamburgerOpen(!hamburgerOpen);
              }}
            >
              <div className="hamburger">
                <div className="burger b1" />
                <div className="burger b2" />
                <div className="burger b3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .bnavigation ul {
            transform: translateX(${hamburgerOpen ? "0" : "100%"});
            visibility: ${hamburgerOpen ? "visible" : "hidden"};
            display: none;
          }

          .b1 {
            transform: ${hamburgerOpen ? "rotate(45deg)" : "rotate(0deg)"};
          }
          .b2 {
            // transform: ${hamburgerOpen
              ? "translateX(100%)"
              : "translateX(0)"};
            opacity: ${hamburgerOpen ? "0" : "1"};
          }
          .b3 {
            transform: ${hamburgerOpen ? "rotate(-45deg)" : "rotate(0deg)"};
          }
          .dimscreen {
            visibility: ${hamburgerOpen ? "visible" : "hidden"};
            display: none;
            position: absolute;
            left: 0;
            top: 0;
            height: 100vh;
            width: 100vw;
            background-color: black;
            opacity: 0.5;
          }

          @media screen and (max-width: 700px) {
            .bnavigation ul {
              display: inline-block;
            }
            .dimscreen {
              display: inline-block;
            }
        `}
      </style>
    </>
  );
};

export default Sticknav;
