import React from "react";
import { useEffect } from "react";
import "../Style/Newspage.css";
import Sticknav from "../Component/Sticknav";
import Subfooter from "../Component/Subfooter";

const Newspage = () => {
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
  
  return (
    <div>
      <Sticknav />

      <div className="tablediv">
        <table className="newstable" cellSpacing={0} cellPadding={0} border={0}>
          <thead className="newsthead">
            <tr>
              <th className="newsth n1">번호</th>
              <th className="newsth n2">제목</th>
              <th className="newsth n3">작성자</th>
              <th className="newsth n4">작성일</th>
              <th className="newsth n5">조회</th>
            </tr>
          </thead>
        </table>
      </div>
      <Subfooter />
    </div>
  );
};

export default Newspage;
