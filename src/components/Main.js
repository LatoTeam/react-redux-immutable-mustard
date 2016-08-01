import React, { Component, PropTypes } from 'react';

const Main = (props) => {
  return(
    <div className="main-container">
      {props.children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element
};

export default Main;
