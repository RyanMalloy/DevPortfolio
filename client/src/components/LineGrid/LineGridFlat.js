import React from "react";
import "../../assets/css/LineGrid.css"

const LineGridFlat = ({ children }) => {
  return (
    <div className="moving-grid">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      {children}
    </div>
  );
};

export default LineGridFlat;