import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { FiArrowRight } from "react-icons/fi";
// import {Link} from 'react-router-dom';

import Human from "../../images/human.svg";

import ContainerCard from "../../components/ContainerCard";

import { Container, CardQuiz } from "./styles";

import QuestionConfig from "../../QuestionConfig";

const Landing: React.FC = () => {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {

    const stepGroups = localStorage.getItem("@Quiz:StepGroups");
    if (!stepGroups) {
      localStorage.setItem(
        "@Quiz:StepGroups",
        JSON.stringify([{ StepGroup1: QuestionConfig }])
      );
    }

    // const parsestepGroups = JSON.parse(stepGroups);

    // setQuiz(parsestepGroups);
    
  }, [quiz, setQuiz]);

  return (
    <Container>
      <h1>Welcome</h1>
      <ContainerCard>
        <img src={Human} alt="Human" />

        <CardQuiz>
          {/* {quiz.map((data) => {
            return (
              <Link key={data[0]} to="/quiz">
                {data}
              </Link>
            );
          })} */}
          <Link  to="/quiz">
            StepGrou 1
          </Link>

          <hr />
          <Link to="/manager">Manager Quiz</Link>
        </CardQuiz>
      </ContainerCard>
    </Container>
  );
};

export default Landing;
