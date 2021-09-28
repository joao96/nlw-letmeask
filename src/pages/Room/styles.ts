import styled from "styled-components";


export const MainContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;

  .room-title {
    margin: 32px 0 24px;
    display: flex;
    align-items: center;

    h1 {
      font-family: "Poppins", sans-serif;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.text};
    }

    span {
      margin-left: 16px;
      background: #e559f9;
      border-radius: 9999px;
      padding: 8px 16px;
      color: #fff;
      font-weight: 500;
      font-size: 1.4rem;
    }
  }

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 16px;
      border-radius: 8px;
      background: #fefefe;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      resize: vertical;
      min-height: 130px;
    }

    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;

      .user-info {
        display: flex;
        align-items: center;

        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        span {
          margin-left: 8px;
          color: ${({ theme }) => theme.text};
          font-weight: 500;
          font-size: 1.4rem;
        }
      }

      > span {
        font-size: 1.4rem;
        color: #737380;
        font-weight: 500;

        button {
          background: transparent;
          border: 0;
          color: #835afd;
          text-decoration: underline;
          font-size: 1.4rem;
          font-weight: 500;
          cursor: pointer;
        }
      }
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

  @media (max-width: 500px) {
    .form-footer {
      flex-direction: column;
      gap: 1.6rem;
      justify-content: center;
      align-items: center;
    }

  }
`;