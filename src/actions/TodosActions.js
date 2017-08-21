export const addTodo = (payload) => ({
  type: 'ADD_TODO',
  ...payload,
  completed: false,
});

export const toggleTodoCompletedState = (payload) => ({
  type: 'TOGGLE_TODO_COMPLETED_STATE',
  ...payload,
});
