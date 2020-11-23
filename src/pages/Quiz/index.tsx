import React, { useEffect, useState } from "react";
import ContainerCard from "../../components/ContainerCard";

import Card from "../../components/Card";
import Header from "../../components/Header";
import LeftBanner from "../../components/LeftBanner";

import QuestionConfig from "../../QuestionConfig";

import { Container } from "./styles";

const Quiz: React.FC = () => {
  const [step, setStep] = useState(0);

  function nextStep() {
    setStep(step + 1);
  }

  function previousStep() {
    setStep(step - 1);
  }

  useEffect(()=>{

  },[])

  return (
    <Container>
      <Header title="Quiz" />
      <ContainerCard>
        <LeftBanner />
        {step < QuestionConfig.length ? (
          <Card questions={QuestionConfig[step]}>
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

export default Quiz;
