import React from 'react';

const AbsoluteWrapper = ({children}) => {

  return (
    <>
    <div className="position-absolute">
      <div className="main">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
    </>
  );
};

export default AbsoluteWrapper;
