import React from "react";
import AppPromotion from "../AppPromotion";
import SocialIcons from "../SocialIcons";

import "./styles.modules.scss";

function Footer() {
  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__downApp">
          <h3>دانلود اپلیکیشن</h3>
          <div className="apps">
            <AppPromotion />
          </div>
        </div>

        <div className="footer__feedback">
          <h3>بازخورد</h3>
          <p>مارا دربهبود خدمات یاری کنید.</p>
          <a href="/">ارسال پیام</a>
        </div>

        <div className="footer__socials">
          <h3>ما را در شبکه های اجتماعی دنبال کنید.</h3>
          <div className="footer__socials-menu">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
