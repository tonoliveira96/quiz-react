import React from "react";
import { useSpring, animated } from "react-spring";

import HandShake from "../../images/handshake.svg";

import { Container } from "./styles";

const ThankYou: React.FC = () => {
  const props = useSpring({
    opacity: 1,
    delay: 600,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateY(-400px)" },
  });
  return (
    <Container>
      <animated.div style={props}>
        <img src={HandShake} alt="handshake" />

        <h2>Thank you!!</h2>
      </animated.div>
    </Container>
  );
};

export default ThankYou;
