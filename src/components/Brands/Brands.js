import React from "react";
import { brands } from "../../Assets/data";
import "./styles.modules.scss";

function Brands() {
  return (
    <section className="brands">
      <div className="container brands__container">
        <h2>برندهای پرطرفدار</h2>
        <p>گزیده ای از بهترین و پرطرفدارترین ها</p>

        <div className="brands__cards">
          {brands.map((c) => {
            return (
              <div key={c.id} className="brand card">
                <div className="brand__overlay">
                  <h1>
                    <a href={c.link}>{c.title}</a>
                  </h1>
                </div>
                <img src={process.env.PUBLIC_URL + c.img} alt={c.title} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Brands;
