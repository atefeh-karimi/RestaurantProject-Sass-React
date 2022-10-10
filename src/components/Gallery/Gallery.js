import React from "react";
import Card from "../Card/Card";
import "./styles.modules.scss";

function Gallery({ data, title }) {
  return (
    <section className="gallery mt-5" id="gallery">
      <div className="container gallery__container">
        <h3>{title}</h3>
        <div className="gallery__cards ">
          {data.map((card) => {
            return <Card key={card.id} {...card} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
