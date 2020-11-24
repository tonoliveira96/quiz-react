import { shade } from "polished";
import styled, { css } from "styled-components";

interface IQuizProps {
  visibled: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardQuiz = styled.div<IQuizProps>`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 8px 60px;
  text-align: center;
  ${(props) =>
    props.visibled ? css({ display: "" }) : css({ display: "none" })}

  button {
    background: #1890ff;
    padding: 5px;
    margin-top: 5px;
    border: none;
    border-radius: 4px;
    color: #fff;

    &:hover {
      background: ${shade(0.3, "#1890ff")};
    }
  }
`;
