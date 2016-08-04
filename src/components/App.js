import React, { PropTypes } from 'react';

// This is an example of a page/view Component, which only renders other components.
const App = (props) => {
  return (
    <div className="main-container">
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
