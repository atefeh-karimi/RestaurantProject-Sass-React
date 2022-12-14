import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import Card from "../Card/Card";
import "./styles.modules.scss";

function Gallery({ data, title }) {
  return (
    <section className="gallery mt-5" id="gallery">
      <div className="container gallery__container">
        {title !== "دسته‌‌بندی‌ها" ? (
          <>
            <div className="heading">
              <h3>{title}</h3>
              <button className="login">
                مشاهده همه <FaAngleLeft className="angleIcon" />
              </button>
            </div>
            <div className="gallery__cards ">
              {data.slice(0, 5).map((card) => {
                return <Card key={card.id} {...card} />;
              })}
            </div>
          </>
        ) : (
          <>
            <h3>{title}</h3>
            <div className="gallery__cards ">
              {data.map((card) => {
                return <Card key={card.id} {...card} />;
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Gallery;
