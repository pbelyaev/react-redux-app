import { connect } from 'react-redux';
import { addTodo, toggleTodoCompletedState } from '../actions/TodosActions';

export default connect(
  ({ todos }) => ({
    todos,
  }),

  dispatch => ({
    addTodo(payload) {
      dispatch(addTodo(payload));
    },

    toggleTodoCompletedState(payload) {
      dispatch(toggleTodoCompletedState(payload));
    },
  }),
);
