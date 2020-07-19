import React, { useEffect } from "react";
import { Books } from "../../containers";
import { bibleApi } from "../../modules/api";
import { endpoints } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { bibileActions } from "../../actions";

const BooksRoute = () => {
  const { books }: any = useSelector((state: any) => state.bible);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBooks = () => {
      bibleApi
        .get(endpoints.bibleApi.GET_BOOKS)
        .then((response) => {
          if (response) {
            const { data } = response;
            dispatch(bibileActions.setBooksState(data));
          }
        })
        .catch((err) => console.log(err.message));
    };
    if (books.length === 0) getBooks();
  }, [books, dispatch]);

  return <Books data={books} loading={books.length === 0} />;
};

export default BooksRoute;
