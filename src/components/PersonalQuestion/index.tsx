import React, { useState } from "react";

import { Container, ContainerButtons } from "./styles";

interface ICardProps {
  previousStep: any;
  finalStep: any;
}
const PersonalQuestion: React.FC<ICardProps> = ({
  previousStep,
  finalStep,
}) => {
  const [enableSubmit, setEnableSubmit] = useState(true);
  let questionsAnswered = {};
  const questionsHandle = (answer: Object) => {
    Object.keys(questionsAnswered).length === 4 && setEnableSubmit(false) ;
    console.log(Object.keys(questionsAnswered).length)
    
    if (answer) {
      questionsAnswered = Object.assign(questionsAnswered, answer);
      localStorage.setItem("personal", JSON.stringify(questionsAnswered));
    }

    
  };

  return (
    <Container>
      <h4>What's your website?</h4>
      <input
        onChange={(e) => questionsHandle({ website: e.target.value })}
        type="text"
      />
      <h4>whats your name?</h4>
      <input
        onChange={(e) => questionsHandle({ name: e.target.value })}
        type="text"
      />
      <h4>What's your email?</h4>
      <input
        onChange={(e) => questionsHandle({ email: e.target.value })}
        type="text"
      />
      <h4>What's your number?</h4>
      <input
        onChange={(e) => questionsHandle({ phoneNo: e.target.value })}
        type="text"
      />

      <ContainerButtons>
        {
          <>
            <button onClick={previousStep} className="previous">
              Previous
            </button>
            <button className="next" onClick={()=>finalStep(questionsAnswered)}>
              Submit
            </button>
          </>
        }
      </ContainerButtons>
    </Container>
  );
};

export default PersonalQuestion;
