import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-bottom: 24px;
  }

  h3 {
    font-family: "Poppins";
    margin-bottom: 10px;
    color: #29292E;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    color: #737380;
  }

  .buttons-container {
    display: flex;
    gap: 8px;
    margin-top: 40px;
  }
`
