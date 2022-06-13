import styled, { css } from 'styled-components';

type Props = {
  isActive: boolean;
};

export const Menu = styled.div<Props>`
  cursor: pointer;

  div {
    background: var(--gray-900);
    margin: 8px;
    height: 2px;
    transition: 0.3s;
    width: 32px;

    ${({ isActive }) =>
      isActive &&
      css`

        transform: rotate(-45deg) translate(-8px, 8px);

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -7px);
        }
    `}
  }
`;
