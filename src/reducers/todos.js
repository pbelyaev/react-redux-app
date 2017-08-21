export const todo = (state = {}, { type }) => {
  switch (type) {
    case 'TOGGLE_TODO_COMPLETED_STATE':
      return { ...state, completed: !state.completed };

    default:
      return state;
  }
};

export const todos = (state = [], { type, ...payload }) => {
  switch (type) {
    case 'ADD_TODO':
      return state.concat(payload);

    case 'TOGGLE_TODO_COMPLETED_STATE':
      return state.map(
        item => item.id === payload.id ? todo(item, { type }) : item
      );

    default:
      return state;
  }
};
