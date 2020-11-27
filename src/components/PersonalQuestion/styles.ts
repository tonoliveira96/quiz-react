import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 32px;
    border-radius: 4px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  padding: 24px 5px;

  button {
    margin-left: 10px;
    height: 42px;
    padding: 0 15px;
    border-radius: 5px;
    font-weight: bold;
    box-shadow: none;
    border: transparent;
    transition: background-color 0.2s;
  }

  button.next {
    background: #44d62c;
    color: #fff;

    &:hover {
      background: ${shade(0.3, "#44d62c")};
    }
  }

  button.previous {
    background-color: #fff;
    border: 1px solid #44d62c;
    color: #44d62c;

    &:hover {
      background: ${shade(0.1, "#fff")};
    }
  }
`;