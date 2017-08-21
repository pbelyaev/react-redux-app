import React, { Component } from 'react';
import TodosContainer from '../containers/TodosContainer';

class AddTodoFormComponent extends Component {
  registerInputReference(reference) {
    this.inputReference = reference;
  }

  getLatestTodoId() {
    const latestTodo = this.props.todos[this.props.todos.length - 1];

    return undefined !== latestTodo ? latestTodo.id + 1 : 1;
  }

  onSubmitButtonClick() {
    this.props.addTodo({
      id: this.getLatestTodoId(),
      text: this.inputReference.value,
    });

    this.inputReference.value = null;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref={ this.registerInputReference.bind(this) } />

        <button
          type="button"
          onClick={ this.onSubmitButtonClick.bind(this) }>Add</button>
      </div>
    );
  }
};

export default TodosContainer(AddTodoFormComponent);
