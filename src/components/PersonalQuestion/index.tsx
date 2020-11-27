import React from "react";

import { Container, ContainerButtons } from "./styles";

interface ICardProps {
  previousStep: any;
}
const PersonalQuestion: React.FC<ICardProps> = ({ previousStep }) => {
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

      <ContainerButtons>
        {
          <>
            <button onClick={previousStep} className="previous">
              Previous
            </button>
            <button onClick={() => {}} className="next">
              Submit
            </button>
          </>
        }
      </ContainerButtons>
    </Container>
  );
};

export default PersonalQuestion;
