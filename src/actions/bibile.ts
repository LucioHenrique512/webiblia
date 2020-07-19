export const types = {
  SET_BOOKS_LIST: "SET_BOOKS_LIST",
  SET_CURRENT_BOOK: "SET_CURRENT_BOOK",
};

export const setBooksState = (response: Array<Object>) => ({
  type: types.SET_BOOKS_LIST,
  payload: response,
});

export const setCurrentBookState = (response: Object) => ({
  type: types.SET_CURRENT_BOOK,
  payload: response,
});
