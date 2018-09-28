import * as types from '../types';
import * as actions from '../book-actions';

describe('book actions', () => {
  it('should create an action to get a book by id', () => {
    const expectedAction = {
      type: types.GET_BOOK_BY_ID,
    };
    expect(actions.getBookById()).toEqual(expectedAction);
  });
  it('should create an action to save a book', () => {
    const expectedAction = {
      type: types.SAVE_BOOK,
    };
    expect(actions.saveBook()).toEqual(expectedAction);
  });
  it('should create an action to update a book', () => {
    const expectedAction = {
      type: types.UPDATE_BOOK,
    };
    expect(actions.updateBook()).toEqual(expectedAction);
  });
});
