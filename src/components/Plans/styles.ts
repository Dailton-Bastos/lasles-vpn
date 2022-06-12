import styled, { css } from 'styled-components';

import { ViewProps } from '~/@types/anime';
import { fadeInUp } from '~/styles/animation';

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1140px;
  justify-content: center;
  padding-bottom: 150px;
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

export const Plans = styled.div<ViewProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  max-width: 1090px;
  margin-top: 60px;
  width: 100%;

  ${({ inView }) =>
    inView &&
    css`
      > div {
        animation-name: ${fadeInUp};
        animation-duration: 0.5s;

        &:nth-child(2) {
          animation-duration: 0.7s;
        }

        &:nth-child(3) {
          animation-duration: 0.9s;
        }
      }
  `}
`;
