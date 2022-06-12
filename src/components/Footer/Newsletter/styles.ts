import styled, { css } from 'styled-components';

import { ViewProps } from '~/@types/anime';
import { fadein } from '~/styles/animation';

export const Content = styled.div<ViewProps>`
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.10);
  display: flex;
  padding: 45px 70px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: -22%;
  margin: 0 auto;
  max-width: 1140px;
  justify-content: space-between;
  width: 100%;

  ${({ inView }) => inView && css`animation: ${fadein} 2s;`}
`;

export const Title = styled.div`

  h2 {
    color: var(--gray-900);
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 45px;
    max-width: 371px;
    margin-bottom: 20px;
  }

  p {
    line-height: 30px;
  }
`;

export const Subscribe = styled.button`
  align-items: center;
  background: var(--red-500);
  border: 1px solid var(--red-500);
  border-radius: 10px;
  box-shadow: 0 25px 50px -12px rgba(245, 56, 56, 0.35);
  color: var(--white);
  display: flex;
  font-weight: 700;
  flex-shrink: 0;
  justify-content: center;
  height: 60px;
  line-height: 25px;
  transition: background 0.3s;
  width: 250px;

  &:hover {
    background: #dd324d;
  }
`;
