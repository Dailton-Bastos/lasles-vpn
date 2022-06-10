import styled from 'styled-components';

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1140px;
  justify-content: center;
  width: 100%;

  h2 {
    color: var(--gray-900);
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    margin-bottom: 20px;
    max-width: 383px;
  }

  p {
    line-height: 30px;
    max-width: 555px;
    text-align: center;

    strong {
      font-weight: 500;
    }
  }
`;

export const Map = styled.div`
  margin: 155px auto 35px;
  width: 100%;
`;
