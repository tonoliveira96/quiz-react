import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container } from "./styles";

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = ({ title, children }) => {
  return (
    <Container>
      <Link to="/">
        <FiArrowLeft size={28} color="#000"  />
      </Link>
      <h1>{title}</h1>
    </Container>
  );
};

export default Header;
