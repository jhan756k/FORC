import React, { useEffect, useState } from "react";
import Sticknav from "../Component/Sticknav";
import "../Style/Loginpage.css";
import axios from "axios";
import jwt_decode from "jwt-decode";

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

  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode(token);
      axios
        .post("http://localhost:5000/api/auth", { token: token })
        .then((res) => {
          if (decoded.role === "admin") {
            setIsAdmin(true);
            setLoggedIn(true);
          } else {
            setIsAdmin(false);
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          alert(err.response.data.message);
          setLoggedIn(false);
          setIsAdmin(false);
        });
    } else {
      setLoggedIn(false);
      setIsAdmin(false);
    }
  }, [token]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const loginPress = () => {
    let formn = document.getElementById("ffsub");
    if (formn.elements[0].value === "" || formn.elements[2].value === "") {
      alert("모든 항목을 입력해주세요.");
      return;
    } else {
      axios
        .post("http://localhost:5000/api/users/login", {
          name: formn.elements[0].value,
          password: formn.elements[2].value,
        })
        .then((res) => {
          alert(res.data.message);
          localStorage.setItem("token", res.data.token);
          window.location.href = "/";
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };
  const registerPress = () => {
    let formn = document.getElementById("ffsub");
    if (
      formn.elements[0].value === "" ||
      formn.elements[1].value === "" ||
      formn.elements[2].value === ""
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    } else if (
      !formn.elements[1].value.match(
        /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
      )
    ) {
      alert("이메일을 정확히 입력해주세요.");
      return;
    } else {
      axios
        .post("http://localhost:5000/api/users/", {
          name: formn.elements[0].value,
          email: formn.elements[1].value,
          password: formn.elements[2].value,
        })
        .then((res) => {
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  const [isFirst, setIsFirst] = useState(true);

  if (!loggedIn) {
    return (
      <div>
        <Sticknav />
        <div className="logindiv">
          <form className="loginform" id="ffsub">
            <div className="loginexp">FORC에 방문해주셔서 감사합니다.</div>
            <div className="sloginexp">로그인 후 이용해주세요.</div>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="아이디"
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="이메일"
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="비밀번호"
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
            <button
              className="loginsubmit"
              onClick={(e) => {
                e.preventDefault();
                loginPress();
              }}
            >
              <span>로그인</span>
            </button>
            <button
              className="registerbutton"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("email").style.display = "inline-block";
                document.getElementsByClassName(
                  "loginsubmit"
                )[0].style.display = "none";
                document.getElementsByClassName("sloginexp")[0].innerHTML =
                  "회원가입 후 이용해주세요.";
                document.getElementsByClassName(
                  "loginsubmit"
                )[0].disabled = true;
                if (isFirst) {
                  setIsFirst(false);
                } else {
                  registerPress();
                }
              }}
            >
              <span>회원가입</span>
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Sticknav />
        <div className="logoutdiv">
          {isAdmin ? (
            <button
              className="loginsubmit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <span>웹사이트 관리</span>
            </button>
          ) : (
            () => {}
          )}
          <button
            className="loginsubmit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <span>내 정보 보기</span>
          </button>
          <button
            className="registerbutton"
            onClick={(e) => {
              e.preventDefault();
              setLoggedIn(false);
              localStorage.removeItem("token");
              alert("로그아웃 되었습니다.");
              window.location.href = "/";
            }}
          >
            <span>로그아웃</span>
          </button>
        </div>
      </div>
    );
  }
};

export default Loginpage;
