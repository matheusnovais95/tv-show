import React, { useContext } from "react";
import "./Cast.scss";

import { Context } from "../../../../contexts/context";

function Cast() {
  const context = useContext(Context);
  const cast = context.dataCast.filter(i => i.length !== 0);

  return (
    <div className="cast">    
        <ul className="cast__list">
          {cast.map((item, index) => (
            <li key={index} className="cast__item">
              {item.Name} 
            </li>
          ))}
        </ul>
     
    </div>
  );
}

export default Cast;
