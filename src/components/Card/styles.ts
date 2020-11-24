import styled from "styled-components";

import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px 32px;

  select {
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    width: 100%;
    height: 32px;
    list-style: none;
    padding: 0 11px;

    option {
      color: rgba(0, 0, 0, 0.65);
    }
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
