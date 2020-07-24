export const types = {
  SET_BOOKS_LIST: "SET_BOOKS_LIST",
  SET_BOOK_TESTAMENTS_LIST: "SET_BOOK_TESTAMENTS_LIST",
  SET_SELECTED_BOOK: "SET_SELECTED_BOOK",
  SET_CURRENT_BOOK: "SET_CURRENT_BOOK",
};

export const setBooksState = (response: Array<Object>) => ({
  type: types.SET_BOOKS_LIST,
  payload: response,
});

export const setTestamentBooksState = (
  newTestament: Array<Object>,
  oldTestament: Array<Object>
) => ({
  type: types.SET_BOOK_TESTAMENTS_LIST,
  payload: { oldTestament, newTestament },
});

export const setSelectedBookState = (response: Object) => ({
  type: types.SET_SELECTED_BOOK,
  payload: response,
});

export const setCurrentBook = (response: Object) => ({
  type: types.SET_CURRENT_BOOK,
  payload: response,
});
