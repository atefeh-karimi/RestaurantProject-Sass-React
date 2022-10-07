import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import {
  FaUtensils,
  FaAngleDoubleDown,
  FaPinterest,
  FaPaperPlane,
  FaInstagram,
} from "react-icons/fa";
import "./styles.modules.scss";

const Search = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "7px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "50%",
  position: "relative",
  top: "30px",
  left: 0,
  right: 0,
  margin: "0 auto",
  background: " rgb(133 121 121 / 18%)",
  backdropFilter: "blur(20px)",
}));

function Header() {
  return (
    <header>
      <div className="container header__container">
        <div className="header__nav">
          <button className="login">ورود</button>
          <button className="signup">ثبت نام</button>
          <FaUtensils className="header__logo" />
        </div>

        <Search bgcolor={"background.default"} color={"text.primary"}>
          <InputBase
            sx={{ width: "100%", fontSize: "18px" }}
            placeholder="جست‌و‌جو..."
          />
        </Search>

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
