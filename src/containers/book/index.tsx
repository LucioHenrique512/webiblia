import React from "react";
import {
  BookContainer,
  Header,
  BookName,
  BookAuthor,
  BookGroup,
  BookTestament,
} from "./style";
import { Container, Loading } from "../../components";

interface BookProps {
  book: any;
  loading?: boolean;
}

const Book = ({ book, loading }: BookProps) => {

  const getTestament = (testament: string) => {
    switch (testament) {
      case "VT":
        return "Antigo testamento";
      case "NT":
        return "Novo testamento";
      default:
        return "";
    }
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <BookContainer>
          <Header>
            <BookName>{book.name}</BookName>
            <BookTestament>{getTestament(book.testament)}</BookTestament>
            <BookAuthor>Autor: {book.author}</BookAuthor>
            <BookGroup>Grupo: {book.group}</BookGroup>
          </Header>
        </BookContainer>
      )}
    </Container>
  );
};

export default Book;
