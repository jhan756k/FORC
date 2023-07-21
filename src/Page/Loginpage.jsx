import React, { useEffect } from "react";
import Sticknav from "../Component/Sticknav";
import "../Style/Loginpage.css";

const Loginpage = () => {
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
    </div>
  );
};

export default Loginpage;
