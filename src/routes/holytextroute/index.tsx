import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bibleApi } from "../../modules/api";
import { endpoints } from "../../constants";
import { bibileActions } from "../../actions";
import { HolyText } from "../../containers";
import { useHistory } from "react-router-dom";

const TextRoute = () => {
  const { abbrev, chapter }: any = useParams();
  const { currentBook, selectedBook }: any = useSelector(
    (state: any) => state.bible
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const chapterCondition: boolean =
    !currentBook ||
    currentBook.book.abbrev.pt !== abbrev ||
    currentBook.chapter.number.toString() !== chapter;

  useEffect(() => {
    const getCurrentBook = () => {
      bibleApi
        .get(`${endpoints.bibleApi.GET_VERSES}/${abbrev}/${chapter}`)
        .then((response) => {
          if (response) {
            const { data } = response;
            dispatch(bibileActions.setCurrentBook(data));
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("deu erro");
          history.push("/holytext#error");
        });
    };
    if (chapterCondition) getCurrentBook();
  }, [abbrev, chapter, dispatch, chapterCondition, history]);
  return (
    <HolyText
      loading={chapterCondition}
      data={currentBook}
      abbrev={abbrev}
      chapter={chapter}
      chapters={selectedBook?.chapters}
    />
  );
};

export default TextRoute;
