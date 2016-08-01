import * as types from '../actions/actionTypes';

export default function helloReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_BOOKS_SUCCESS:
      return action.books;
    default:
      return state;
  }
}
