import React from "react";
import ContextData from "./Context/ContextData";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import { data } from "./Assets/data";
import "./styles.module.scss";

function App() {
  return (
    <>
      <ContextData.Provider value={data}>
        <Header />
        <Gallery />
      </ContextData.Provider>
    </>
  );
}

export default App;
