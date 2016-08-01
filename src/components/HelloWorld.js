import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as helloActions from '../actions/helloActions';

class HelloWorld extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      book: { title: '' }
    };
  }

  booksRow(book, index) {
    return <div key={index}>{book.title}</div>;
  }

  render() {
    return (
      <div className="content">
        <h1>Hello World!</h1>
        {this.props.books.map(this.booksRow)}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(helloActions, dispatch)
  };
}

HelloWorld.propTypes = {
  actions: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
