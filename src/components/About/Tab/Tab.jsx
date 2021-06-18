import React, { useState } from "react";
import "./Tab.scss";

import Cast from "./Cast/Cast";
import General from "./General/General";

function Tab() {
  const [toggleState, setToggleState] = useState(1);

  const openSeason = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabs__general">
      <div className="tabs__btns">
        <button
          className={toggleState === 1 ? "tab__btn tab__active" : "tab__btn"}
          onClick={() => openSeason(1)}
        >
          General
        </button>
        <button
          className={toggleState === 2 ? "tab__btn tab__active" : "tab__btn"}
          onClick={() => openSeason(2)}
        >
          Cast
        </button>
      </div>
      {toggleState === 1 && <General />}
      {toggleState === 2 && <Cast />}
    </div>
  );
}

export default Tab;
