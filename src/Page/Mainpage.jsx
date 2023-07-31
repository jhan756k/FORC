import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style/Mainpage.css";
import Navbar from "../Component/Navbar";
import Card from "../Component/Card";
import Subfooter from "../Component/Subfooter";

const Mainpage = () => {
  useEffect(() => {
    let queryParams = new URLSearchParams(window.location.search);
    let snum = queryParams.get("s");

    if (snum === "1") {
      window.addEventListener("load", () => {
        window.scrollTo({
          top: document.querySelector(".camp").offsetTop - 90,
          behavior: "smooth",
        });
      });
    } else if (snum === "2") {
      window.addEventListener("load", () => {
        window.scrollTo({
          top: document.querySelector(".wrapper").offsetTop - 100,
          behavior: "smooth",
        });
      });
    }
  });

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  reveal();

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/news/")
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <a href="/news" className="allposts">
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
      <Subfooter />
    </div>
  );
};

export default Mainpage;
