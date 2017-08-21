import React, { Component } from 'react';
import TodosContainer from '../containers/TodosContainer';

class TodoComponent extends Component {
  toggleTodoCompletedState() {
    console.log(this.props);
    this.props.toggleTodoCompletedState({
      id: this.props.id,
    });
  }

  render() {
    return (
      <li onClick={ this.toggleTodoCompletedState.bind(this) }
          style={{ textDecoration: this.props.completed ? 'line-through' : 'initial' }}>{ this.props.text }</li>
    );
  }
};

export default TodosContainer(TodoComponent);
