import styled, { css } from 'styled-components';

type WrapperProps = {
  isOverflow: boolean;
};

export const Wrapper = styled.blockquote<WrapperProps>`
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  margin-top: 20px;

  ${({ isOverflow }) =>
    isOverflow &&
    css`
      display: -webkit-box;
      position: relative;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      &::before {
        background: linear-gradient(to bottom, rgba(240,249,255,0) 0%,rgba(255,255,255,1) 100%);
        bottom: 0;
        content: '';
        height: 45px;
        left: 0;
        position: absolute;
        right: 0;
        z-index: 1;
      }
    `}

  p {
    color: var(--gray-900);
    line-height: 30px;
    text-align: left;
  }
`;

export const Expand = styled.div`
  align-items: center;
  background: var(--white);
  border: none;
  cursor: pointer;
  display: flex;
  height: 35px;
  justify-content: center;
  margin: 0 auto;
  width: 35px;
`;
