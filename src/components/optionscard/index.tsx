import React, { useEffect, useState } from "react";
import { Container, Button } from "./style";

interface OptionCardProps {
  title: string;
  onOptionClick: Function;
  numberOfOptions: number;
}

const OptionsCard = ({
  title,
  onOptionClick,
  numberOfOptions,
}: OptionCardProps) => {
  const [options, setOptions] = useState<Array<number>>([]);

  useEffect(() => {
    const setOptionArray = () => {
      let tempArray: Array<number> = [];
      for (var i: number = 0; i < numberOfOptions; i++) {
        tempArray.push(i + 1);
      }
      setOptions(tempArray);
    };
    setOptionArray();
  }, [numberOfOptions]);

  return (
    <Container>
      <span>{title}</span>
      {options.map((option) => (
        <Button onClick={() => onOptionClick(option)} key={option}>
          {option}
        </Button>
      ))}
    </Container>
  );
};

export default OptionsCard;
