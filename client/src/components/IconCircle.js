import React from "react";

const IconCircle = ({ icon: IconComponent, style }) => {
  return (
    <div style={style} className="icon-circle">
      <IconComponent />
    </div>
  );
};

export default IconCircle;