import React, { useContext } from "react";

import { Context } from "../../contexts/context";
import "./BackgroundImg.scss";

function BackgroundImg() {
  const context = useContext(Context);
  const background = context.dataBackground;
  return (
    <div className="container__img">
      <div className="background-alpha"/>
      <img src={background} alt="background" className="img"/>
    </div>
  );
}

export default BackgroundImg;
