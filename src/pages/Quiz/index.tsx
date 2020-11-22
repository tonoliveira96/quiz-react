import React, { useState } from "react";
import ContainerCard from "../../components/ContainerCard";
// import { FiArrowRight } from "react-icons/fi";
// import {Link} from 'react-router-dom';

import Human from "../../images/human.svg";

import Card from "../../components/Card";

import QuestionConfig from "../../QuestionConfig";

import { Container } from "./styles";
import Header from "../../components/Header";

const Quiz: React.FC = () => {
  const[step, setStep] = useState(0)

  function nextStep() {
    setStep(step+1)
  }

  function previousStep() {}

  return (
    <Container>
      <Header title="Quiz" />
      <ContainerCard>
        <img src={Human} alt="Human" />
        <Card questions={QuestionConfig[step]} steps={QuestionConfig.length}>
          <button onClick={previousStep}>Previous</button>
          <button
            onClick={nextStep}
          >
            Next
          </button>
        </Card>
      </ContainerCard>
    </Container>
  );
};

export default Quiz;
