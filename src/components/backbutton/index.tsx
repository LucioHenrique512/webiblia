import React from "react";
import { Container } from "./style";
import { FiArrowLeft } from "react-icons/fi";

interface BackButtonProps {
  label?: string;
  to: string;
}

const BackButton = ({ label, to }: BackButtonProps) => {
  return (
    <Container to={to}>
      <FiArrowLeft size={25} />
      {label}
    </Container>
  );
};

export default BackButton;
