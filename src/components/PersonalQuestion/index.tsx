import React from "react";

import { Container} from "./styles";

const PersonalQuestion: React.FC = ({ children }) => {

  return (
    <Container>   
        <h4>What's your website?</h4>
        <input type="text" />
        <h4>whats your name?</h4>
        <input type="text" />
        <h4>What's your email?</h4>
        <input type="text" />
        <h4>What's your number?</h4>
        <input type="text" />
    </Container>
  );
};

export default PersonalQuestion;
