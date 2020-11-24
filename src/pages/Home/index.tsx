import React, { useCallback, useState } from "react";
// import { FiArrowRight } from "react-icons/fi";
// import {Link} from 'react-router-dom';

import ContainerCard from "../../components/ContainerCard";
import LeftBanner from "../../components/LeftBanner";
import Card from "../../components/Card";

import { Container, CardQuiz } from "./styles";

import QuestionConfig, { QuestionGroup2 } from "../../QuestionConfig";

const Landing: React.FC = () => {
  const [quiz, setQuiz] = useState<any>([]);
  const [showCard, setShowCard] = useState(true);

  const [step, setStep] = useState(0);

  function nextStep() {
    setStep(step + 1);
  }

  function previousStep() {
    setStep(step - 1);
  }

  const handleClickQuiz = useCallback((questParam) => {
    setQuiz(questParam);
    setShowCard(false);
  }, []);

  function handleBack() {
    setQuiz([]);
    setShowCard(true);
  }

  function renderPersonalQuestion(step: number) {
    console.log(step);
    if (step !== 0 && step >= quiz.length) {
      return (
        <Card lastStep>
          <button onClick={previousStep} className="previous">
            Previous
          </button>
          <button onClick={nextStep} className="next">
            Submit
          </button>
        </Card>
      );
    } else {
      return;
    }
  }

  return (
    <Container>
      <h1>Welcome</h1>
      <ContainerCard>
        <LeftBanner />
        <CardQuiz visibled={showCard}>
          <button onClick={() => handleClickQuiz(QuestionConfig)}>
            Step Group 1
          </button>
          <button onClick={() => handleClickQuiz(QuestionGroup2)}>
            Step Group 2
          </button>
        </CardQuiz>
        {quiz && step < quiz.length ? (
          <Card questions={quiz[step]}>
            {step > 0 && (
              <button onClick={previousStep} className="previous">
                Previous
              </button>
            )}
            {step === 0 && (
              <button onClick={handleBack} className="next">
                Back
              </button>
            )}
            <button onClick={nextStep} className="next">
              Next
            </button>
          </Card>
        ) : (
          renderPersonalQuestion(step)
        )}
      </ContainerCard>
    </Container>
  );
};

export default Landing;
