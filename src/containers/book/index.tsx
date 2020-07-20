import React from "react";
import {
  BookContainer,
  Header,
  BookName,
  BookAuthor,
  BookGroup,
  BookTestament,
  BookDetails,
  DetailsContent,
} from "./style";
import {
  Container,
  Loading,
  OptionsCard,
  BackButton,
  Divider,
} from "../../components";
import { useHistory } from "react-router-dom";
import { routenames } from "../../constants";

interface BookProps {
  book: any;
  loading?: boolean;
  abbrev: string;
}

const Book = ({ book, loading, abbrev }: BookProps) => {
  const history = useHistory();

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

  const handleClickChapter = (number: number) => {
    console.log(number);
    history.push(`${routenames.BOOKS}/${abbrev}/${number}`);
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
            <BackButton to={"/books"} label={"Voltar para livros"} />
          </Header>
          <Divider />
          <BookDetails>
            <h2>Detalhes do livro</h2>
            <DetailsContent>
              <OptionsCard
                title="Livros"
                numberOfOptions={book.chapters}
                onOptionClick={handleClickChapter}
              />
            </DetailsContent>
          </BookDetails>
        </BookContainer>
      )}
    </Container>
  );
};

export default Book;
