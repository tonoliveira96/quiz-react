import React from "react";
import { useSpring, animated } from "react-spring";
import PersonalQuestion from "../PersonalQuestion";

import { Container, ContainerButtons } from "./styles";

interface ICardProps {
  lastStep?: boolean;
  questions?: any[];
  verifyCondition?: any;
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
  verifyCondition,
  children,
}) => {
  const props = useSpring({
    opacity: 1,
    delay: 400,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(200px)" },
  });

  function saveNextStep(nextStep: string){
    if(nextStep !== "next"){
      sessionStorage.setItem("@NextStep", nextStep)
    }
  }

  return (
    <Container>
      {questions &&
        questions.map((val: IQuestionProps, key: number) => {

          return (
            <animated.div key={key} style={{ ...props }}>
              <p>
                {val.id} ) {val.question}
              </p>

              <select
                placeholder="Select a option"
                onChange={(e) => saveNextStep(e.target.value)}
              >
                <option value=""/>
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

      {lastStep && <PersonalQuestion />}
      <ContainerButtons>{children}</ContainerButtons>
    </Container>
  );
};

export default Card;
