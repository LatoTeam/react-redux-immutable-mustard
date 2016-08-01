import * as types from '../actions/actionTypes';

export default function helloReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_TEXT:
      return [
        ...state,
        Object.assign({}, action.text)
      ];
    default:
      return state;
  }
}
