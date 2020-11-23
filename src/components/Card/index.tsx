import React from "react";
import { useSpring, animated } from "react-spring";
import PersonalQuestion from "../PersonalQuestion";

import { Container, ContainerButtons } from "./styles";

interface ICardProps {
  quizId?: string;
  questions?: any[];
}
interface IQuestionProps {
  id: number;
  question: string;
  options: string[];
}

const Card: React.FC<ICardProps> = ({ quizId, questions, children }) => {

  const props = useSpring({
    opacity: 1,
    delay: 400,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(200px)" },
  });

  return (
    <Container>
      {questions ?(
        questions.map((val: IQuestionProps, key: number) => {
          console.log(val);
          console.log(key);
          return (
            <animated.div key={key} style={{ ...props }}>
              <p>
                {val.id} ) {val.question}
              </p>

              <select>
                {val.options.map((opt: any, index: number) => {
                  return <option key={index}>{opt}</option>;
                })}
              </select>
            </animated.div>
          );
        })):(
          <PersonalQuestion />
        )}
      <ContainerButtons>
      {children}
      </ContainerButtons>
    </Container>
  );
};

export default Card;
