import React from "react";
import "swiper/css/bundle";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Sliders from "./components/Slider/Slider";
import Promotion from "./components/Promotion/Promotion";
import Brands from "./components/Brands/Brands";
import Footer from "./components/Footer/Footer";
import { category, Discount } from "./Assets/data";
import "./styles.modules.scss";

function App() {
  return (
    <>
      <Header />
      <Gallery title="دسته‌‌بندی‌ها" data={category} />
      <Sliders />
      <Gallery title="دارای کوپن" data={Discount} />
      <Promotion />
      <Brands />
      <Footer />
    </>
  );
}

export default App;
