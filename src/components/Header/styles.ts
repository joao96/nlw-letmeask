import styled from 'styled-components'

export const Container = styled.header`
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

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
  }

`;

export const Interaction = styled.div`
  .theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 450px) {
    .theme-toggle {
      display: none;
    }
  }
`;