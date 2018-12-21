import React from 'react';
import { connect } from 'react-redux';

import {Todo} from "./Todo";
import {toggleTodoCompletedState} from "../actions/TodosActions";

export const Todos = ({todos, toggleTodoCompletedState}) => {
  const onTodoClick = (index) => () => {
      toggleTodoCompletedState(index);
  };

  return (
      <ul>
          {todos.map((todo, index) => (
              <Todo key={index} {...todo} onClick={onTodoClick(index)} />
          ))}
      </ul>
  );
};

export const TodosConnected = connect(
  ({ todos }) => ({ todos }),
  {toggleTodoCompletedState},
)(Todos);
