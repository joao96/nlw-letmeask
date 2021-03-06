import styled from "styled-components";

export const Header = styled.header`
  padding: 24px;
  border-bottom: 1px solid #e2e2e2;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    max-height: 45px;
  }

  > div {
    display: flex;
    gap: 16px;

    button {
      height: 40px;
    }
  }
`;

export const MainContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;

  .room-title {
    margin: 32px 0 24px;
    display: flex;
    align-items: center;

    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 24px;
      color: ${({ theme }) => theme.text};
    }

    span {
      margin-left: 16px;
      background: #e559f9;
      border-radius: 9999px;
      padding: 8px 16px;
      color: #fff;
      font-weight: 500;
      font-size: 14px;
    }
  }

  .question-list {
    margin-top: 32px;
  }

  @media (max-width: 900px) {
    max-width: 80vw;
    form {
      textarea {
        min-height: 100px;
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 600px) {
    .room-title {
      h1 {
        font-size: 2rem;
      }
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.6rem;
    }
  }
`;
