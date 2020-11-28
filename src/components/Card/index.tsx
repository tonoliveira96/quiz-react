import React, { useState } from "react";
import { render } from 'react-dom';
import { useSpring, animated } from "react-spring";
import PersonalQuestion from "../PersonalQuestion";

import { Container, ContainerButtons } from "./styles";

interface ICardProps {
  lastStep: boolean;
  stepNumber: number;
  questions?: any[];
  nextStep?: any;
  previousStep?: any;
  handleBack?: any;
  
}
interface IQuestionProps {
  id: number;
  question: string;
  options: [
    {
      description: string;
      condition: string;
    }
  ];
}

const Card: React.FC<ICardProps> = ({
  lastStep,
  questions,
  nextStep,
  previousStep,
  stepNumber,
  handleBack,
  children,
}) => {

  const props = useSpring({
    opacity: 1,
    delay: 400,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(200px)" },
  });

  function saveNextStep(nextStepQuiz: string) {

    if (nextStepQuiz !== "next") {
      sessionStorage.setItem("@NextStep", nextStepQuiz);
    }
  }

  return (
    <Container >
      {questions &&
        questions.map((val: IQuestionProps, key: number) => {  
          return (
            <animated.div key={key} style={props}>
              <h4>
                {val.id} ) {val.question}
              </h4>

              <select 
                key={val.id}
                placeholder="Select a option"
                onChange={(e) => {
                  saveNextStep(e.target.value);
                }}
              >
                <option  />
                {val.options.map((opt: any, index: number) => {
                  return (
                    <option
                      key={index}
                      label={opt.description}
                      value={opt.condition}
                    ></option>
                  );
                })}
              </select>
            </animated.div>
          );
        })}

      {lastStep && <PersonalQuestion previousStep={previousStep} />}

      <ContainerButtons>
        {lastStep === false && stepNumber > 0 && (
          <button onClick={previousStep} className="previous">
            Previous
          </button>
        )}
        {stepNumber === 0 && (
          <button onClick={handleBack} className="next">
            Back
          </button>
        )}
        { !lastStep &&(<button onClick={nextStep} className="next">
          Next
        </button>)}
      </ContainerButtons>
      {children}
    </Container>
  );
};

export default Card;
