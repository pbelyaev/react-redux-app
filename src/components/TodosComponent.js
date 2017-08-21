import React, { Component } from 'react';
import TodoComponent from "./TodoComponent";
import { connect } from 'react-redux';

class TodosComponent extends Component {
  renderTodosList() {
    return this.props.todos.map(
      ({ id, ...rest }) => <TodoComponent key={ id } id={ id } { ...rest } />
    );
  }

  render() {
    return (
      <ul>
        { this.renderTodosList() }
      </ul>
    );
  }
};

export default connect(
  ({ todos }) => ({ todos })
)(TodosComponent);
