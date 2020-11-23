import React from "react";
import { useSpring, animated } from 'react-spring';

import Human from "../../images/human.svg";

import { Container } from "./styles";

const LeftBanner : React.FC = ({ children }) => {
  const props = useSpring({
    opacity: 1, delay: 300, transform: 'translateX(0)', from: { opacity: 0, transform: 'translateX(-800px)' },
  });

  return (
  <Container>
    <animated.div style={props}>
    <img src={Human} alt="Human" />
    </animated.div>
  </Container>
  );
};

export default LeftBanner;
