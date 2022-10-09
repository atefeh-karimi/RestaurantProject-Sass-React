import React from "react";
import ContextData from "./Context/ContextData";
import "swiper/css/bundle";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Sliders from "./components/Slider/Slider";
import Promotion from "./components/Promotion/Promotion";
import { data, Discount } from "./Assets/data";
import "./styles.module.scss";

function App() {
  return (
    <>
      <ContextData.Provider value={data}>
        <Header />
        <Gallery title="دسته‌‌بندی‌ها" data={data} />
        <Sliders />
        <Gallery title="دارای کوپن" data={Discount} />
        <Promotion />
      </ContextData.Provider>
    </>
  );
}

export default App;
