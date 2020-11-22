import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
  padding-top: 30px;
  align-items: center;
  flex-direction: column;
`;



export const CardQuiz = styled.div `
display: flex;
flex-direction: column;
width: 400px;
padding: 5px;
border: 1px solid;
text-align:center;

a{
  text-decoration: none;
  font-size: 18px;
  background: #1890ff;
  padding: 5px;
  border-radius: 4px;
  color: #fff;
}

hr{
  margin-top: 18px;
  margin-bottom:5px;
}
`;

