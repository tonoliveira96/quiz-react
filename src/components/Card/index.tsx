import React, { useState } from "react";
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
  options:[
    {
      description: string,
      condition: string,
    }
  ];
}

const Card: React.FC<ICardProps> = ({ lastStep, questions, verifyCondition, children }) => {
  const props = useSpring({
    opacity: 1,
    delay: 400,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(200px)" },
  });

  const[ teste, setTeste] = useState("");

  return (
    <Container>
      {questions &&
        questions.map((val: IQuestionProps, key: number) => {
          // console.log(val);
          // console.log(key);
          
          return (
            <animated.div key={key} style={{ ...props }}>
              <p>
                {val.id} ) {val.question}
              </p>

              <select
                placeholder="Select a option"
                onClick={()=>verifyCondition(teste)}
              >
                {val.options.map((opt: any, index: number) => {
                  // opt.condition !== 'next' && setTeste(opt.condition)
                  return (
                    <option key={index}>
                      {opt.description}
                    </option>
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
