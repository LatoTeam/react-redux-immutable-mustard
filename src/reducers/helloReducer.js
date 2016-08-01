import * as types from '../actions/actionTypes';

export default function helloReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_BOOK:
      return [
        ...state,
        Object.assign({}, action.book)
      ];
    default:
      return state;
  }
}
