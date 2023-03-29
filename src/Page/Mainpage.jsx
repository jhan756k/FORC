import React, { useState } from "react";
import "../Style/Mainpage.css";
import Navbar from "../Component/Navbar";
import Card from "../Component/Card";

const Mainpage = () => {
  const [news, setNews] = useState([
    {
      img: "/images/cctv.png",
      date: "2021. 07. 01",
      title: "FORC ",
      text: "저희는 숲의 보존과 관련된 프로젝...",
    },
    {
      img: "/images/doc.png",
      date: "2021. 07. 02",
      title: "Paperwork",
      text: "문서 작성하는 것은 재미가 더럽게...",
    },
    {
      img: "/images/lightpanel.png",
      date: "2021. 07. 03",
      title: "Energy",
      text: "친환경 에너지를 사용해야 지구가 ...",
    },
    {
      img: "/images/cctv.png",
      date: "2021. 07. 04",
      title: "Surveillance",
      text: "숲을 지키기 위해 감시를 하면서 ...",
    },
  ]);

  const campaigns = [
    {
      img: "/images/forest.jpg",
      title: ["Forest", "산림"],
    },
    {
      img: "/images/bee.jpg",
      title: ["Beekeeping", "양봉"],
    },
    {
      img: "/images/light.jpg",
      title: ["Pollution", "공해"],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="newtitle">최신 소식</div>
        <div className="cards">
          {news.map((item) => (
            <Card
              img={item.img}
              date={item.date}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
        <a href="/" className="allposts">
          모든 공지 보기
        </a>
      </div>

      <div className="camp">
        <h1 className="camptitle">활동분야 / 캠페인</h1>
        <div className="campcards">
          {campaigns.map((item) => (
            <a href="/" className="camc">
              <div className="campimg">
                <img src={item.img} alt="" className="cimg" />
              </div>
              <div className="titletext">
                <h1 className="ttx">{item.title[0]}</h1>
                <h1 className="ttx">{item.title[1]}</h1>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
