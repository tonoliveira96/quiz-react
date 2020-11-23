import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { FiArrowRight } from "react-icons/fi";
// import {Link} from 'react-router-dom';

import ContainerCard from "../../components/ContainerCard";

import { Container, CardQuiz } from "./styles";

import QuestionConfig, { QuestionGroup2} from "../../QuestionConfig";
import LeftBanner from "../../components/LeftBanner";
import Card from "../../components/Card";

const Landing: React.FC = () => {
  const [quiz, setQuiz] = useState([]);

  const [step, setStep] = useState(0);

  function nextStep() {
    setStep(step + 1);
  }

  function previousStep() {
    setStep(step - 1);
  }

  const handleClickQuiz = useCallback((questParam)=>{
    console.log(questParam);
    setQuiz(questParam);

  },[])


  return (
    <Container>
      <h1>Welcome</h1>
      <ContainerCard>
        <LeftBanner />
        <CardQuiz>
          <button onClick={()=> handleClickQuiz(QuestionConfig)} >Step Group 1</button>
          <button onClick={()=> handleClickQuiz(QuestionGroup2)}>Step Group 2</button>
        </CardQuiz>
        { quiz && step < quiz.length ? (
          <Card questions={quiz[step]}>
            {step > 0 && (
              <button onClick={previousStep} className="previous">
                Previous
              </button>
            )}
            <button onClick={nextStep} className="next">
              Next
            </button>
          </Card>
        ) : (
          <Card>
              <button onClick={previousStep} className="previous">
                Previous
              </button>
              <button onClick={nextStep} className="next">
                Submit
              </button>
          </Card>
        )}
      </ContainerCard>
    </Container>
  );
};

export default Landing;
