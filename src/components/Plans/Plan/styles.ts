import styled, { css } from 'styled-components';

type Props = {
  selected: boolean;
  recommended: boolean;
};

export const Wrapper = styled.div<Props>`
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 60px 50px;
  position: relative;

  @media only screen and (max-width: 1125px) {
    padding: 40px 20px;
  }

  ${({ selected }) =>
    selected &&
    css`
    border: 2px solid var(--red-500);
  `}

  ${({ recommended }) =>
    recommended &&
    css`
    &::before {
        content: 'Recommended';
        background: var(--red-500);
        border-radius: 5px;
        color: var(--white);
        display: block;
        font-size: 1.4rem;
        font-weight: 500;
        padding: 5px 8px;
        position: absolute;
        left: 12px;
        top: -15px;
      }
  `}

  h3 {
    color: var(--gray-900);
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 30px;
    margin: 30px 0;

    @media only screen and (max-width: 1125px) {
      margin: 20px 0;
    }
  }

  ul {
    list-style: none;
    margin-bottom: 50px;

    @media only screen and (max-width: 1125px) {
      margin-bottom: 20px;
    }

    li {
      align-items: center;
      display: flex;
      font-size: 1.4rem;
      gap: 20px;
      line-height: 30px;

      @media only screen and (max-width: 1125px) {
        font-size: 1.6rem;
      }

      & + li {
        margin-top: 10px;
      }

      &::before {
        content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADDSURBVHgB7dDBCcIwFIDhl9QBHKFnD5oVnEAF6VUcQUrxKB5FCm5gvarQEbpCdILuockzChWqjWmsN/NDT33tlxcAl8tlisAPYmnE8CIXBOiSB2v++p5Cwx6AkJk67lBS2auaaYQ8AYS2epLzON5VzWmvix3DDQIMiNfq89EqNwGnIJ7q/qXdRBKC6mMfxTVj6dz/Fvi4yb3uIUzUwERN5cVGtoAReYMEzNCDrQ1QCylBRRZAbaQEWQLWdfYRA5fr/7oBpe1ky+qSzRgAAAAASUVORK5CYII=');
        display: block;
        height: 24px;
        width: 24px;
      }
    }
  }
`;

export const Bottom = styled.div<Partial<Props>>`
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-top: auto;

  @media only screen and (max-width: 1125px) {
    width: 100%;
  }

  p {
    font-size: 2.5rem;
    line-height: 30px;

    @media only screen and (max-width: 1125px) {
      font-size: 2rem;
    }

    strong {
      color: var(--gray-900);
      font-weight: 500;
    }
  }

  button {
    align-items: center;
    background: var(--white);
    border: 1px solid var(--red-500);
    border-radius: 50px;
    color: var(--red-500);
    font-weight: 700;
    display: flex;
    height: 45px;
    justify-content: center;
    margin-top: 20px;
    transition: all 0.3s;
    width: 177px;

    @media only screen and (max-width: 1125px) {
      width: 100%;
    }

    &:hover {
      background-color: var(--red-500);
      color: var(--white);
    }

    ${({ selected }) =>
      selected &&
      css`
        background: var(--red-500);
        box-shadow: 0 25px 50px -12px rgba(245, 56, 56, 0.35);
        color: var(--white);
    `}
  }
`;
