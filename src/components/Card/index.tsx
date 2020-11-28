import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import PersonalQuestion from "../PersonalQuestion";

import { Container, ContainerButtons } from "./styles";

interface ICardProps {
  lastStep: boolean;
  stepNumber: number;
  questions: any[];
  questionsAnswered: any[];
  nextStep?: any;
  previousStep?: any;
  finalStep?: any;
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
  questionsAnswered,
  stepNumber,
  handleBack,
  finalStep,
  children,
}) => {
  const [enableNext, setEnableNext] = useState(true);

  const props = useSpring({
    opacity: 1,
    delay: 400,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(200px)" },
  });

  function saveNextStep(nextStepQuiz: string, key: number) {
    questionsAnswered[key] = {
      question: questions[key].question,
      answer: nextStepQuiz,
    };

    disabledButton();

    console.log(questionsAnswered);
    if (nextStepQuiz !== "next") {
      sessionStorage.setItem("@NextStep", nextStepQuiz);
    }
  }

  function disabledButton() {
    if (questionsAnswered.length === questions.length) {
      setEnableNext(false);
    }
  }

  if (nextStep) {
    console.log("clicou");
  }

  return (
    <Container>
      {questions.map((val: IQuestionProps, key: number) => (
        <animated.div key={key} style={props}>
          <h4>
            {val.id} ) {val.question}
          </h4>

          <select
            value={undefined}
            key={val.id}
            placeholder="Select a option"
            onChange={(e) => {
              saveNextStep(e.target.value, key);
            }}
          >
            <option />
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
      ))}

      {lastStep && (
        <PersonalQuestion previousStep={previousStep} finalStep={finalStep} />
      )}

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
        {!lastStep && (
          <button onClick={nextStep} className="next" disabled={enableNext}>
            Next
          </button>
        )}
      </ContainerButtons>
      {children}
    </Container>
  );
};

export default Card;
