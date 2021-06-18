import React from "react";
import "./ProgressBar.scss";

const ProgressBar = (props) => {
  return (
    <div className="bar">
      <div className="progress" style={{ width: `${props.duration}%` }} />
    </div>
  );
};

export default ProgressBar;
