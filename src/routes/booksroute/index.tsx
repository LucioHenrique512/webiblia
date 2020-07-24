import React, { useEffect } from "react";
import { Books } from "../../containers";
import { bibleApi } from "../../modules/api";
import { endpoints } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { bibileActions } from "../../actions";
import { useHistory } from "react-router-dom";
import { testamentFilter } from "../../modules/bookshelpers";

const BooksRoute = () => {
  const { books, newTestament, oldTestament }: any = useSelector(
    (state: any) => state.bible
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const booksCondition =
    books.length === 0 ||
    newTestament?.length === 0 ||
    oldTestament?.length === 0;

  useEffect(() => {
    const getBooks = () => {
      bibleApi
        .get(endpoints.bibleApi.GET_BOOKS)
        .then((response) => {
          if (response) {
            const { data } = response;
            const { newTestament, oldTestament } = testamentFilter(data);
            dispatch(bibileActions.setBooksState(data));
            dispatch(
              bibileActions.setTestamentBooksState(newTestament, oldTestament)
            );
          }
        })
        .catch((err) => {
          console.log(err.message);
          history.push("/books#error");
        });
    };
    if (booksCondition) getBooks();
  }, [books, dispatch, history, booksCondition]);

  return (
    <Books
      data={{ newTestament, oldTestament, books }}
      loading={books.length === 0}
    />
  );
};

export default BooksRoute;
