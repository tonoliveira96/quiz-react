import React, { useCallback, useState } from "react";
// import { FiArrowRight } from "react-icons/fi";

import ContainerCard from "../../components/ContainerCard";
import LeftBanner from "../../components/LeftBanner";
import Card from "../../components/Card";

import { Container, CardButtonQuiz } from "./styles";

import QuestionConfig, {
  QuestionCondition,
  QuestGroup1,
} from "../../QuestionConfig";
// import ThankYou from "../../components/ThankYou";

const Landing: React.FC = () => {

  const [quiz, setQuiz] = useState<any>([]);
  const [showCard, setShowCard] = useState(true);

  const [currentStep, setCurrentStep] = useState(0);

  function nextStep() {
    setCurrentStep(currentStep + 1);
    const nextQuizStep = sessionStorage.getItem("@NextStep");
    if (nextQuizStep) {
      setQuiz(QuestGroup1);
      setCurrentStep(0);
    }
    sessionStorage.removeItem("@NextStep");
  }

  function previousStep() {
    setCurrentStep(currentStep - 1);
    console.log(currentStep)
  }

  function handleBack() {
    setQuiz([]);
    setShowCard(true);
  }


  function renderPersonalQuestion(step: number) {
    console.log(step);
    if (step !== 0 && step >= quiz.length) {
      return (
        <Card 
        lastStep 
        stepNumber={currentStep}
        previousStep={previousStep}
        />
      );
    }
  }

  const handleClickQuiz = useCallback((questParam) => {
    setQuiz(questParam);
    setShowCard(false);
  }, []);

  return (
    <Container>
      <h1>Welcome</h1>
      <ContainerCard>
        <LeftBanner />
        <CardButtonQuiz visibled={showCard}>
          <button onClick={() => handleClickQuiz(QuestionConfig)}>
            Step Group 1
          </button>
          <button onClick={() => handleClickQuiz(QuestionCondition)}>
            Step Group 2
          </button>
        </CardButtonQuiz>

        {quiz && currentStep < quiz.length ? (
          <Card
            questions={quiz[currentStep]}
            nextStep={nextStep}
            previousStep={previousStep}
            handleBack={handleBack}
            stepNumber={currentStep}
            lastStep={false}
          />
        ) : (
          renderPersonalQuestion(currentStep)
        )}
      </ContainerCard>
    </Container>
  );
};

export default Landing;
