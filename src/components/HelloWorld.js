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
      text: ''
    };
  }

  onTitleChange(event) {
    let text = this.state.text;
    text = event.target.value;

    this.setState({
      text: text
    });
  }

  onSave() {
    this.props.actions.createHelloText(this.state.text);
  }

  textsRow(text, index) {
    let finalText = '';
    for(var txt in text) {
       finalText = finalText + text[txt];
    }
    return <div key={index}>{finalText}</div>
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        {this.props.texts.map(this.textsRow)}
        <div>
          <input
            type="text"
            onChange={this.onTitleChange} />
          <input
            type="submit"
            onClick={this.onSave} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    texts: state.texts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(helloActions, dispatch)
  };
}

HelloWorld.propTypes = {
  actions: PropTypes.object.isRequired,
  texts: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
