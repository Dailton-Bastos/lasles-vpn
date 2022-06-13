import styled, { css } from 'styled-components';

import { ViewProps } from '~/@types/anime';
import { fadeInLeft } from '~/styles/animation';

export const Content = styled.div<ViewProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1140px;
  justify-content: center;
  width: 100%;

  ${({ inView }) => inView && css`animation: ${fadeInLeft} 1s;`}

  h2 {
    color: var(--gray-900);
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    margin-bottom: 20px;
    max-width: 383px;

    @media only screen and (max-width: 1125px) {
      font-size: 3rem;
      max-width: 100%;
    }
  }

  p {
    line-height: 30px;
    max-width: 555px;
    text-align: center;

    @media only screen and (max-width: 1125px) {
      max-width: 100%;
    }

    strong {
      font-weight: 500;
    }
  }
`;

export const Map = styled.div`
  margin: 155px auto 35px;
  width: 100%;

  @media only screen and (max-width: 1125px) {
    margin: 35px auto;

    img {
      display: block;
      max-width: 100%;
    }
  }
`;
