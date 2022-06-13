import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  justify-content: center;

  @media only screen and (max-width: 1125px) {
    margin: 30px 0;
  }

  a {
    align-items: center;
    background-color: var(--white);
    border-radius: 50%;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04);
    display: flex;
    height: 33.6px;
    justify-content: center;
    transition: all .2s ease-in-out;
    width: 33.6px;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
