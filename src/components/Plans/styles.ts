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
    margin-bottom: 20px;
  }

  p {
    line-height: 30px;
    max-width: 555px;
    text-align: center;
  }
`;

export const Plans = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  max-width: 1090px;
  margin-top: 60px;
  width: 100%;
`;
