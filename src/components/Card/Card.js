import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import "./styles.modules.scss";

function Card({ title, img, discount, category }) {
  return (
    <div className="card">
      <img src={img} className="card__img" alt={title} />
      {discount && (
        <div className="discount">
          <p>٪{discount}</p>
        </div>
      )}
      {category && (
        <div className="category">
          <p>دسته</p>
          <FaAngleLeft className="angleIcon" />
        </div>
      )}
    </div>
  );
}

export default Card;
