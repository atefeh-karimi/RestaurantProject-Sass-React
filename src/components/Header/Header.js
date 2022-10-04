import React from "react";
import {
  FaUtensils,
  FaAngleDoubleDown,
  FaPinterest,
  FaPaperPlane,
  FaInstagram,
} from "react-icons/fa";
import "./styles.modules.scss";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <div className="header__nav">
          <button className="login">ورود</button>
          <button className="signup">ثبت نام</button>
          <FaUtensils className="header__logo" />
        </div>
        <a href="#gallery" className="header__iconDown">
          <FaAngleDoubleDown />
        </a>
        <div className="header__social">
          <span>
            <FaPinterest />
          </span>
          <span>
            <FaPaperPlane />
          </span>
          <span>
            <FaInstagram />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
