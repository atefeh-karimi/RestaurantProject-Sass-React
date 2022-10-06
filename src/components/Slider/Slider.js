import React from "react";
import contextData from "../../Context/ContextData";
import Card from "../Card/Card";
import "./styles.modules.scss";

function Slider() {
  const data = React.useContext(contextData);
  return (
    <section className="gallery" id="gallery">
      <div className="container gallery__container">
        <h2>محبوب‌ترین غذاها</h2>

        <div className="gallery__cards">
          {data.map((card) => {
            return <Card key={card.id} {...card} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Slider;
