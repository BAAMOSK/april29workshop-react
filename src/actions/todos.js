/**
 * Add todo
 * Completed Todo
 * See list of todos
 * Delete todos
 *
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETED_TODO = 'COMPLETED_TODO';
export const DELETED_COMPLETED_TODO = 'DELETED_COMPLETED_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

export function completedTodo(id) {
  return {
    type: COMPLETED_TODO,
    id
  }
}

export function deletedCompletedTodo() {
  return {
    type: DELETED_COMPLETED_TODO
  }
}