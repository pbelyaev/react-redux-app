import {TODO, TODOS} from "../constants/actions";

export const addTodo = (text) => ({
  type: TODOS.ADD,
  payload: {text},
});

export const toggleTodoCompletedState = (index) => ({
  type: TODO.TOGGLE_COMPLETED,
  payload: {index},
});
