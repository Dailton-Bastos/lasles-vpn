import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: var(--gray-50);
  padding: 180px 50px 100px;
  width: 100%;
`;

export const Content = styled.div`
  align-items: flex-start;
  display: flex;
  margin: 0 auto;
  max-width: 1140px;
  justify-content: space-between;
  width: 100%;
`;

export const Social = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  p {
    line-height: 30px;
    margin: 20px 0 30px;
    max-width: 340px;

    strong {
      font-weight: 500;
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
