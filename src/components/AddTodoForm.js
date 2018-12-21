import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';

import { addTodo } from "../actions/TodosActions";

export class AddTodoForm extends PureComponent {
  state = {
      text: '',
  };

  onInputChange = ({target: {value}}) => {
    this.changeText(value);
  };

  changeText = (text) => {
    this.setState({text});
  };

  addTodo = () => {
    this.props.addTodo(this.state.text);
    this.changeText('');
  };

  render() {
    return (
      <Fragment>
        <input type="text" onChange={this.onInputChange} value={this.state.text} />
        <button type="button" onClick={this.addTodo}>Add</button>
      </Fragment>
    );
  }
};

export const mapDispatchToProps = {addTodo};

export const AddTodoFormConnected = connect(null, mapDispatchToProps)(AddTodoForm);
