import React from "react";

import { Container, ContainerButtons } from "./styles";

interface ICardProps {
  previousStep: any;
  finalStep: any;
}
const PersonalQuestion: React.FC<ICardProps> = ({
  previousStep,
  finalStep,
}) => {
  let questionsAnswered ={}
  

  const questionsHandle = (answer: any) => {
    if (answer) {
      questionsAnswered = Object.assign(questionsAnswered, answer) ;
      sessionStorage.setItem("personal", JSON.stringify(questionsAnswered));
    }
  };

  return (
    <Container>
      <h4>What's your website?</h4>
      <input
        onChange={(e) => questionsHandle({"website": e.target.value})}
        type="text"
      />
      <h4>whats your name?</h4>
      <input
        onChange={(e) => questionsHandle({"name": e.target.value})}
        type="text"
      />
      <h4>What's your email?</h4>
      <input
        onChange={(e) => questionsHandle({"email": e.target.value})}
        type="text"
      />
      <h4>What's your number?</h4>
      <input
        onChange={(e) => questionsHandle({"phoneNo": e.target.value})}
        type="text"
      />

      <ContainerButtons>
        {
          <>
            <button onClick={previousStep} className="previous">
              Previous
            </button>
            <button onClick={()=>finalStep(questionsAnswered)} className="next">
              Submit
            </button>
          </>
        }
      </ContainerButtons>
    </Container>
  );
};

export default PersonalQuestion;
