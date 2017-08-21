import React, { Component } from 'react';
import TodosComponent from './TodosComponent';
import AddTodoForm from './AddTodoFormComponent';
import { Provider } from 'react-redux';
import store from '../store';

export default class AppComponent extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div>
          <AddTodoForm />
          <TodosComponent />
        </div>
      </Provider>
    );
  }
};
