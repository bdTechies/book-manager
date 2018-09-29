import * as types from '../types';
import * as actions from '../book-actions';

describe('book actions', () => {
  it('should create an action to set book data', () => {
    const expectedAction1 = {
      type: types.SET_DATA,
      payload: [],
    };
    const expectedAction2 = {
      type: types.SET_DATA,
      payload: [{ title: 'A Tale of Two Cities', author: 'Charles Dickens' }],
    };
    expect(actions.setData([])).toEqual(expectedAction1);
    expect(
      actions.setData([
        { title: 'A Tale of Two Cities', author: 'Charles Dickens' },
      ])
    ).toEqual(expectedAction2);
  });

  it('should create an action to get a book by id', () => {
    const expectedAction = {
      type: types.GET_BOOK_BY_ID,
    };
    expect(actions.getBookById()).toEqual(expectedAction);
  });

  it('should create an action to show a book data', () => {
    const expectedAction1 = {
      type: types.SHOW_BOOK,
      payload: {},
    };
    const expectedAction2 = {
      type: types.SHOW_BOOK,
      payload: {
        title: 'Hello JavaScript',
        author: 'John Doe',
      },
    };
    expect(actions.showBook({})).toEqual(expectedAction1);
    expect(
      actions.showBook({
        title: 'Hello JavaScript',
        author: 'John Doe',
      })
    ).toEqual(expectedAction2);
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

  it('should create an action to delete a book by id', () => {
    const expectedAction = {
      type: types.DELETE_BOOK_BY_ID,
    };
    expect(actions.deleteBookById()).toEqual(expectedAction);
  });
  it('should create an action to set deleted book flag', () => {
    const expectedAction = {
      type: types.BOOK_DELETED,
    };
    expect(actions.bookDeleted()).toEqual(expectedAction);
  });

  it('should create an action to add note to a book', () => {
    const expectedAction = {
      type: types.ADD_NOTE,
    };
    expect(actions.addNote()).toEqual(expectedAction);
  });

  it('should create an action to set import started flag', () => {
    const expectedAction = {
      type: types.IMPORT_STARTED,
    };
    expect(actions.startImportReq()).toEqual(expectedAction);
  });

  it('should create an action to set import finished flag', () => {
    const expectedAction = {
      type: types.IMPORT_FINISHED,
    };
    expect(actions.finisImportReq()).toEqual(expectedAction);
  });

  it('should create an action to set db req started flag', () => {
    const expectedAction = {
      type: types.DB_REQUEST_STARTED,
    };
    expect(actions.dbReqStart()).toEqual(expectedAction);
  });

  it('should create an action to set db req finished flag', () => {
    const expectedAction = {
      type: types.DB_REQUEST_FINISHED,
    };
    expect(actions.dbReqFinish()).toEqual(expectedAction);
  });
});
