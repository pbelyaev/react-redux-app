import {TODO, TODOS} from "../constants/actions";

export const todoInitialState = {
  completed: false,
  text: '',
};

export const todo = (state = todoInitialState, { type, payload }) => {
  switch (type) {
    case TODO.TOGGLE_COMPLETED: {
      return { ...state, completed: !state.completed };
    }
    case TODO.CREATE: {
      return {...state, ...payload};
    }
    default: {
      return state;
    }
  }
};

export const todos = (state = [], { type, payload }) => {
  switch (type) {
    case TODOS.ADD: {
      return [...state, todo(todoInitialState, { type: TODO.CREATE, payload })];
    }
    case TODO.TOGGLE_COMPLETED: {
      return [
          ...state.slice(0, payload.index),
          todo(state[payload.index], { type }),
          ...state.slice(payload.index + 1),
      ];
    }
    default: {
      return state;
    }
  }
};
