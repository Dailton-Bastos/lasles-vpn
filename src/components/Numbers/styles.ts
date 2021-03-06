import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0 50px;
  margin-top: 100px;
  width: 100%;

  @media only screen and (max-width: 1125px) {
    padding: 0 15px;
    margin-top: 60px;
  }
`;

export const Content = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 200px;
  padding: 37px;
  margin: 0 auto;
  max-width: 1140px;
  width: 100%;

  @media only screen and (max-width: 1125px) {
    grid-template-columns: auto;
    padding: 0;
    row-gap: 30px;
    height: auto;
  }
`;
