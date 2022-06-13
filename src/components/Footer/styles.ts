import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: var(--gray-50);
  margin-top: 180px;
  padding: 180px 50px 100px;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 1125px) {
    margin-top: 0;
    padding: 30px 15px;
  }
`;

export const Content = styled.div`
  align-items: flex-start;
  display: flex;
  margin: 0 auto;
  max-width: 1140px;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 1125px) {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;

    span {
      font-size: 1.2rem;
    }
  }
`;

export const Social = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media only screen and (max-width: 1125px) {
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }

  p {
    line-height: 30px;
    margin: 20px 0 30px;
    max-width: 340px;

    strong {
      font-weight: 500;
    }

    @media only screen and (max-width: 1125px) {
      font-size: 1.4rem;
      text-align: center;
      margin: 10px 0;
      max-width: 100%;
    }
  }

  span {
    color: var(--gray-400);
    line-height: 30px;

    strong {
      font-weight: 500;
    }
  }
`;
