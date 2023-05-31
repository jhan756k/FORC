import React from "react";
import "../Style/Subfooter.css";

const Subfooter = () => {
  async function campaignClick() {
    if (window.location.pathname !== "/") {
      window.location.href = "/?s=1";
    } else {
      window.scrollTo({
        top: document.querySelector(".camp").offsetTop - 90,
        behavior: "smooth",
      });
    }
  }

  async function newsClick() {
    if (window.location.pathname !== "/") {
      window.location.href = "/?s=2";
    } else {
      window.scrollTo({
        top: document.querySelector(".wrapper").offsetTop - 100,
        behavior: "smooth",
      });
    }
  }
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="frow">
          {/* Column1 */}
          <div className="fcol">
            <h1 className="ftitle">CONTACTS</h1>
            <div className="llist"></div>
          </div>
          {/* Column2 */}
          <div className="fcol">
            <h1 className="ftitle">SITEMAP</h1>
            <div className="llist">
              <a href="/about" className="slink">
                About Us
              </a>
              <a href="#/" onClick={() => newsClick()} className="slink">
                News
              </a>
              <a href="#/" onClick={() => campaignClick()} className="slink">
                Campaign
              </a>
              <a href="/join" className="slink">
                Join Us
              </a>
              <a href="/donate" className="slink">
                Donate
              </a>
            </div>
          </div>
          {/* Column3 */}
          <div className="fcol">
            <h1 className="ftitle">SUBSCRIBE</h1>
          </div>
        </div>
        <hr />
        <div className="copyright">
          &copy; {new Date().getFullYear()} FORC | All rights reserved | Terms
          Of Service | Privacy
        </div>
      </div>
    </div>
  );
};

export default Subfooter;
