import uuid from 'uuid/v4';

import { ADD_TODO, COMPLETED_TODO, DELETED_COMPLETED_TODO } from '../actions/todos';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: uuid(),
          todo: action.todo,
          completed: false,
        },
      ];
    case COMPLETED_TODO:
      return state.map(
        item =>
          (item.id === action.id
            ? {
                ...item,
                completed: !item.completed,
              }
            : item),
      );
    case DELETED_COMPLETED_TODO:
      return state.filter(item => !item.completed);
    default:
      return state;
  }
};
