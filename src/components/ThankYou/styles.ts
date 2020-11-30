import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  padding-top: 50px;
  align-items: center;
  justify-content:center;
  flex-direction: column;

  img{
    height:230px;
  }

  a {
    height: 42px;
    padding: 10px 15px;
    margin: 10px;
    border-radius: 5px;
    font-weight: bold;
    box-shadow: none;
    border: transparent;
    text-decoration: none;
    color: #fff;
    background: #1890ff;
  }

`;