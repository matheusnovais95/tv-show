import React, { useContext } from "react";
import "./General.scss";

import { Context } from "../../../../contexts/context";
import share from "../../../../assets/share-gray-s.svg";
import sad from "../../../../assets/sad-gray-w.svg";
import rec from "../../../../assets/rec-gray-s.svg";
import add from "../../../../assets/add-gray-s.svg";

function General() {
  const context = useContext(Context);
  const synopsis = context.dataSynopsis;

  return (
    <div className="container_general">
      <section className="container_synopsis">
        <h3>Sinopse</h3>
        <p className="synopsis">{synopsis}</p>
      </section>
      <section className="container_icons">
        <ul className="icons_list">
          <li className="icon_item">
            <button className="icon_btn">
              <img src={add} alt="add my list" />
              <figcaption>My List</figcaption>
            </button>
          </li>
          <li className="icon_item">
            <button className="icon_btn">
              <img src={sad} alt="unlike" />
              <figcaption>Unlike</figcaption>
            </button>
          </li>
          <li className="icon_item">
            <button className="icon_btn">
              <img src={rec} alt="record" />
              <figcaption>Record</figcaption>
            </button>
          </li>
          <li className="icon_item">
            <button className="icon_btn">
              <img src={share} alt="share" />
              <figcaption>Share</figcaption>
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default General;
