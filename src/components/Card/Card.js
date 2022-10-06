import React from "react";
import "./styles.modules.scss";

function Card({ title, img, price, discount }) {
  return (
    <div className="card">
      <div className="card__overlay">
        <h2>{title}</h2>
        <p>قیمت: {price} ریال</p>
        <a className="card__btn btn" href="/">
          سفارش
        </a>
      </div>
      <img src={img} className="card__img" alt="" />
      {discount && <small class="discount">٪{discount}</small>}
    </div>
  );
}

export default Card;
