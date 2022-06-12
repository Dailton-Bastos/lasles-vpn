import styled, { css } from 'styled-components';

import { ViewProps } from '~/@types/anime';
import { fadeInLeft, fadeInRight } from '~/styles/animation';

export const Wrapper = styled.section`
  padding: 0 50px 131px;
  margin-top: 95px;
  width: 100%;
`;

export const Content = styled.div`
  align-items: flex-end;
  display: flex;
  gap: 40px;
  margin: 0 auto;
  max-width: 1140px;
  justify-content: space-between;
  width: 100%;
`;

export const About = styled.div<ViewProps>`
  h2 {
    color: var(--gray-900);
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 50px;
    margin-bottom: 20px;
    max-width: 383px;

  }

  p {
    line-height: 30px;
    max-width: 427px;
  }

  ul {
    list-style: none;
    margin-top: 20px;

    li {
      align-items: center;
      display: flex;
      font-size: 1.4rem;
      gap: 12px;
      line-height: 30px;

      & + li {
        margin-top: 20px;
      }

      &::before {
        content: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHiSURBVHgB3ZVLTuNAEIb/6s56xjeYzHakmckNJj7BBGkSaVaEG0Q8xBKzRLzMCYAVEiAhTpBwAhq4gLmBQbABu4t2XjhxO7LDjn/lrn585b+qbeCziIosql10HLzIOiS+9QMx7kEiUK1tVWT/TEjtbKXOwIZ5rOfsDswBnvq3e4yykCRzjuRF7uE2mKy4amErsE9nAOtVjqMuGFWUU0gsXJuFYjowJyCRw6S7SZIzIaYG3pyAd1AUHU4Hx3YNbbo2EAcfFCF2VdPvjcbvb/L6Wi8FYCgN3QBzkJkisZgejyEs6C9KAOg5du+a+5cQlL0rTA0rpHAthgC15IfDGjYsq5zaYcexQTJWJXYwyMsDDC+qVfRFfh09V5CbMQd3LWMHcPnrbBXE3CgK6G9/jB+ybyIw6S1R9ff5Sr8db5s7m2UARmGyNgMxG3vZdNAegUoAkn299HBsl5DxMcfSy9RmADJ24b4QwEgTHaXHE98u4/0GgT18RKaWN6297+nQxGdFVKID2+UqoZBi7U4HJyBqwR8smhPEhI767wfTcfv/5KRTZSm6SYeh0OkcaHDbtPyVbXrmn/Hn6XJbJMXOh4UM9sWTPki3bCnISD9O12oVof+YjAedRxSy1ko+882swz+f3gCBde0t9hRJHgAAAABJRU5ErkJggg==');
        display: block;
        height: 25px;
        width: 25px;
      }
    }
  }

  ${({ inView }) => inView && css`animation: ${fadeInRight} 1s;`}
`;

export const Hero = styled.div<ViewProps>`
  flex-shrink: 0;
  ${({ inView }) => inView && css`animation: ${fadeInLeft} 1s;`}
`;
