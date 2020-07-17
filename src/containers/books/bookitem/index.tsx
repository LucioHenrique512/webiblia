import React from "react";
import { BookContainer, BookContent } from "./style";

interface propstypes {
  abbrev: Object;
  author: String;
  chapters: String;
  group: String;
  name: String;
  testament: String;
}

const BookItem = ({ name, group, testament, author }: propstypes) => {
  return (
    <BookContainer>
      <BookContent>
        <h2>{name}</h2>
        <h3>{group}</h3>
        <h3>Testamento: {testament}</h3>
        <h4>Autor: {author}</h4>
      </BookContent>
    </BookContainer>
  );
};

export default BookItem;
