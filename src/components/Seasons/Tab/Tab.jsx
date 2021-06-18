import React, { useState } from "react";
import "./Tab.scss";

import Epsodes from "./Epsodes/Epsodes";

function Tab(props) {
  const [toggleState, setToggleState] = useState(1);

  const openSeason = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabs__seasons">
      <div className="tabs__btns">
        <button
          className={toggleState === 1 ? "tab__btn tab__active" : "tab__btn"}
          onClick={() => openSeason(1)}
        >
          T1
        </button>
        <button
          className={toggleState === 2 ? "tab__btn tab__active" : "tab__btn"}
          onClick={() => openSeason(2)}
        >
          T2
        </button>
      </div>
      {toggleState === 1 && <Epsodes season={1} className="active" />}
      {toggleState === 2 && <Epsodes season={2} className="active" />}
    </div>
  );
}

export default Tab;
