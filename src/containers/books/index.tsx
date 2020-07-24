import React, { useState } from "react";
import { Container, Loading } from "../../components";
import {
  Content,
  TestamentDivider,
  BooksContainer,
  SearchBarContainer,
  SearchHeader,
  NoResultContainer,
} from "./style";
import BookItem from "./bookitem";
import { FaSearch } from "react-icons/fa";
import { filterBooksByName } from "../../modules/bookshelpers";

interface propstypes {
  data: any;
  loading?: Boolean;
}

const Books = ({ data, loading }: propstypes) => {
  const oldTestament: Array<any> = data.oldTestament;
  const newTestament: Array<any> = data.newTestament;
  const books: Array<any> = data.books;

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<Array<any>>([]);

 

  const searchCondition = filteredBooks.length !== 0 || searchQuery !== "";

  const handleClickSearch = (e: any) => {
    e.preventDefault();
    handleSearchBooks();
  };

  const handleSearchInputChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchBooks = () => {
    setFilteredBooks(filterBooksByName(searchQuery, books));
    console.log(filterBooksByName(searchQuery, books));
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <Content data-testid="main-bookslist">
          <SearchBarContainer>
            <form onSubmit={handleClickSearch}>
              <input
                type="text"
                onChange={handleSearchInputChange}
                onKeyUp={handleSearchBooks}
                value={searchQuery}
              />
              <button type="submit">
                <FaSearch />
              </button>
            </form>
          </SearchBarContainer>
          {searchCondition ? (
            <>
              <SearchHeader>
                <h3>Resultado:</h3>
              </SearchHeader>
              {filteredBooks.length === 0 && searchQuery !== "" ? (
                <NoResultContainer>
                  <h3>
                    Sem resultado!
                    <span role="img" aria-label="sad emoji">
                      😕
                    </span>
                  </h3>
                </NoResultContainer>
              ) : (
                <BooksContainer>
                  {filteredBooks.map(
                    (
                      { abbrev, author, chapters, group, name, testament }: any,
                      i
                    ) => (
                      <BookItem
                        key={i}
                        abbrev={abbrev}
                        author={author}
                        chapters={chapters}
                        group={group}
                        name={name}
                        testament={testament}
                      />
                    )
                  )}
                </BooksContainer>
              )}
            </>
          ) : (
            <>
              <TestamentDivider>
                <h3>Antigo testamento</h3>
              </TestamentDivider>
              <BooksContainer>
                {oldTestament?.map(
                  (
                    { abbrev, author, chapters, group, name, testament }: any,
                    i
                  ) => (
                    <BookItem
                      key={i}
                      abbrev={abbrev}
                      author={author}
                      chapters={chapters}
                      group={group}
                      name={name}
                      testament={testament}
                    />
                  )
                )}
              </BooksContainer>
              <TestamentDivider>
                <h3>Novo testamento</h3>
              </TestamentDivider>
              <BooksContainer>
                {newTestament?.map(
                  (
                    { abbrev, author, chapters, group, name, testament }: any,
                    i
                  ) => (
                    <BookItem
                      key={i}
                      abbrev={abbrev}
                      author={author}
                      chapters={chapters}
                      group={group}
                      name={name}
                      testament={testament}
                    />
                  )
                )}
              </BooksContainer>
            </>
          )}
        </Content>
      )}
    </Container>
  );
};

export default Books;
