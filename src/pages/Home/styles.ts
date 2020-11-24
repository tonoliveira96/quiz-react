import styled, { css } from "styled-components";

interface IQuizProps {
  visibled: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;

export const CardQuiz = styled.div<IQuizProps>`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 5px 30px;
  text-align: center;
  ${(props) =>
    props.visibled ? css({ display: "" }) : css({ display: "none" })}

  button {
    font-size: 18px;
    background: #1890ff;
    padding: 5px;
    margin-top: 5px;
    border: none;
    border-radius: 4px;
    color: #fff;
  }
`;
