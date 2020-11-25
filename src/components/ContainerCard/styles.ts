import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;

  @media(max-width: 720px){
    flex-direction:column;
    margin: 10px 30px;
  }
`;
