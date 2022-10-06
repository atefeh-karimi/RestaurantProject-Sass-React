import React from "react";
import ContextData from "./Context/ContextData";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import { data } from "./Assets/data";
import "./styles.module.scss";

function App() {
  return (
    <>
      <ContextData.Provider value={data}>
        <Header />
        <Slider />
      </ContextData.Provider>
    </>
  );
}

export default App;
