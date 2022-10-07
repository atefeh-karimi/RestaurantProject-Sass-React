import React from "react";
import ContextData from "./Context/ContextData";
import "swiper/css/bundle";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Sliders from "./components/Slider/Slider";
import { data } from "./Assets/data";
import "./styles.module.scss";

function App() {
  return (
    <>
      <ContextData.Provider value={data}>
        <Header />
        <Gallery />
        <Sliders />
      </ContextData.Provider>
    </>
  );
}

export default App;
