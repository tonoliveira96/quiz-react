import React, { useEffect, useState } from "react";
import { useSpring, animated } from 'react-spring';

import { Container, ContainerButtons } from "./styles";

interface ICardProps {
  quizId?: string;
  steps: number;
  questions: any[];
}
interface IQuestionProps {
  id: number;
  question: string,
  options: string[]
}

const Card: React.FC<ICardProps> = ({ quizId, questions, steps, children }) => {
  // const [question, setQuestions] = useState<any>([]);

  useEffect(() => {
    // const storageQuestions = localStorage.getItem("@Quiz:StepGroups");
    // const parseQuestions = JSON.parse(String(storageQuestions));
  }, [quizId]);

  const props = useSpring({
    opacity: 1, delay: 400, transform: 'translateX(0)', from: { opacity: 0, transform: 'translateX(200px)' },
  });



  return (
    <Container>
      {questions.map((val: IQuestionProps, key: number) => {
        console.log(val);
        console.log(key);
        return (
          <animated.div key={key} style={{...props}}>
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
      })}
      <ContainerButtons>
      {children}
      </ContainerButtons>
    </Container>
  );
};

export default Card;
