import React from "react";
import "./styles.modules.scss";

function Promotion() {
  const [mobile, setMobile] = React.useState("");
  function onChangeTagInput(e) {
    return e.target.value.length > 13
      ? " "
      : setMobile(e.target.value.replace(/[^0-9-۰-۹]/g, ""));
  }

  return (
    <section className="appPromotion">
      <div className="container appPromotion__container">
        <div className="appPromotion__info">
          <h1>اپلیکیشن موبایل رستوران من</h1>
          <p>
            برای دریافت لینک دانلود اپلیکیشن رستوران من، شماره موبایلت رو وارد
            کن.
          </p>
          <div className="getNum">
            <input
              placeholder="۰۹۱۲xxxxxxx"
              type="tel"
              value={mobile}
              onChange={(e) => onChangeTagInput(e)}
            />
            <button>دریافت لینک</button>
          </div>

          <div className="apps">
            <img src="./image/android-google-play.svg" alt="google-play" />
            <img src="./image/apple-app-sotre.svg" alt="apple-store" />
            <img src="./image/huawei-download-icon.png" alt="huawei" />
          </div>
        </div>

        <div className="appPromotion__img">
          <img src="./image/fig-iphone.png" alt="iphone" />
        </div>
      </div>
    </section>
  );
}

export default Promotion;
