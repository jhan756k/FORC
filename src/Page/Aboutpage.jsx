import React, { useEffect, useState } from "react";
import Sticknav from "../Component/Sticknav";
import "../Style/Aboutpage.css";

const Aboutpage = () => {
  const handleScroll = () => {
    document.querySelector(".stick").style.backgroundColor =
      "rgba(255,255,255,1)";
  };

  useEffect(() => {
    document.querySelector(".stick").style.backgroundColor =
      "rgba(255,255,255,1)";
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [member, setMember] = useState([
    {
      img: "/images/1.jpg",
      name: "서우찬",
      position: "대표",
      explain: "자연 생태계 보존을 위한 연구를 진행하는 FORC 입니다.",
    },
    {
      img: "/images/2.jpg",
      name: "김태훈",
      position: "대표",
      explain: "자연 생태계 보존을 위한 연구를 진행하는 FORC 입니다.",
    },
    {
      img: "/images/3.jpg",
      name: "김태훈",
      position: "대표",
      explain: "자연 생태계 보존을 위한 연구를 진행하는 FORC 입니다.",
    },
  ]);

  return (
    <div className="aboutwrap">
      <div className="awr">
        <Sticknav />
        <div className="oim">
          <img src="/images/about.jpg" alt="logo" className="aboutimg" />
          <div className="abouttext">
            <h1>ABOUT US</h1>
            <p>자연 생태계 보존을 위한 &nbsp;연구를 진행하는 FORC 입니다.</p>
          </div>
        </div>
      </div>

      <div className="fields">
        <div className="president">
          <h1 className="position">대표이사</h1> 
          
        </div>
        <div className="forestfield"></div>
        <div className="beekeepingfield"></div>
        <div className="pollutionfield"></div>
      </div>
    </div>
  );
};

export default Aboutpage;
