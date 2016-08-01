import React, { PropTypes } from 'react';

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
