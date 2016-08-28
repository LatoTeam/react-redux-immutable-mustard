import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as helloActions from '../actions/helloActions';
import IconHeart from '../assets/icons/icon.inline.svg';

// This is an example of a Container Component, connected with the Redux Store.
class HelloWorld extends Component {

  booksRow(book, index) {
    return <div key={index}>{book.title}</div>;
  }

  render() {
    return (
      <div className="content">
        <h1>Hello World!</h1>
        {this.props.books.map(this.booksRow)}
        <IconHeart />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  books: state.books
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(helloActions, dispatch)
});

HelloWorld.propTypes = {
  actions: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
