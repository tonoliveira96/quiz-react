import styled from 'styled-components';

export const Container = styled.div `
display: flex;
flex-direction: column;
width: 400px;
padding: 5px;
border: 1px solid;

select {
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    height: 32px;
    list-style: none;
    padding: 0 11px;
  }

`;

export const ContainerButtons = styled.div `
  display: flex;
  flex-direction:row;
  padding: 24px 5px;

  button {
    margin-left: 10px;
    padding: 10px 15px;
    height: 32px;
    justify-content:center;
  }
`