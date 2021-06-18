import React, { Fragment, useState, useContext } from "react";
import "./Epsodes.scss";

import { Context } from "../../../../contexts/context";
import ProgressBar from "./ProgressBar/ProgressBar";
import play from "../../../../assets/play-small-player-w.svg";
import close from "../../../../assets/close-search-w.svg";

function Epsodes(props) {
  const [setActive, setActiveState] = useState(0);
  const context = useContext(Context);
  const epsodes = context.dataEpsodes.filter((i) => i.length !== 0);

  return (
    <Fragment>
      {epsodes
        .filter((eps) => eps.SeasonNumber === props.season)
        .map((eps) => {
          return (
            <div className="epsodes" key={eps.ID}>
              <button
                className="season_btn_epsode"
                onClick={() => {
                  setActiveState(eps.EpisodeNumber);
                }}
              >
                <p>
                  {eps.EpisodeNumber} {eps.Title}
                </p>
                <img src={play} alt="play" className="icon_play" />
              </button>

              <div
                className={
                  (setActive === eps.EpisodeNumber ? "show" : "") +
                  " epsode_content"
                }
              >
                <button
                  className="epsode_content_btn_close"
                  onClick={() => {
                    setActiveState(0);
                  }}
                >
                  <img src={close} alt="close" className="icon_close" />
                </button>
                <div className="container_epsode_img">
                  <img
                    src={`${eps.Image}`}
                    alt={`Epsode ${eps.EpisodeNumber}`}
                    className="epsode_img"
                  />
                  <ProgressBar duration={eps.Duration} />
                </div>
                <div className="container_epsode_synopsis">
                  <p className="epsode_synopsis">{eps.Synopsis}</p>
                </div>
              </div>
            </div>
          );
        })}
    </Fragment>
  );
}

export default Epsodes;
