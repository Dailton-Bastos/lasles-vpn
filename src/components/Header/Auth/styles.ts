import styled from 'styled-components';

export const Buttons = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 30px;

  @media only screen and (max-width: 1125px) {
    margin-top: auto;
    width: 100%;
  }

  a {
    color: var(--gray-900);
    font-weight: 500;

    &:last-of-type {
      align-items: center;
      border: 1px solid var(--red-500);
      border-radius: 50px;
      color: var(--red-500);
      display: flex;
      height: 45px;
      justify-content: center;
      transition: all 0.3s;
      width: 150px;

      &:hover {
        background-color: var(--red-500);
        color: var(--white);
      }
    }
  }
`;
