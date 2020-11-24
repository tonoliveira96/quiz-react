import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{ 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  color: #000;
  background: #fff;
  font-size: 18px;

  input{
      background-color: #fff;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      width: 100%;
      height: 32px;
      padding: 0 11px;
    }

  input, button, select {
    font-size: 18px;
  }
}
`;
