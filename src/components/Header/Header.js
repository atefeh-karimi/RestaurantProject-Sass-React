import { Box, InputBase, styled } from "@mui/material";
import React from "react";
import { FaUtensils, FaAngleDoubleDown } from "react-icons/fa";
import SocialIcons from "../SocialIcons";
import "./styles.modules.scss";

const Search = styled(Box)(({ theme }) => ({
  padding: "7px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "100%",
  position: "relative",
  top: "30px",
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

        <div className="searchBox">
          <Search>
            <InputBase
              sx={{ width: "100%", fontSize: "18px" }}
              placeholder="جست‌و‌جو..."
            />
          </Search>
        </div>

        <a href="#gallery" className="header__iconDown">
          <FaAngleDoubleDown />
        </a>

        <div className="header__social">
          <SocialIcons />
        </div>
      </div>
    </header>
  );
}

export default Header;
