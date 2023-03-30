import React, { useEffect, useState } from "react";
import Sticknav from "../Component/Sticknav";
import Member from "../Component/Member";
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
      img: "/images/hh1.jpg",
      name: "민족사관고등학교 2학년 김환희",
      position: "회원",
      explain: "안녕하세요 저는 최준영 입니다",
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
          <h1 className="prestext">민족사관고등학교 3학년 서우찬</h1>
          <div className="exp">
            <img src="images/woochan.png" alt="" className="presimg" />
            <h1 className="presexp">
              - FORC 총책임자
              <br />- KBS 출연자
              <br />- 다수의 수상경력
              <br />- 다수의 연구진행
              <br />- 제 2의 파브르
            </h1>
          </div>
        </div>

        <div className="forestfield">
          <h1 className="position">산림 & 토양</h1>
          {member.map((member) => (
            <Member
              img={member.img}
              name={member.name}
              position={member.position}
              explain={member.explain}
            />
          ))}
        </div>
        <div className="beekeepingfield"></div>
        <div className="pollutionfield"></div>
      </div>
    </div>
  );
};

export default Aboutpage;
