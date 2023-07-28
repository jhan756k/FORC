import React from "react";
import { useEffect, useState } from "react";
import "../Style/Infopage.css";
import Sticknav from "../Component/Sticknav";
import axios from "axios";
import jwt_decode from "jwt-decode";

const Infopage = () => {
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

  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwt_decode(token);
      axios
        .post("http://localhost:5000/api/auth", { token: token })
        .then((res) => {
          setLoggedIn(true);
          setUserInfo({
            name: decoded.name,
            email: decoded.email,
            role: decoded.role,
          });
        })
        .catch((err) => {
          alert(err.response.data.message);
          setLoggedIn(false);
        });
    } catch {
      setLoggedIn(false);
      alert("로그인이 필요합니다.");
      document.location.href = "/join";
    }
  }, []);

  if (!loggedIn) return <div><Sticknav /></div>;
  else {
    return (
      <div>
        <Sticknav />
        <div className="infodiv">
          <div className="infocard">
            <div className="innername">{userInfo.name}</div>
            <div className="inneremail">{userInfo.email}</div>
            <div className="innerrole">
              회원등급:<span className="rolespan">{userInfo.role}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Infopage;
