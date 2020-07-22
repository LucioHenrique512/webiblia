import React from "react";
import { Container, Loading, BackButton, Divider } from "../../components";
import {
  HolytextContainer,
  Header,
  BookName,
  ChapterName,
  VersesContainer,
  Verse,
  ChapterControlsContainer,
  ChapterControls,
  ChapterControl,
} from "./style";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { routenames } from "../../constants";

interface HolyTextProps {
  data: any;
  loading?: boolean;
  abbrev: string;
  chapter: string;
  chapters: number;
}

const HolyText = ({
  data,
  loading,
  abbrev,
  chapter,
  chapters,
}: HolyTextProps) => {
  const history = useHistory();

  const handleClickControlChapter = (action: string) => {
    try {
      let chapterNumber = parseInt(chapter);
      if (action === "advance" && chapterNumber < chapters) {
        history.push(`${routenames.BOOKS}/${abbrev}/${chapterNumber + 1}`);
      }
      if (action === "goBack" && chapterNumber !== 1) {
        history.push(`${routenames.BOOKS}/${abbrev}/${chapterNumber - 1}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <HolytextContainer>
          <Header>
            <BookName>{data.book.name}</BookName>
            <ChapterName>Capítulo {data.chapter.number}</ChapterName>
            <BackButton
              to={`/books/${abbrev}`}
              label={`Voltar para ${data.book.name}`}
            />
          </Header>
          <Divider />
          <VersesContainer>
            {data?.verses.map((verse: any) => (
              <React.Fragment key={verse.number}>
                <Verse>
                  <span>{verse.number}</span> {verse.text}
                </Verse>
              </React.Fragment>
            ))}
          </VersesContainer>
          <ChapterControlsContainer>
            <ChapterControls>
              <ChapterControl
                onClick={() => handleClickControlChapter("goBack")}
              >
                <MdKeyboardArrowLeft />
              </ChapterControl>
              <span>
                Capitulo {data.chapter?.number} de {chapters}
              </span>
              <ChapterControl
                onClick={() => handleClickControlChapter("advance")}
              >
                <MdKeyboardArrowRight />
              </ChapterControl>
            </ChapterControls>
          </ChapterControlsContainer>
        </HolytextContainer>
      )}
    </Container>
  );
};

export default HolyText;
