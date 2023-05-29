import React, { useEffect } from "react";
import Sticknav from "../Component/Sticknav";
import "../Style/Loginpage.css";

const Loginpage = () => {
  useEffect(() => {
    document.querySelector(".stick").style.backgroundColor =
      "rgba(255,255,255,1)";
    document.querySelector(".stick").style.zIndex = "100";
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  });

  return (
    <div>
      <Sticknav />
    </div>
  );
};

export default Loginpage;
