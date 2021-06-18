import React, { useContext } from "react";

import "./Root.scss";
import Seasons from "../components/Seasons/Seasons.jsx";
import Contexts from "../contexts/context.jsx";
import About from "../components/About/About.jsx";
import Title from "../components/Title/Title.jsx";
import BackgroundImg from "../components/BackgroundImg/BackgroundImg.jsx";

function Pages() {
  return (
    <Contexts>
      <div className="container_root">
        <BackgroundImg />
        <section className="title">
          <Title />
        </section>
        <section className="seasons">
          <Seasons />
        </section>
        <section className="about">
          <About />
        </section>
       
      </div>
    </Contexts>
  );
}

export default Pages;
