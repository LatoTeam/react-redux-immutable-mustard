import * as types from './actionTypes';

export function createHelloText(text) {
  return {
    type: types.CREATE_TEXT,
    text
  };
}
