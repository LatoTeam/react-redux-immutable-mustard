import * as types from './actionTypes';
import MockApi from '../api/mockApi';

export function loadBooksSuccess(books) {
  return {
    type: types.LOAD_BOOKS_SUCCESS,
    books
  };
}

export function loadBooks() {
  return function (dispatch) {
    return MockApi.getAllBooks().then(books => {
      dispatch(loadBooksSuccess(books));
    }).catch(error => {
      throw (error);
    });
  };
}
