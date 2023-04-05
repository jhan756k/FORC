import React, { useEffect } from "react";
import Sticknav from "../Component/Sticknav";
import "../Style/Loginpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
      <img src="images/login.jpg" alt="" className="logimg" />
      <div className="logwrap">
        <div class="container">
          <div class="forms-container">
            <div class="signin-signup">
              <form action="#" class="sign-in-form">
                <h2 class="titlelog">Sign in</h2>
                <div class="input-field">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="xl"
                    className="iconins"
                  />
                  <input type="text" placeholder="Username" />
                </div>
                <div class="input-field">
                  <FontAwesomeIcon
                    icon={faLock}
                    size="xl"
                    className="iconins"
                  />
                  <input type="password" placeholder="Password" />
                </div>
                <input type="submit" value="Login" class="btn solid" />
                <p class="social-text">Or Sign in with social platforms</p>
                <div class="social-media">
                  <a href="#" class="social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    onClick={() => {
                      alert("Coming Soon!");
                    }}
                    class="social-icon"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" class="social-icon">
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                  <a
                    onClick={() => {
                      alert("Coming Soon!");
                    }}
                    class="social-icon"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </form>
              <form action="#" class="sign-up-form">
                <h2 class="titlelog">Sign up</h2>
                <div class="input-field">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="xl"
                    className="iconins"
                  />
                  <input type="text" placeholder="Username" />
                </div>
                <div class="input-field">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="xl"
                    className="iconins"
                  />
                  <input type="email" placeholder="Email" />
                </div>
                <div class="input-field">
                  <FontAwesomeIcon
                    icon={faLock}
                    size="xl"
                    className="iconins"
                  />
                  <input type="password" placeholder="Password" />
                </div>
                <input type="submit" class="btn" value="Sign up" />
                <p class="social-text">Or Sign up with social platforms</p>
                <div class="social-media">
                  <a href="#" class="social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    onClick={() => {
                      alert("Coming Soon!");
                    }}
                    class="social-icon"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" class="social-icon">
                    <FontAwesomeIcon icon={faGoogle} />
                  </a>
                  <a
                    onClick={() => {
                      alert("Coming Soon!");
                    }}
                    class="social-icon"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div class="panels-container">
            <div class="panel left-panel">
              <div class="content">
                <h3>New here ?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis, ex ratione. Aliquid!
                </p>
                <button class="btn transparent" id="sign-up-btn">
                  Sign up
                </button>
              </div>
            </div>
            <div class="panel right-panel">
              <div class="content">
                <h3>One of us ?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum laboriosam ad deleniti.
                </p>
                <button class="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
