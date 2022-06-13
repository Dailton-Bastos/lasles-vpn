import styled, { css } from 'styled-components';

import { ViewProps } from '~/@types/anime';
import { fadeInRight } from '~/styles/animation';

export const Content = styled.div<ViewProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px 0 65px;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 1125px) {
    margin: 30px 0;
  }

  h2 {
    color: var(--gray-900);
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    margin-bottom: 20px;
    max-width: 447px;

    @media only screen and (max-width: 1125px) {
      font-size: 3rem;
      max-width: 100%;
    }
  }

  > p {
    line-height: 30px;
    max-width: 555px;
    text-align: center;

    @media only screen and (max-width: 1125px) {
      max-width: 100%;
    }
  }

  ${({ inView }) => inView && css`animation: ${fadeInRight} 1s;`}
`;

export const Testimonials = styled.div`
  margin: 60px auto 0;
  max-width: 1310px;
  position: relative;

  @media only screen and (max-width: 1125px) {
    margin: 20px auto 0;
  }
`;
