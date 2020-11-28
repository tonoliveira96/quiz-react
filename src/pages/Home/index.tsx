import React, { useCallback, useState } from "react";
// import { FiArrowRight } from "react-icons/fi";
import axios from "axios";
import ContainerCard from "../../components/ContainerCard";
import LeftBanner from "../../components/LeftBanner";
import Card from "../../components/Card";

import { Container, CardButtonQuiz } from "./styles";

import QuestionConfig, {
  QuestionCondition,
  QuestionConditionFood,
  QuestGroup1,
  QuestGroup2,
  QuestGroup3,
} from "../../QuestionConfig";
import ThankYou from "../../components/ThankYou";
// import ThankYou from "../../components/ThankYou";

const Landing: React.FC = () => {
  const [quiz, setQuiz] = useState<any>([]);
  const [showCard, setShowCard] = useState(true);

  const [currentStep, setCurrentStep] = useState(0);

  const [lastQuiz, setLastQuiz] = useState();

  //ESCOLHE O GRUPO DE QUESTIONÁRIO BASEADO NA "CONDITION" DA RESPOSTA ANTERIOR
  function nextStep() {

    setCurrentStep(currentStep + 1);
    const nextQuizStep = sessionStorage.getItem("@NextStep");

    if (nextQuizStep) {
      setCurrentStep(0);
      setLastQuiz(quiz);
    }

    switch (nextQuizStep) {
      case "1":
        setQuiz(QuestGroup1);
        break;
      case "2":
        setQuiz(QuestGroup2);
        break;
      case "3":
        setQuiz(QuestGroup3);
        break;
    }

    sessionStorage.removeItem("@NextStep");
  }

  function previousStep() {
    setCurrentStep(currentStep - 1);
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
          questions={[]}
          finalStep={finalStep}
        />
      );
    }
  }

  const handleClickQuiz = useCallback((questParam) => {
    setQuiz(questParam);
    setShowCard(false);
  }, []);

  const finalStep = useCallback((personalQuestions) => {
    const apiData = personalQuestions;

    // ENDPOINT - VOCE DEVE MANTER ESSE ENDPOINT
    const endPoint = "https://fortodayapi.agencysavage.com/wrike-task";
    console.log(apiData);
    axios
      .post(endPoint, {
        title: personalQuestions.name,
        description: apiData,
        // FOLDER ID - VOCE DEVE MANTER ESSE FOLDER ID
        folder: "IEAA6GKGI4RSVONQ",
      })
      .then(() => {
        return <ThankYou />;
      });
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
            Step Group Condition
          </button>
          <button onClick={() => handleClickQuiz(QuestionConditionFood)}>
            Quiz Food Condition
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
