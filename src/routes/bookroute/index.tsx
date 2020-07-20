import React, { useEffect } from "react";
import { Book } from "../../containers";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bibleApi } from "../../modules/api";
import { endpoints } from "../../constants";
import { bibileActions } from "../../actions";

const BookRoute = () => {
  const { abbrev }: any = useParams();
  const dispatch = useDispatch();
  const { selectedBook } = useSelector((state: any) => state.bible);
  const bookCondition = !selectedBook || selectedBook.abbrev.pt !== abbrev;

  useEffect(() => {
    const getBookDetails = () => {
      bibleApi
        .get(`${endpoints.bibleApi.GET_BOOKS}/${abbrev}`)
        .then((response) => {
          if (response) {
            const { data } = response;
            dispatch(bibileActions.setSelectedBookState(data));
          }
        })
        .catch((err) => console.error(err.message));
    };
    if (bookCondition) getBookDetails();
  }, [abbrev, bookCondition, dispatch]);

  return <Book book={selectedBook} loading={bookCondition} abbrev={abbrev} />;
};

export default BookRoute;
