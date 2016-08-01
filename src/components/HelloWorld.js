import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as helloActions from '../actions/helloActions';

class HelloWorld extends Component {
  constructor(props, context) {
    super(props, context);

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onSave = this.onSave.bind(this);

    this.state = {
      book: { title: '' }
    };
  }

  onTitleChange(event) {
    const book = this.state.book;
    book.title = event.target.value;

    this.setState({
      book
    });
  }

  onSave() {
    this.props.actions.createBook(this.state.book);
  }

  booksRow(book, index) {
    return <div key={index}>{book.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        {this.props.books.map(this.booksRow)}
        <div>
          <input type="text" onChange={this.onTitleChange} />
          <input type="submit" onClick={this.onSave} />
        </div>
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
