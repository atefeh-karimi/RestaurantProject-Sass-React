import React from "react";
import { brands } from "../../Assets/data";
import "./styles.modules.scss";

function Brands() {
  return (
    <section class="brands">
      <div class="container brands__container">
        <h2>برندهای پرطرفدار</h2>
        <p>گزیده ای از بهترین و پرطرفدارترین ها</p>

        <div class="brands__cards">
          {brands.map((c) => {
            return (
              <div className="brand card">
                <div className="brand__overlay">
                  <h1>
                    <a href={c.link}>{c.title}</a>
                  </h1>
                </div>
                <img src={c.img} alt={c.title} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Brands;
