import React from 'react'

const LineGridSpacer = ({ children }) => {
    return (
        <div className="moving-grid-horizontal">
          <div className="line-h"></div>
          <div className="line-h"></div>
          <div className="line-h"></div>
          <div className="line-h"></div>
          <div className="line-h"></div>
          <div className="line-h"></div>
          {children}
        </div>
      );
}

export default LineGridSpacer