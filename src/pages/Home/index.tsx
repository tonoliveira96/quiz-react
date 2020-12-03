import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import ContainerCard from "../../components/ContainerCard";
import LeftBanner from "../../components/LeftBanner";
import Card from "../../components/Card";

import QuestionConfig, {
  QuestionCondition,
  QuestionConditionFood,
  QuestGroup1,
  QuestGroup2,
  QuestGroup3,
} from "../../QuestionConfig";

import { Container, CardButtonQuiz } from "./styles";

const Landing: React.FC = () => {
  const [quiz, setQuiz] = useState<any>([]);
  const [titleQuiz, setTitleQuiz] = useState("Welcome");
  const [showCard, setShowCard] = useState(true);
  const history = useHistory();

  const [currentStep, setCurrentStep] = useState(0);

  const [lastQuiz, setLastQuiz] = useState();

  //ESCOLHE O GRUPO DE QUESTIONÁRIO BASEADO NA "CONDITION" DA RESPOSTA ANTERIOR
  function nextStep() {
    setCurrentStep(currentStep + 1);
    const nextQuizStep = sessionStorage.getItem("@NextStep");
    sessionStorage.removeItem("teste");

    if (nextQuizStep) {
      setCurrentStep(0);
      setLastQuiz(quiz);
    }
    console.log(currentStep);

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
    return true;
  }

  function previousStep() {
    if (lastQuiz && currentStep === 1) {
      setQuiz(lastQuiz);
      setCurrentStep(quiz.length);
    }
    setCurrentStep(currentStep - 1);
    console.log(currentStep);
  }

  function handleBack() {
    setQuiz([]);
    setShowCard(true);
    setTitleQuiz("Welcome");
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
    setTitleQuiz("Questions");
  }, []);

  const finalStep = useCallback((personalQuestions: any)=> {
    history.push("/thankyou");
    const apiData = personalQuestions;

    // ENDPOINT - VOCE DEVE MANTER ESSE ENDPOINT
    const endPoint = "https://fortodayapi.agencysavage.com/wrike-task";
    console.log(apiData);
    try {
      axios
        .post(endPoint, {
          title: personalQuestions.name,
          description: apiData,
          // FOLDER ID - VOCE DEVE MANTER ESSE FOLDER ID
          folder: "IEAA6GKGI4RSVONQ",
        })
        .then(() => {
          localStorage.removeItem("personal");
          
        });
    } catch (err) {
      console.log(err);
    }
  },[history])

  return (
    <Container>
      <h1>{titleQuiz}</h1>
      <ContainerCard key="main">
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

        {currentStep < quiz.length ? (
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
