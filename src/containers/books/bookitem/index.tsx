import React from "react";
import {
  BookContainer,
  BookContent,
  LeftContainer,
  InfoContainer,
  Name,
  Author,
  Group,
  Abbrev,
} from "./style";
import { useHistory } from "react-router-dom";
import { routenames } from "../../../constants";

interface propstypes {
  abbrev: any;
  author: String;
  chapters: String;
  group: String;
  name: String;
  testament: String;
}

const BookItem = ({ name, group, testament, author, abbrev }: propstypes) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`${routenames.BOOKS}/${abbrev.pt}`);
  };

  return (
    <BookContainer onClick={handleClick}>
      <BookContent>
        <LeftContainer>
          <Abbrev>{abbrev.pt}</Abbrev>
        </LeftContainer>
        <InfoContainer>
          <Name isBig={name.length > 15}>{name}</Name>
          <Author isBig={author.length > 15}>Autor: {author}</Author>
          <Group>{group}</Group>
        </InfoContainer>
      </BookContent>
    </BookContainer>
  );
};

export default BookItem;
