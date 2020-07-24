import { bibileActions } from "../actions";
const { types } = bibileActions;

const INIT_STATE = {
  books: [],
  oldTestament: [],
  newTestament: [],
  selectedBook: null,
  currentBook: null,
  currentVerse: null,
};

const bible = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case types.SET_BOOKS_LIST:
      return {
        ...state,
        books: action.payload,
      };
    case types.SET_BOOK_TESTAMENTS_LIST:
      return {
        ...state,
        oldTestament: action.payload.oldTestament,
        newTestament: action.payload.newTestament,
      };
    case types.SET_SELECTED_BOOK:
      return {
        ...state,
        selectedBook: action.payload,
      };
    case types.SET_CURRENT_BOOK:
      return {
        ...state,
        currentBook: action.payload,
      };
    default:
      return state;
  }
};

export default bible;
