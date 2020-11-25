import React, { useCallback, useState } from "react";
// import { FiArrowRight } from "react-icons/fi";

import ContainerCard from "../../components/ContainerCard";
import LeftBanner from "../../components/LeftBanner";
import Card from "../../components/Card";

import { Container, CardQuiz } from "./styles";

import QuestionConfig, {
  QuestionCondition,
  QuestGroup1,
} from "../../QuestionConfig";
import ThankYou from "../../components/ThankYou";

const Landing: React.FC = () => {
  const questionaries = [
    {
      QuestionConfig: QuestionConfig,
      QuestGroup1: QuestGroup1,
    },
  ];

  const [quiz, setQuiz] = useState<any>([]);
  const [showCard, setShowCard] = useState(true);

  const [step, setStep] = useState(0);

  function nextStep() {
    setStep(step + 1);
    const nextQuizStep = sessionStorage.getItem("@NextStep");
    if (nextQuizStep) {
      setQuiz(QuestGroup1);
      setStep(0);
    }
    sessionStorage.removeItem("@NextStep");
  }

  function previousStep() {
    setStep(step - 1);
  }

  function handleBack() {
    setQuiz([]);
    setShowCard(true);
  }

  function handleFinish() {
    return <ThankYou />;
  }

  function verifyCondition(cond: string) {
    // questionaries.map((item, index) => {
    //   console.log(cond);
    //   if (index === Number(cond)) {
    //     console.log("You got!!");
    //   }
    // });
    if (cond !== "next") {
      console.log("Next quiz is", cond);
    }
  }

  function renderPersonalQuestion(step: number) {
    console.log(step);
    if (step !== 0 && step >= quiz.length) {
      return (
        <Card lastStep>
          <button onClick={previousStep} className="previous">
            Previous
          </button>
          <button onClick={handleFinish} className="next">
            Submit
          </button>
        </Card>
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
        <CardQuiz visibled={showCard}>
          <button onClick={() => handleClickQuiz(QuestionConfig)}>
            Step Group 1
          </button>
          <button onClick={() => handleClickQuiz(QuestionCondition)}>
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
