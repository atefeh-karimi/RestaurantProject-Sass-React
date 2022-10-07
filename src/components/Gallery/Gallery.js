import React from "react";
import contextData from "../../Context/ContextData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Card/Card";
import "./styles.modules.scss";

function Gallery() {
  const data = React.useContext(contextData);

  return (
    <section className="gallery mt-5" id="gallery">
      <div className="container gallery__container">
        <h3>دسته‌‌بندی‌ها</h3>
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
